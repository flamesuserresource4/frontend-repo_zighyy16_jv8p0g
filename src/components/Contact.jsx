import { motion } from 'framer-motion'
import { fadeInUp, scaleIn } from '../lib/motion'
import { Github, Linkedin, Mail, Facebook } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(20,184,166,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-10">
          <motion.div variants={scaleIn}>
            <h3 className="text-3xl font-semibold">Let’s build something alive.</h3>
            <p className="mt-4 text-slate-300">Open to collaborations in web, ML, robotics, and realtime experiences.</p>
            <div className="mt-6 flex items-center gap-4">
              <IconLink href="mailto:azmain@email.com" Icon={Mail} label="Email" />
              <IconLink href="https://github.com/" Icon={Github} label="GitHub" />
              <IconLink href="https://linkedin.com/" Icon={Linkedin} label="LinkedIn" />
              <IconLink href="https://facebook.com/" Icon={Facebook} label="Facebook" />
            </div>
          </motion.div>

          <motion.form variants={fadeInUp} onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4">
              <Field label="Name" type="text" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@example.com" />
              <Field label="Message" type="textarea" placeholder="Tell me about your idea..." />
              <button className="group relative inline-flex w-fit items-center gap-3 self-start rounded-full border border-teal-400/40 bg-teal-400/10 px-5 py-2.5 text-sm font-medium text-teal-100">
                <span className="absolute inset-0 rounded-full bg-teal-400/20 blur-xl group-hover:bg-teal-400/30 transition-colors"></span>
                <span className="relative">Send</span>
              </button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

function Field({ label, type, placeholder }) {
  return (
    <label className="block">
      <div className="text-xs uppercase tracking-widest text-slate-300">{label}</div>
      {type === 'textarea' ? (
        <textarea placeholder={placeholder} className="mt-2 w-full rounded-lg border border-white/10 bg-slate-900/60 p-3 text-sm outline-none focus:ring-2 focus:ring-teal-400/40" rows={5} />
      ) : (
        <input type={type} placeholder={placeholder} className="mt-2 w-full rounded-lg border border-white/10 bg-slate-900/60 p-3 text-sm outline-none focus:ring-2 focus:ring-teal-400/40" />
      )}
    </label>
  )
}

function IconLink({ href, Icon, label }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200 hover:bg-white/10">
      <Icon size={16} />
      <span>{label}</span>
    </a>
  )
}
