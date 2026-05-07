import { Link } from '@tanstack/react-router'
import { ArrowRight, Terminal, Cpu, Zap } from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { HeroTerminalDemo } from '../hero-terminal-demo'

interface HeroProps {
  className?: string
  isAuthenticated?: boolean
}

export function Hero(props: HeroProps) {
  const { t } = useTranslation()

  return (
    <section className='relative z-10 flex flex-col items-center overflow-hidden px-6 pt-28 pb-16 md:pt-36 md:pb-24'>
      <div className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,black_30%,transparent_100%)] bg-[size:3rem_3rem] opacity-[0.1]' />
        <motion.div
          animate={{
            top: ['0%', '100%'],
            opacity: [0, 0.35, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'linear',
          }}
          className='via-primary/60 absolute left-0 h-px w-full bg-linear-to-r from-transparent to-transparent'
        />
      </div>

      <div className='flex max-w-4xl flex-col items-center text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='border-border/60 bg-muted/40 text-muted-foreground mb-6 flex items-center gap-2 rounded-full border px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase backdrop-blur-md'
        >
          <Zap className='size-3' />
          {t('Next-Generation API Infrastructure')}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-4xl leading-tight font-black tracking-tight sm:text-5xl md:text-6xl'
        >
          {t('Sync Your AI with')}
          <br />
          <span className='from-primary via-foreground to-primary bg-gradient-to-b bg-clip-text text-transparent italic'>
            SyncAPI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-muted-foreground/80 mt-6 max-w-2xl text-base leading-relaxed md:text-xl'
        >
          {t(
            'The enterprise-grade gateway for professional AI operations. Aggregate, monitor, and scale your LLM infrastructure with cryptographic security and sub-millisecond latency.'
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='mt-10 flex flex-wrap items-center justify-center gap-4'
        >
          {props.isAuthenticated ? (
            <Button
              size='lg'
              className='relative overflow-hidden px-8 font-semibold'
              render={<Link to='/dashboard' />}
            >
              <span className='relative z-10 flex items-center gap-2'>
                {t('Enter Console')}
                <ArrowRight
                  data-icon='inline-end'
                  className='transition-transform group-hover/button:translate-x-1'
                />
              </span>
              <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
                className='bg-primary-foreground/10 absolute inset-0'
              />
            </Button>
          ) : (
            <>
              <Button
                size='lg'
                className='relative overflow-hidden px-8 font-semibold'
                render={<Link to='/sign-up' />}
              >
                <span className='relative z-10 flex items-center gap-2'>
                  <Terminal data-icon='inline-start' />
                  {t('Get API Access')}
                </span>
                <motion.div
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className='bg-primary-foreground/10 absolute inset-0'
                />
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='px-8 font-semibold backdrop-blur-sm'
                render={<Link to='/pricing' />}
              >
                <span className='flex items-center gap-2'>
                  {t('View Capability')}
                  <Cpu data-icon='inline-end' className='opacity-50' />
                </span>
              </Button>
            </>
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className='relative mt-16 w-full max-w-5xl'
      >
        <div className='from-primary/10 absolute -inset-1 rounded-lg bg-gradient-to-b to-transparent opacity-50 blur-2xl' />
        <HeroTerminalDemo />
      </motion.div>
    </section>
  )
}
