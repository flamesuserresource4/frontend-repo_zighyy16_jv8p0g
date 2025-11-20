import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { categories, projects } from '../data/projects'
import { fadeInUp, staggerContainer, scaleIn } from '../lib/motion'

export default function Projects() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="relative w-full bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="flex flex-wrap items-center gap-2">
            <FilterChip label="All" value="all" active={active} setActive={setActive} />
            {categories.map((c) => (
              <FilterChip key={c.key} label={c.label} value={c.key} active={active} setActive={setActive} />
            ))}
          </div>

          <motion.div variants={staggerContainer} className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function FilterChip({ label, value, active, setActive }) {
  const on = active === value
  return (
    <button onClick={() => setActive(value)} className={`relative rounded-full border px-4 py-1.5 text-sm transition-colors ${on ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-200' : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'}`}>
      {label}
    </button>
  )
}

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <motion.article layout variants={scaleIn} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
        <div className="aspect-video overflow-hidden">
          <img src={project.thumbnail} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          <p className="mt-1 text-sm text-slate-300">{project.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-300">{t}</span>
            ))}
          </div>
          <button onClick={() => setOpen(true)} className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 hover:bg-white/10">Details</button>
        </div>
      </motion.article>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-center bg-slate-950/70 backdrop-blur">
            <motion.div initial={{ y: 32, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 32, opacity: 0 }} className="mx-4 max-w-lg rounded-2xl border border-white/10 bg-slate-900 p-6">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <p className="mt-2 text-slate-300">{project.body}</p>
                </div>
                <button onClick={() => setOpen(false)} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
