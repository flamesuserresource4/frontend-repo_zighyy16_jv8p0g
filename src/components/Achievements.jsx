import { motion } from 'framer-motion'
import { staggerContainer, scaleIn } from '../lib/motion'

export default function Achievements() {
  const items = [
    'Built wearable IoT health monitors and smart alerting systems',
    'Trained robust CNNs for plant disease classification',
    'Mentored robotics teams to ship imaginative prototypes',
    'Crafted realtime dashboards and interactive ML demos'
  ]

  return (
    <section id="achievements" className="relative w-full bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((badge) => (
            <motion.div key={badge} variants={scaleIn} className="rounded-2xl border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-6 text-sm text-fuchsia-100">
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
