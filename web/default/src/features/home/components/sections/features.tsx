import {
  Shield,
  Globe,
  Gauge,
  DollarSign,
  Users,
  HeartHandshake,
  Cpu,
  Layers,
  Activity,
  Lock,
} from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'
import { AnimateInView } from '@/components/animate-in-view'

interface FeaturesProps {
  className?: string
}

export function Features(_props: FeaturesProps) {
  const { t } = useTranslation()

  const features = [
    {
      id: 'fast',
      num: '01',
      title: t('Ultra-Low Latency'),
      desc: t(
        'Engineered for speed. Our proprietary routing engine ensures sub-millisecond overhead for every request.'
      ),
      span: 'md:col-span-2',
      icon: <Activity className='text-primary size-4' />,
      visual: (
        <div className='mt-6 grid grid-cols-3 gap-3'>
          {['OpenAI', 'Claude', 'Gemini', 'DeepSeek', 'Qwen', 'Llama'].map(
            (name) => (
              <div
                key={name}
                className='border-border/40 bg-muted/20 hover:border-primary/40 hover:bg-primary/5 hover:text-primary relative overflow-hidden rounded-lg border px-3 py-2.5 text-[10px] font-bold tracking-tight transition-all duration-300'
              >
                <div className='flex items-center gap-2'>
                  <div className='bg-primary/40 size-1.5 rounded-full' />
                  {name}
                </div>
              </div>
            )
          )}
        </div>
      ),
    },
    {
      id: 'secure',
      num: '02',
      title: t('Cryptographic Security'),
      desc: t(
        'Zero-trust architecture with hardware-grade encryption and granular RBAC controls.'
      ),
      span: 'md:col-span-1',
      icon: <Lock className='size-4 text-emerald-500' />,
      visual: (
        <div className='mt-6 flex items-center justify-center'>
          <div className='relative'>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className='absolute -inset-4 rounded-full border border-dashed border-emerald-500/20'
            />
            <div className='relative flex size-16 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/5 shadow-sm'>
              <Shield className='size-7 text-emerald-500' strokeWidth={1.5} />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'global',
      num: '03',
      title: t('Distributed Mesh'),
      desc: t(
        'Global edge network ensuring 99.99% availability and regional compliance.'
      ),
      span: 'md:col-span-1',
      icon: <Globe className='size-4 text-indigo-500' />,
      visual: (
        <div className='mt-6 flex flex-col gap-2.5'>
          {[t('Smart Routing'), t('Traffic Shaping'), t('Audit Logs')].map(
            (step, i) => (
              <div key={step} className='flex items-center gap-3'>
                <div
                  className={cn(
                    'flex size-5 items-center justify-center rounded-md text-[9px] font-black',
                    i === 1
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'border-border/40 bg-muted text-muted-foreground border'
                  )}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className='from-border/80 h-px flex-1 bg-linear-to-r to-transparent' />
                <span className='text-muted-foreground text-[10px] font-bold tracking-widest uppercase'>
                  {step}
                </span>
              </div>
            )
          )}
        </div>
      ),
    },
    {
      id: 'developer',
      num: '04',
      title: t('API Orchestration'),
      desc: t(
        'Unified interface compatible with all major AI protocols and frameworks.'
      ),
      span: 'md:col-span-2',
      icon: <Layers className='size-4 text-amber-500' />,
      visual: (
        <div className='mt-6 flex items-center gap-6'>
          <div className='grid grid-cols-4 gap-2'>
            {['REST', 'gRPC', 'SSE', 'WS'].map((n) => (
              <div
                key={n}
                className='border-border/40 from-muted to-muted/80 flex size-10 items-center justify-center rounded-lg border bg-linear-to-br text-[10px] font-black shadow-sm'
              >
                {n}
              </div>
            ))}
          </div>
          <div className='border-border/40 bg-muted/30 text-muted-foreground flex items-center gap-2 rounded-lg border px-3 py-1.5 text-[10px] font-bold'>
            <Cpu className='size-3.5 text-amber-500' />
            {t('Protocol Agnostic Architecture')}
          </div>
        </div>
      ),
    },
  ]

  const additionalFeatures = [
    {
      icon: <Gauge className='size-5' strokeWidth={1.5} />,
      title: t('High Throughput'),
      desc: t('Optimized for massive concurrency and enterprise workloads.'),
    },
    {
      icon: <DollarSign className='size-5' strokeWidth={1.5} />,
      title: t('Cost Analysis'),
      desc: t('Granular token tracking and real-time financial monitoring.'),
    },
    {
      icon: <Users className='size-5' strokeWidth={1.5} />,
      title: t('Team Isolation'),
      desc: t('Multi-tenant workspace management with strict data privacy.'),
    },
    {
      icon: <HeartHandshake className='size-5' strokeWidth={1.5} />,
      title: t('Cloud Native'),
      desc: t('Container-first design, ready for K8s and edge deployments.'),
    },
  ]

  return (
    <section className='relative z-10 px-6 py-24 md:py-32'>
      <div className='mx-auto max-w-6xl'>
        <AnimateInView className='mb-20 max-w-2xl'>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className='mb-4 flex items-center gap-2'
          >
            <div className='bg-primary h-px w-8' />
            <p className='text-primary text-[10px] font-black tracking-[0.2em] uppercase'>
              {t('Core Capabilities')}
            </p>
          </motion.div>
          <h2 className='text-3xl leading-tight font-black tracking-tighter md:text-5xl'>
            {t('Engineered for the')}
            <br />
            <span className='from-primary via-foreground to-primary bg-gradient-to-r bg-clip-text text-transparent italic'>
              {t('Intelligence Age')}
            </span>
          </h2>
        </AnimateInView>

        {/* Bento grid */}
        <div className='grid gap-6 md:grid-cols-3'>
          {features.map((f, i) => (
            <AnimateInView
              key={f.id}
              delay={i * 100}
              animation='scale-in'
              className={cn(
                'group border-border/40 bg-background/50 hover:border-primary/30 relative overflow-hidden rounded-lg border p-8 backdrop-blur-sm transition-all duration-500',
                f.span
              )}
            >
              <div className='via-primary/40 absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

              <div className='relative z-10'>
                <div className='mb-6 flex items-center justify-between'>
                  <div className='border-border/40 bg-muted/50 text-foreground flex size-10 items-center justify-center rounded-lg border shadow-sm'>
                    {f.icon}
                  </div>
                  <span className='text-muted-foreground font-mono text-[10px] font-bold tracking-widest opacity-30'>
                    // {f.num}
                  </span>
                </div>
                <h3 className='mb-3 text-lg font-black tracking-tight'>
                  {f.title}
                </h3>
                <p className='text-muted-foreground/80 text-sm leading-relaxed'>
                  {f.desc}
                </p>
                {f.visual}
              </div>
            </AnimateInView>
          ))}
        </div>

        {/* Additional features row */}
        <div className='mt-20 grid grid-cols-2 gap-10 md:grid-cols-4'>
          {additionalFeatures.map((f, i) => (
            <AnimateInView
              key={f.title}
              delay={i * 100}
              animation='fade-up'
              className='group flex flex-col items-start'
            >
              <div className='border-border/40 bg-muted/30 text-muted-foreground group-hover:border-primary/40 group-hover:bg-primary/5 group-hover:text-primary mb-5 flex size-12 items-center justify-center rounded-lg border shadow-sm transition-all duration-300'>
                {f.icon}
              </div>
              <h3 className='mb-2.5 text-sm font-bold tracking-tight'>
                {f.title}
              </h3>
              <p className='text-muted-foreground/60 text-xs leading-relaxed'>
                {f.desc}
              </p>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
