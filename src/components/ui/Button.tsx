import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'ghost'
  onClick?: () => void
  className?: string
}

const PRIMARY_STYLE = {
  background: 'linear-gradient(135deg, #00d4ff, #7b2fff)',
} as const

const GHOST_STYLE = {
  border: '1px solid rgba(255,255,255,0.08)',
} as const

export default function Button({
  children,
  href,
  variant = 'primary',
  onClick,
  className = '',
}: ButtonProps) {
  const reduced = useReducedMotion()

  const base =
    'inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold tracking-[0.5px] no-underline min-h-[44px] cursor-pointer'

  const variantClass =
    variant === 'primary'
      ? `${base} text-white`
      : `${base} text-[#888] transition-colors duration-200 hover:text-[#00d4ff]`

  const motionProps = reduced
    ? {}
    : { whileHover: { scale: 1.02, y: -2 }, whileTap: { scale: 0.97 } }

  const style = variant === 'primary' ? PRIMARY_STYLE : GHOST_STYLE

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${variantClass} ${className}`}
        style={style}
        {...motionProps}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${variantClass} ${className}`}
      style={style}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
