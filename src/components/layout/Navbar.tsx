import { motion, useReducedMotion } from 'motion/react'

export default function Navbar() {
  const reduced = useReducedMotion()

  return (
    <motion.header
      initial={reduced ? false : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-12 h-16"
      style={{
        background: 'rgba(2,2,10,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div
        className="font-mono text-sm font-bold tracking-[3px] uppercase"
        style={{ color: '#00d4ff', textShadow: '0 0 20px rgba(0,212,255,0.6)' }}
      >
        Reverse Singularity
      </div>

      <nav aria-label="Primary navigation" className="hidden md:flex gap-8">
        <a
          href="#projects"
          className="text-[13px] font-medium tracking-[1px] uppercase no-underline transition-colors duration-200 hover:[color:#00d4ff]"
          style={{ color: '#888' }}
        >
          Projects
        </a>
      </nav>

      <div
        className="font-mono text-[11px] px-3 py-1 rounded-full badge-pulse"
        style={{ color: '#00ff88', border: '1px solid rgba(0,255,136,0.3)' }}
        role="status"
        aria-label="System status: online"
      >
        ● Systems Online
      </div>
    </motion.header>
  )
}
