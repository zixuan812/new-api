import { useRef, useEffect, useCallback } from 'react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'

interface CounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  decimals?: number
}

function Counter(props: CounterProps) {
  const { end, suffix = '', prefix = '', duration = 1600, decimals = 0 } = props
  const ref = useRef<HTMLSpanElement>(null)
  const startedRef = useRef(false)

  const formatValue = useCallback(
    (v: number) =>
      decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString(),
    [decimals]
  )

  const animate = useCallback(() => {
    const el = ref.current
    if (!el) return
    const start = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      el.textContent = `${prefix}${formatValue(eased * end)}${suffix}`
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, duration, prefix, suffix, formatValue])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      el.textContent = `${prefix}${formatValue(end)}${suffix}`
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          animate()
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [animate, end, prefix, suffix, formatValue])

  return (
    <span ref={ref} className='tabular-nums'>
      {prefix}0{suffix}
    </span>
  )
}

interface StatsProps {
  className?: string
}

interface StatItem {
  end: number
  suffix: string
  label: string
  decimals?: number
}

export function Stats(_props: StatsProps) {
  const { t } = useTranslation()

  const stats: StatItem[] = [
    { end: 50, suffix: '+', label: t('Upstream Nodes') },
    { end: 100, suffix: '+', label: t('Model Billing Modes') },
    { end: 50, suffix: '+', label: t('API Protocols') },
    { end: 10, suffix: '+', label: t('Safety Policies') },
  ]

  return (
    <div className='border-border/40 bg-muted/20 relative z-10 border-y backdrop-blur-sm'>
      <div
        className='absolute inset-0 -z-10 opacity-[0.03]'
        style={{
          backgroundImage:
            'radial-gradient(circle, var(--foreground) 1px, transparent 1px)',
          backgroundSize: '1rem 1rem',
        }}
      />

      <div className='mx-auto max-w-6xl px-6 py-12 md:py-16'>
        <div className='grid grid-cols-2 gap-12 md:grid-cols-4 md:gap-16'>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className='group flex flex-col items-center text-center'
            >
              <div className='relative'>
                <span className='from-foreground to-foreground/60 bg-gradient-to-b bg-clip-text text-3xl font-black tracking-tight text-transparent md:text-5xl'>
                  <Counter
                    end={s.end}
                    suffix={s.suffix}
                    decimals={s.decimals}
                  />
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  className='bg-primary/30 absolute -bottom-2 left-0 h-px'
                />
              </div>
              <span className='text-muted-foreground/60 group-hover:text-primary/60 mt-6 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors'>
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
