import { motion, useReducedMotion } from 'motion/react'
import { heroContainer, heroChild } from '../../lib/motionVariants'
import Button from '../ui/Button'
import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'
import { Card } from '@/components/ui/card'

export default function Hero() {
  const reduced = useReducedMotion()
  const child = heroChild(reduced)

  return (
    <section
      className="relative min-h-screen flex items-center px-4 md:px-8 pt-20 pb-12 overflow-hidden"
      aria-label="Hero"
    >
      {/* Ambient orbs sit behind the card */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute rounded-full"
          style={{
            top: '10%', left: '0%',
            width: 700, height: 700,
            background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            bottom: '5%', right: '0%',
            width: 600, height: 600,
            background: 'radial-gradient(circle, rgba(123,47,255,0.05) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* ── Hero Card ─────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto">
        <Card className="w-full bg-black/[0.96] border-white/[0.08] overflow-hidden">
          {/* Aceternity spotlight sweeps in from top-left */}
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

          <div className="flex flex-col md:flex-row min-h-[620px]">

            {/* ── Left: animated text content ────────────── */}
            <motion.div
              variants={heroContainer}
              initial="hidden"
              animate="visible"
              className="flex-1 p-8 md:p-12 lg:p-16 relative z-10 flex flex-col justify-center"
            >
              {/* Eyebrow */}
              <motion.p
                variants={child}
                className="font-mono text-[11px] tracking-[4px] uppercase mb-6"
                style={{ color: '#00d4ff', opacity: 0.8 }}
              >
                Advanced Simulation Laboratory
              </motion.p>

              {/* Headline */}
              <motion.h1
                variants={child}
                className="font-bold leading-[0.95] tracking-[-2px] mb-6"
                style={{ fontSize: 'clamp(40px, 5.5vw, 80px)' }}
              >
                <span className="block gradient-text-white">REVERSE</span>
                <span className="block gradient-text-hero">SINGULARITY</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                variants={child}
                className="text-base leading-relaxed mb-8 max-w-[400px]"
                style={{ color: '#888' }}
              >
                Engineering the frontier of scientific simulation — from nuclear fission on the
                Moon to autonomous lunar rescue, rover navigation on Mars, and Falcon 9 booster
                landings.
              </motion.p>

              {/* CTA */}
              <motion.div variants={child} className="flex gap-4 flex-wrap">
                <Button href="#projects">Explore Projects</Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={child}
                className="flex gap-10 mt-10"
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
                      className="font-mono text-3xl font-bold"
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

            {/* ── Right: Spline 3D scene ──────────────────── */}
            <div
              className="flex-1 relative min-h-[300px] md:min-h-0"
              aria-label="Interactive 3D simulation preview"
            >
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>

          </div>
        </Card>
      </div>
    </section>
  )
}
