import { motion } from 'framer-motion'
import { staggerContainer, scaleIn } from '../lib/motion'

const groups = [
  {
    title: 'Web',
    items: ['Next.js', 'React', 'JS/TS', 'Laravel', 'PHP', 'SQL']
  },
  {
    title: 'ML / CV',
    items: ['Python', 'TensorFlow', 'PyTorch', 'CNNs', 'VGG16/19', 'MobileNet']
  },
  {
    title: 'Hardware',
    items: ['ESP8266/32', 'Ubidots', 'Arduino Cloud', 'Sensors', 'C++']
  },
  {
    title: 'Creative',
    items: ['Framer Motion', '3D', 'Parallax', 'Lottie']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(147,51,234,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-4 gap-6">
          {groups.map((g) => (
            <motion.div key={g.title} variants={scaleIn} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 backdrop-blur-md">
              <div className="text-sm uppercase tracking-widest text-slate-300">{g.title}</div>
              <ul className="mt-4 space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="text-slate-200/90">{it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
