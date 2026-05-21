import { motion, useReducedMotion } from 'motion/react'
import { heroContainer, heroChild } from '../../lib/motionVariants'
import Button from '../ui/Button'

export default function Hero() {
  const reduced = useReducedMotion()
  const child = heroChild(reduced)

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 overflow-hidden"
      aria-label="Hero"
    >
      {/* Decorative background orbs — purely visual */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute rounded-full"
          style={{
            top: '15%', left: '5%',
            width: 600, height: 600,
            background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            top: '25%', right: '0%',
            width: 500, height: 500,
            background: 'radial-gradient(circle, rgba(123,47,255,0.05) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center"
      >
        {/* Eyebrow */}
        <motion.p
          variants={child}
          className="font-mono text-[11px] tracking-[4px] uppercase mb-7"
          style={{ color: '#00d4ff', opacity: 0.8 }}
        >
          Advanced Simulation Laboratory
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={child}
          className="font-bold leading-[0.95] tracking-[-2px] mb-8"
          style={{ fontSize: 'clamp(52px, 10vw, 110px)' }}
        >
          <span className="block gradient-text-white">REVERSE</span>
          <span className="block gradient-text-hero">SINGULARITY</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={child}
          className="text-lg leading-relaxed max-w-[480px] mb-12"
          style={{ color: '#888' }}
        >
          Engineering the frontier of scientific simulation — from nuclear fission on the Moon
          to autonomous lunar rescue, rover navigation on Mars, and Falcon 9 booster landings.
        </motion.p>

        {/* CTA */}
        <motion.div variants={child} className="flex gap-4 flex-wrap justify-center">
          <Button href="#projects">Explore Projects</Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={child}
          className="flex gap-12 mt-[72px]"
          role="list"
          aria-label="Project statistics"
        >
          {[
            { value: '4',  label: 'Active Projects' },
            { value: '∞',  label: 'In Development'  },
            { value: '01', label: 'Mission: Explore' },
          ].map(({ value, label }) => (
            <div key={label} role="listitem">
              <div
                className="font-mono text-4xl font-bold"
                style={{ color: '#00d4ff' }}
                aria-label={`${value} ${label}`}
              >
                {value}
              </div>
              <div
                className="text-xs uppercase tracking-[1.5px] mt-1"
                style={{ color: '#888' }}
                aria-hidden="true"
              >
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
