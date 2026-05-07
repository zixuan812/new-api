import { Settings, Zap, BarChart3, ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { AnimateInView } from '@/components/animate-in-view'

export function HowItWorks() {
  const { t } = useTranslation()

  const steps = [
    {
      num: '01',
      title: t('Provision'),
      desc: t(
        'Onboard your infrastructure. Configure upstream providers, aggregate channels, and establish cryptographic keys.'
      ),
      icon: <Settings className='size-6' strokeWidth={1.5} />,
    },
    {
      num: '02',
      title: t('Integrate'),
      desc: t(
        'Standardize your stack. Connect via our high-performance API endpoints compatible with all major LLM protocols.'
      ),
      icon: <Zap className='size-6' strokeWidth={1.5} />,
    },
    {
      num: '03',
      title: t('Analyze'),
      desc: t(
        'Visualize telemetry. Monitor throughput, token economics, and routing performance in real-time.'
      ),
      icon: <BarChart3 className='size-6' strokeWidth={1.5} />,
    },
  ]

  return (
    <section className='border-border/40 bg-muted/5 relative z-10 border-t px-6 py-24 md:py-32'>
      <div className='absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.04]' />

      <div className='mx-auto max-w-6xl'>
        <AnimateInView className='mb-20 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='border-border/40 bg-background/50 text-muted-foreground mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-[9px] font-black tracking-[0.2em] uppercase'
          >
            {t('The Workflow')}
          </motion.div>
          <h2 className='text-3xl font-black tracking-tighter md:text-5xl'>
            {t('From Setup to')}
            <br />
            <span className='from-primary via-foreground to-primary bg-gradient-to-r bg-clip-text text-transparent italic'>
              {t('Production in Minutes')}
            </span>
          </h2>
        </AnimateInView>

        <div className='relative grid gap-12 md:grid-cols-3'>
          <div className='absolute top-24 left-0 hidden w-full px-20 md:block'>
            <div className='via-border/60 h-[2px] w-full bg-linear-to-r from-transparent to-transparent' />
          </div>

          {steps.map((step, i) => (
            <AnimateInView
              key={step.num}
              delay={i * 150}
              animation='fade-up'
              className='group relative flex flex-col items-center text-center'
            >
              <div className='relative mb-8'>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className='border-border/50 bg-background group-hover:border-primary/50 relative z-10 flex size-20 items-center justify-center rounded-lg border shadow-sm transition-all duration-300'
                >
                  <div className='text-muted-foreground group-hover:text-primary transition-colors'>
                    {step.icon}
                  </div>
                </motion.div>

                <div className='bg-primary text-primary-foreground absolute -top-2 -right-2 z-20 flex size-7 items-center justify-center rounded-md font-mono text-[10px] font-black shadow-sm'>
                  {step.num}
                </div>

                {i < steps.length - 1 && (
                  <div className='mt-8 flex justify-center md:hidden'>
                    <ChevronRight className='text-border size-5 rotate-90' />
                  </div>
                )}
              </div>

              <h3 className='mb-3 text-xl font-black tracking-tight'>
                {step.title}
              </h3>
              <p className='text-muted-foreground/80 max-w-[260px] text-sm leading-relaxed'>
                {step.desc}
              </p>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
