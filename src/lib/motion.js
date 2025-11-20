import { useEffect, useRef } from 'react'
import { useScroll, useTransform, motion, useMotionValue, useSpring } from 'framer-motion'

// Preset variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
}

export const blurIn = {
  hidden: { opacity: 0, filter: 'blur(6px)' },
  show: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.6 } }
}

export const reveal = {
  hidden: { clipPath: 'inset(0 0 100% 0)' },
  show: {
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
}

export const springy = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 16 } }
}

// Parallax hook
export function useParallax(ref, range = [ -40, 40 ]) {
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], range)
  return y
}

// Magnetic hover hook
export function useMagnetic(strength = 0.35) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 22, mass: 0.2 })
  const springY = useSpring(y, { stiffness: 300, damping: 22, mass: 0.2 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handleMouse = (e) => {
      const rect = el.getBoundingClientRect()
      const relX = e.clientX - (rect.left + rect.width / 2)
      const relY = e.clientY - (rect.top + rect.height / 2)
      x.set(relX * strength)
      y.set(relY * strength)
    }
    const reset = () => { x.set(0); y.set(0) }
    el.addEventListener('mousemove', handleMouse)
    el.addEventListener('mouseleave', reset)
    return () => {
      el.removeEventListener('mousemove', handleMouse)
      el.removeEventListener('mouseleave', reset)
    }
  }, [strength, x, y])

  return { ref, springX, springY }
}

export { motion }