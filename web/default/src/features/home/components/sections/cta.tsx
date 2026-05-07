import { Link } from '@tanstack/react-router'
import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { AnimateInView } from '@/components/animate-in-view'

interface CTAProps {
  className?: string
  isAuthenticated?: boolean
}

export function CTA(props: CTAProps) {
  const { t } = useTranslation()

  if (props.isAuthenticated) {
    return null
  }

  return (
    <section className='relative z-10 overflow-hidden px-6 py-24 md:py-40'>
      <div className='bg-background absolute inset-0 -z-10'>
        <div className='bg-muted/10 absolute inset-0' />
        <div className='absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05]' />
      </div>

      <AnimateInView
        className='mx-auto max-w-4xl text-center'
        animation='scale-in'
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className='border-border/60 bg-muted/40 text-muted-foreground mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-xs font-black tracking-widest uppercase backdrop-blur-md'
        >
          <Sparkles className='size-3.5' />
          {t('Enterprise Ready')}
        </motion.div>

        <h2 className='text-4xl leading-[1.1] font-black tracking-tighter md:text-6xl'>
          {t('Upgrade to the')}
          <br />
          <span className='from-primary via-foreground to-primary bg-gradient-to-r bg-clip-text text-transparent italic'>
            {t('Future of AI APIs')}
          </span>
        </h2>

        <p className='text-muted-foreground/80 mx-auto mt-8 max-w-2xl text-base leading-relaxed md:text-xl'>
          {t(
            'Join thousands of developers scaling their AI infrastructure with SyncAPI. Deploy in seconds, scale for millions.'
          )}
        </p>

        <div className='mt-12 flex flex-wrap items-center justify-center gap-6'>
          <Button
            size='lg'
            className='h-11 px-8 font-semibold'
            render={<Link to='/sign-up' />}
          >
            {t('Initialize Deployment')}
            <ArrowRight
              data-icon='inline-end'
              className='transition-transform group-hover/button:translate-x-1'
            />
          </Button>
          <Button
            size='lg'
            variant='outline'
            className='h-11 px-8 font-semibold backdrop-blur-sm'
            render={<Link to='/pricing' />}
          >
            {t('Review Plans')}
          </Button>
        </div>
      </AnimateInView>
    </section>
  )
}
