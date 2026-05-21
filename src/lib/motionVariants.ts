import type { Variants } from 'motion/react'

export const EASE_OUT: [number, number, number, number] = [0.0, 0.0, 0.2, 1]

/** Stagger container for the hero — orchestrates child animations. */
export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

/** Fade-up entrance for each hero child element. */
export function heroChild(reduced: boolean | null): Variants {
  const skip = reduced === true
  return {
    hidden: { opacity: 0, y: skip ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE_OUT },
    },
  }
}

/** Stagger container for the project card grid. */
export const staggerGrid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

/** Fade-up entrance triggered by scroll for project cards. */
export function cardReveal(reduced: boolean | null): Variants {
  const skip = reduced === true
  return {
    hidden: { opacity: 0, y: skip ? 0 : 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: EASE_OUT },
    },
  }
}
