import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

function App() {
  return (
    <div id="top" className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/20 selection:text-white">
      <div className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.12),transparent_40%),radial-gradient(circle_at_40%_90%,rgba(16,185,129,0.12),transparent_45%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Azmain Sheikh Rubayed — Built with motion and care.
      </footer>
    </div>
  )
}

export default App