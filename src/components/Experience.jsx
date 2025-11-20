import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '../lib/motion'

export default function Experience() {
  const items = [
    {
      title: 'Software Developer — Mystrics IT',
      note: 'Turning ideas into living systems',
    },
    {
      title: 'Mentor — WRO Bangladesh',
      note: 'Future Innovation Robo Starter',
    },
  ]

  return (
    <section id="experience" className="relative w-full bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <motion.ul variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-6">
          {items.map((it) => (
            <motion.li key={it.title} variants={fadeInUp} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="text-lg font-semibold">{it.title}</div>
              <div className="text-slate-300 mt-1">{it.note}</div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
