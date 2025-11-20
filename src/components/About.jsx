import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, reveal } from '../lib/motion'

export default function About() {
  return (
    <section id="about" className="relative w-full bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <motion.h2 variants={reveal} className="text-3xl sm:text-4xl font-semibold">About Azmain</motion.h2>
            <motion.p variants={fadeInUp} className="mt-6 text-slate-300 leading-relaxed">
              A lyrical mind at the intersection of robotics, machine learning, and the web. I engineer systems that feel alive—software that senses, reacts, and flows with human intent. I believe in elegant motion, purposeful intelligence, and the delight of craft.
            </motion.p>
            <motion.p variants={fadeInUp} className="mt-4 text-slate-300 leading-relaxed">
              Currently at Mystrics IT, I build products and platforms; beyond work, I mentor young innovators at WRO Bangladesh. When I’m not shipping, I explore sensors, edge AI, and playful experiences.
            </motion.p>
          </div>
          <motion.ul variants={staggerContainer} className="grid grid-cols-2 gap-4">
            {[
              'Next.js', 'React', 'Laravel', 'PHP', 'SQL', 'JavaScript',
              'Python', 'TensorFlow', 'PyTorch', 'CNNs', 'ESP32/8266', 'C++',
              'Framer Motion', 'IoT', 'Computer Vision', 'Dashboards'
            ].map((skill) => (
              <motion.li key={skill} variants={fadeInUp} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  )
}
