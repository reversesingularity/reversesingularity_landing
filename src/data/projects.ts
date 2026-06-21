/**
 * ╔══════════════════════════════════════════════════════╗
 * ║           REVERSE SINGULARITY — PROJECT REGISTRY     ║
 * ╠══════════════════════════════════════════════════════╣
 * ║  To add a new project, see docs/ADDING-A-PROJECT.md or run:     ║
 * ║  node scripts/scaffold-project.mjs                              ║
 * ║  Insert before the `future` entry in PROJECTS below.           ║
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
 *   repoUrl: 'https://github.com/reversesingularity/my-repo', // optional
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
  /** Source repository on GitHub */
  repoUrl?: string
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
    repoUrl: 'https://github.com/reversesingularity/nuclear-fission-reactors-moon-base-alpha',
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
    repoUrl: 'https://github.com/reversesingularity/mars-rover-navigation-simulator',
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
    repoUrl: 'https://github.com/reversesingularity/autonomous-lunar-rescue-system',
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
    repoUrl: 'https://github.com/reversesingularity/falcon9sim',
    status: 'live',
  },
  {
    id: 'alls',
    title: 'Autonomous Lunar',
    subtitle: 'Logistics System',
    description:
      'AI-powered mission planning and fleet monitoring for autonomous Starship lunar operations. Multi-agent coordination, digital twin visualization via CesiumJS, and real-time safety boundary monitoring through the MCWI mission control dashboard.',
    icon: '🛰️',
    accent: 'purple',
    tags: ['React', 'CesiumJS', 'Supabase', 'AI/ML'],
    url: 'https://alls.reversesingularity.com',
    repoUrl: 'https://github.com/reversesingularity/autonomous-lunar-logistics',
    status: 'live',
  },
  {
    id: 'exoplanet',
    title: 'AI Exoplanet Discovery',
    subtitle: 'NASA Space Apps',
    description:
      'NASA Space Apps Challenge submission for AI-powered exoplanet detection. Analyze Kepler and TESS light curves with machine learning, visualize transit signatures, and batch-process stellar datasets in an interactive web dashboard.',
    icon: '🪐',
    accent: 'cyan',
    tags: ['Python', 'Flask', 'NASA Data', 'ML'],
    url: 'https://exoplanet.reversesingularity.com',
    repoUrl: 'https://github.com/reversesingularity/exoplanet-spaceapp',
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
