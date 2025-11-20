import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, reveal } from '../lib/motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-24">
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-3xl">
          <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-widest uppercase text-blue-200/90">
            Azmain — Software Developer • ML Engineer • Robotics
          </motion.span>

          <motion.h1 variants={reveal} className="mt-6 text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1]">
            Azmain — Building Intelligence, Crafting Motion
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-6 text-blue-200/90 text-lg">
            From Uttara, Dhaka — crafting future-facing systems across web, robotics, and machine learning. Driven by curiosity; fueled by creation.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="group relative inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-3 text-sm font-medium text-blue-200">
              <span className="absolute inset-0 -z-0 rounded-full bg-blue-500/20 blur-xl group-hover:bg-blue-500/30 transition-colors"></span>
              <span className="relative">View Projects</span>
            </a>
            <a href="#contact" className="relative inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200">
              Contact
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
