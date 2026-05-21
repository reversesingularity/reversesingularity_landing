/**
 * ╔══════════════════════════════════════════════════════╗
 * ║           REVERSE SINGULARITY — PROJECT REGISTRY     ║
 * ╠══════════════════════════════════════════════════════╣
 * ║  To add a new project, copy the template below and   ║
 * ║  append it to the PROJECTS array. The card appears   ║
 * ║  automatically in the grid with correct styling.     ║
 * ╚══════════════════════════════════════════════════════╝
 *
 * Template:
 * {
 *   id: 'my-project',              // unique slug
 *   title: 'Project Name',
 *   subtitle: 'Optional subtitle', // omit if not needed
 *   description: 'One paragraph describing the project.',
 *   icon: '🛸',                    // emoji shown in the icon badge
 *   accent: 'cyan',                // 'cyan' | 'orange' | 'green' | 'amber' | 'purple'
 *   tags: ['React', 'Three.js'],   // tech stack chips
 *   url: 'https://x.reversesingularity.com', // omit for coming-soon
 *   status: 'live',                // 'live' | 'coming-soon'
 * },
 */

export type AccentColor = 'cyan' | 'orange' | 'green' | 'amber' | 'purple'
export type ProjectStatus = 'live' | 'coming-soon'

export interface Project {
  id: string
  title: string
  subtitle?: string
  description: string
  icon: string
  accent: AccentColor
  tags: string[]
  /** External URL — omit for coming-soon cards */
  url?: string
  status: ProjectStatus
}

export const PROJECTS: Project[] = [
  {
    id: 'nuclear',
    title: 'Nuclear Fission Reactors',
    subtitle: 'Moon Base Alpha',
    description:
      'An interactive simulation of nuclear fission reactor systems powering a lunar base. Explore reactor dynamics, power management, and safety protocols in a 3D Moon Base environment.',
    icon: '⚛️',
    accent: 'cyan',
    tags: ['React', 'Three.js', 'Vite', 'Physics'],
    url: 'https://nuclear.reversesingularity.com',
    status: 'live',
  },
  {
    id: 'rover',
    title: 'Mars Rover Navigation',
    subtitle: 'Simulator',
    description:
      'Plan and execute rover missions across procedurally-generated Mars terrain. Real A* pathfinding, live telemetry, slope-aware navigation, and mission analytics in an interactive 3D environment.',
    icon: '🚀',
    accent: 'orange',
    tags: ['React', 'Three.js', 'A* Algorithm', 'Recharts'],
    url: 'https://rover.reversesingularity.com',
    status: 'live',
  },
  {
    id: 'alrs',
    title: 'Autonomous Lunar',
    subtitle: 'Rescue System',
    description:
      'AI-driven simulation platform for autonomous rescue missions on the lunar surface. Hyper-realistic 3D terrain, real-time astronaut health prediction, multi-vehicle pathfinding, and mission planning powered by NASA open data.',
    icon: '🌙',
    accent: 'green',
    tags: ['Next.js', 'Three.js', 'NASA Data', 'AI/ML'],
    url: 'https://alrs.reversesingularity.com',
    status: 'live',
  },
  {
    id: 'falcon9',
    title: 'Falcon 9 Booster',
    subtitle: 'Landing Simulation',
    description:
      'Real-time 2D simulation of a SpaceX Falcon 9 booster — from launch through stage separation, boost-back burn, re-entry, and precision landing. Mach-dependent physics, live telemetry, and a scored landing debrief.',
    icon: '🚀',
    accent: 'amber',
    tags: ['Canvas 2D', 'Physics Sim', 'JavaScript', 'SpaceX'],
    url: 'https://falcon9.reversesingularity.com',
    status: 'live',
  },
  {
    id: 'future',
    title: 'Next Project',
    subtitle: 'In Development',
    description: 'The next simulation is being engineered. Stay tuned.',
    icon: '🛸',
    accent: 'purple',
    tags: ['Unknown'],
    status: 'coming-soon',
  },
]
