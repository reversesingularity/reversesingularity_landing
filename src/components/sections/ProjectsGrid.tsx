import { useState } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'motion/react'
import { PROJECTS, type Project, type AccentColor } from '../../data/projects'
import { staggerGrid, cardReveal } from '../../lib/motionVariants'
import Badge from '../ui/Badge'

/* ── Per-accent style map ─────────────────────────────────────────────────── */

interface AccentStyle {
  iconBg: string
  iconBorder: string
  hoverBorder: string
  hoverShadow: string
  orb: string
  launchColor: string
}

const ACCENT: Record<AccentColor, AccentStyle> = {
  cyan: {
    iconBg:      'rgba(0,212,255,0.1)',
    iconBorder:  'rgba(0,212,255,0.2)',
    hoverBorder: 'rgba(0,212,255,0.5)',
    hoverShadow: '0 12px 40px rgba(0,212,255,0.12)',
    orb:         'radial-gradient(ellipse at top left, rgba(0,212,255,0.08), transparent 60%)',
    launchColor: '#00d4ff',
  },
  orange: {
    iconBg:      'rgba(255,107,53,0.1)',
    iconBorder:  'rgba(255,107,53,0.2)',
    hoverBorder: 'rgba(255,107,53,0.5)',
    hoverShadow: '0 12px 40px rgba(255,107,53,0.12)',
    orb:         'radial-gradient(ellipse at top left, rgba(255,107,53,0.08), transparent 60%)',
    launchColor: '#ff6b35',
  },
  green: {
    iconBg:      'rgba(0,255,136,0.1)',
    iconBorder:  'rgba(0,255,136,0.2)',
    hoverBorder: 'rgba(0,255,136,0.5)',
    hoverShadow: '0 12px 40px rgba(0,255,136,0.14)',
    orb:         'radial-gradient(ellipse at top left, rgba(0,255,136,0.08), transparent 60%)',
    launchColor: '#00ff88',
  },
  amber: {
    iconBg:      'rgba(255,165,0,0.1)',
    iconBorder:  'rgba(255,165,0,0.2)',
    hoverBorder: 'rgba(255,165,0,0.5)',
    hoverShadow: '0 12px 40px rgba(255,165,0,0.12)',
    orb:         'radial-gradient(ellipse at top left, rgba(255,165,0,0.08), transparent 60%)',
    launchColor: '#ffa502',
  },
  purple: {
    iconBg:      'rgba(123,47,255,0.1)',
    iconBorder:  'rgba(123,47,255,0.2)',
    hoverBorder: 'rgba(123,47,255,0.4)',
    hoverShadow: '0 12px 40px rgba(123,47,255,0.10)',
    orb:         'radial-gradient(ellipse at top left, rgba(123,47,255,0.06), transparent 60%)',
    launchColor: '#555',
  },
}

/* ── ProjectCard ──────────────────────────────────────────────────────────── */

function ProjectCard({ project }: { project: Project }) {
  const reduced = useReducedMotion()
  const [hovered, setHovered] = useState(false)

  const a = ACCENT[project.accent]
  const isLive = project.status === 'live'

  const cardStyle = {
    background: hovered ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
    border: `1px solid ${hovered && isLive ? a.hoverBorder : 'rgba(255,255,255,0.08)'}`,
    boxShadow: hovered && isLive ? a.hoverShadow : undefined,
    backdropFilter: 'blur(12px) saturate(150%)',
    WebkitBackdropFilter: 'blur(12px) saturate(150%)',
    borderRadius: 16,
    transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
    opacity: isLive ? 1 : 0.45,
  }

  const interactProps = !reduced && isLive
    ? { whileHover: { y: -4, transition: { duration: 0.2 } }, whileTap: { scale: 0.99 } }
    : {}

  const sharedProps = {
    variants: cardReveal(reduced),
    className: 'relative overflow-hidden p-8 flex flex-col gap-5 h-full',
    style: cardStyle,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    ...interactProps,
  }

  const inner = (
    <>
      {/* Accent orb — fades in on hover via AnimatePresence exit animation */}
      <AnimatePresence>
        {hovered && isLive && (
          <motion.div
            key="orb"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: a.orb }}
          />
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex items-start justify-between relative z-10">
        <div
          className="w-[52px] h-[52px] rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ background: a.iconBg, border: `1px solid ${a.iconBorder}` }}
          aria-hidden="true"
        >
          {project.icon}
        </div>
        <Badge status={project.status} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold leading-snug tracking-[-0.3px] relative z-10 text-[#e0e0e0]">
        {project.title}
        {project.subtitle && (
          <>
            <br />
            {project.subtitle}
          </>
        )}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed flex-1 relative z-10" style={{ color: '#888' }}>
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 relative z-10">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="font-mono text-[11px] px-2.5 py-0.5 rounded-full"
            style={{ border: '1px solid rgba(255,255,255,0.08)', color: '#666' }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between relative z-10">
        <span className="text-[13px] font-semibold tracking-[0.5px]" style={{ color: a.launchColor }}>
          {isLive ? 'Launch Project →' : 'In Development'}
        </span>
        {isLive && (
          <span
            aria-hidden="true"
            className="text-lg"
            style={{
              display: 'inline-block',
              transform: hovered ? 'translate(4px,-4px)' : 'none',
              transition: 'transform 0.2s',
            }}
          >
            ↗
          </span>
        )}
      </div>
    </>
  )

  if (isLive) {
    return (
      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Launch ${project.title}${project.subtitle ? ' ' + project.subtitle : ''} — opens in new tab`}
        {...sharedProps}
      >
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.div
      aria-label={`${project.title} — coming soon`}
      {...sharedProps}
    >
      {inner}
    </motion.div>
  )
}

/* ── ProjectsGrid ─────────────────────────────────────────────────────────── */

export default function ProjectsGrid() {
  const liveCount = PROJECTS.filter(p => p.status === 'live').length

  return (
    <section
      id="projects"
      className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-24"
      aria-labelledby="projects-heading"
    >
      {/* Section header */}
      <div className="flex items-baseline gap-4 mb-12">
        <h2
          id="projects-heading"
          className="text-3xl font-bold tracking-[-0.5px]"
        >
          Active Projects
        </h2>
        <span
          className="font-mono text-[11px] tracking-[2px] uppercase px-3 py-1 rounded-full"
          style={{
            color: '#00d4ff',
            background: 'rgba(0,212,255,0.08)',
            border: '1px solid rgba(0,212,255,0.2)',
          }}
        >
          {liveCount} Live
        </span>
      </div>

      {/* Card grid — stagger triggered on scroll into viewport */}
      <motion.ul
        variants={staggerGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-6 list-none p-0 m-0"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}
        aria-label="Simulation projects"
      >
        {PROJECTS.map(project => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </motion.ul>

      {/* Divider */}
      <div
        className="w-full h-px mt-20"
        aria-hidden="true"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }}
      />
    </section>
  )
}
