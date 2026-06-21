/**
 * AUTO-GENERATED — do not edit by hand.
 * Regenerate: node scripts/sync-github-repos.mjs
 * Generated:  2026-06-21T06:01:21.825Z
 * Source:     https://github.com/reversesingularity
 */

export type RepoCategory =
  | 'simulation'
  | 'maps-geospatial'
  | 'ml-ai'
  | 'games'
  | 'web-apps'
  | 'tooling'
  | 'other'

export interface GitHubRepo {
  name: string
  description: string
  homepage: string
  url: string
  language: string | null
  private: boolean
  archived: boolean
  updatedAt: string
  category: RepoCategory
  /** Matches projects.ts id when this repo powers a landing-page card */
  landingProjectId: string | null
}

/** 44 repositories (7 public, 37 private) */
export const GITHUB_REPOS: GitHubRepo[] = [
  {
    "name": "ai-engineer-for-developers-course",
    "description": "AI engineering course materials.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/ai-engineer-for-developers-course",
    "language": "Python",
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-15T03:55:38Z",
    "category": "ml-ai",
    "landingProjectId": null
  },
  {
    "name": "automated-audiobook-production-and-distribution-pipeline",
    "description": "Automated Audiobook Production & Distribution Pipeline — multi-agent Claude Code swarm + Grok TTS for AI-narrated audiobook synthesis, mastering, and aggregator-compliant distribution.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/automated-audiobook-production-and-distribution-pipeline",
    "language": "Python",
    "private": true,
    "archived": false,
    "updatedAt": "2026-05-03T17:47:23Z",
    "category": "ml-ai",
    "landingProjectId": null
  },
  {
    "name": "autonomous-lunar-logistics",
    "description": "AI-powered mission planning and fleet monitoring system for autonomous lunar operations. Educational specification demonstrating multi-agent coordination, digital twins, and edge autonomy concepts.",
    "homepage": "https://alls.reversesingularity.com",
    "url": "https://github.com/reversesingularity/autonomous-lunar-logistics",
    "language": "Python",
    "private": false,
    "archived": false,
    "updatedAt": "2025-12-06T12:27:34Z",
    "category": "simulation",
    "landingProjectId": "alls"
  },
  {
    "name": "autonomous-lunar-rescue-system",
    "description": "Autonomous lunar rescue simulation and mission control platform.",
    "homepage": "https://alrs.reversesingularity.com",
    "url": "https://github.com/reversesingularity/autonomous-lunar-rescue-system",
    "language": "TypeScript",
    "private": true,
    "archived": false,
    "updatedAt": "2026-03-12T07:10:33Z",
    "category": "simulation",
    "landingProjectId": "alrs"
  },
  {
    "name": "beyond-the-plate-web-app",
    "description": "Beyond the Plate web application.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/beyond-the-plate-web-app",
    "language": "HTML",
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-15T03:55:54Z",
    "category": "web-apps",
    "landingProjectId": null
  },
  {
    "name": "book-writer-ai-toolkit",
    "description": "AI-assisted book writing toolkit.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/book-writer-ai-toolkit",
    "language": "HTML",
    "private": true,
    "archived": false,
    "updatedAt": "2026-01-19T23:34:06Z",
    "category": "ml-ai",
    "landingProjectId": null
  },
  {
    "name": "country-map-tile-generator-app",
    "description": "Country-level map tile generator.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/country-map-tile-generator-app",
    "language": "TypeScript",
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-15T03:58:50Z",
    "category": "maps-geospatial",
    "landingProjectId": null
  },
  {
    "name": "country-maps",
    "description": "Country map generation utilities.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/country-maps",
    "language": "Python",
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-15T04:00:13Z",
    "category": "maps-geospatial",
    "landingProjectId": null
  },
  {
    "name": "CydonianOaths",
    "description": "Unity game project — Cydonian Oaths.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/CydonianOaths",
    "language": "C#",
    "private": true,
    "archived": false,
    "updatedAt": "2026-03-23T03:50:18Z",
    "category": "games",
    "landingProjectId": null
  },
  {
    "name": "CydonianSoulsvania",
    "description": "Unity game project — Cydonian Soulsvania.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/CydonianSoulsvania",
    "language": "C#",
    "private": true,
    "archived": false,
    "updatedAt": "2026-06-14T04:07:49Z",
    "category": "games",
    "landingProjectId": null
  },
  {
    "name": "desktop-automation-ui",
    "description": "Desktop automation control UI.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/desktop-automation-ui",
    "language": "Python",
    "private": true,
    "archived": false,
    "updatedAt": "2026-05-19T10:35:06Z",
    "category": "ml-ai",
    "landingProjectId": null
  },
  {
    "name": "exoplanet-spaceapp",
    "description": "NASA Space Apps exoplanet exploration project.",
    "homepage": "https://exoplanet.reversesingularity.com",
    "url": "https://github.com/reversesingularity/exoplanet-spaceapp",
    "language": "Python",
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-15T04:00:09Z",
    "category": "simulation",
    "landingProjectId": "exoplanet"
  },
  {
    "name": "falcon-landing-dymos-out",
    "description": "Falcon 9 landing trajectory analysis with Dymos/OpenMDAO.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/falcon-landing-dymos-out",
    "language": null,
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-15T04:00:13Z",
    "category": "simulation",
    "landingProjectId": null
  },
  {
    "name": "falcon9sim",
    "description": "High-fidelity 2D Falcon 9 booster landing physics simulation.",
    "homepage": "https://falcon9.reversesingularity.com",
    "url": "https://github.com/reversesingularity/falcon9sim",
    "language": "HTML",
    "private": false,
    "archived": false,
    "updatedAt": "2026-03-14T09:29:05Z",
    "category": "simulation",
    "landingProjectId": "falcon9"
  },
  {
    "name": "falconlandingode-out",
    "description": "Falcon 9 landing ODE simulation outputs.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/falconlandingode-out",
    "language": "HTML",
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-15T04:00:28Z",
    "category": "simulation",
    "landingProjectId": null
  },
  {
    "name": "feast-planner",
    "description": "All-in-one web application for planning the Feast of Tabernacles - Sveltkit + Tailwind CSS + AWS",
    "homepage": "https://feast-planner.vercel.app",
    "url": "https://github.com/reversesingularity/feast-planner",
    "language": "TypeScript",
    "private": true,
    "archived": false,
    "updatedAt": "2026-05-06T09:01:36Z",
    "category": "web-apps",
    "landingProjectId": null
  },
  {
    "name": "feast-planner-app",
    "description": "Companion app for Feast of Tabernacles planning.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/feast-planner-app",
    "language": null,
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-15T04:00:31Z",
    "category": "web-apps",
    "landingProjectId": null
  },
  {
    "name": "interactive-basemap",
    "description": "Interactive basemap rendering experiments.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/interactive-basemap",
    "language": "JavaScript",
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-15T04:00:43Z",
    "category": "maps-geospatial",
    "landingProjectId": null
  },
  {
    "name": "interactive-historical-map-generator",
    "description": "Historical map generator with interactive layers.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/interactive-historical-map-generator",
    "language": "TypeScript",
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-15T04:00:54Z",
    "category": "maps-geospatial",
    "landingProjectId": null
  },
  {
    "name": "interactive-map-python-pygame",
    "description": "Pygame-based interactive map prototype.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/interactive-map-python-pygame",
    "language": "Python",
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-15T04:00:38Z",
    "category": "maps-geospatial",
    "landingProjectId": null
  },
  {
    "name": "luna-40-nasa-reactor",
    "description": "Luna-40 NASA Challenge 2025: Interactive 3D Nuclear Reactor Webapp with Three.js visualization",
    "homepage": "https://luna-40-nasa-reactor.vercel.app",
    "url": "https://github.com/reversesingularity/luna-40-nasa-reactor",
    "language": "JavaScript",
    "private": false,
    "archived": false,
    "updatedAt": "2025-12-11T12:32:34Z",
    "category": "simulation",
    "landingProjectId": null
  },
  {
    "name": "map-tile-generation-web-app",
    "description": "Web app for generating map tiles.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/map-tile-generation-web-app",
    "language": "JavaScript",
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-15T04:02:43Z",
    "category": "maps-geospatial",
    "landingProjectId": null
  },
  {
    "name": "mars-rover-navigation-simulator",
    "description": "Mars surface operations simulator with A* pathfinding and 3D terrain.",
    "homepage": "https://rover.reversesingularity.com",
    "url": "https://github.com/reversesingularity/mars-rover-navigation-simulator",
    "language": "TypeScript",
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-15T04:02:34Z",
    "category": "simulation",
    "landingProjectId": "rover"
  },
  {
    "name": "ml-model-for-ree-detection",
    "description": "Machine learning model for rare earth element detection.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/ml-model-for-ree-detection",
    "language": "Python",
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-15T04:02:38Z",
    "category": "ml-ai",
    "landingProjectId": null
  },
  {
    "name": "multi-agent-battle-map",
    "description": "Autonomous multi-agent system for high-fidelity geospatial battle map animations",
    "homepage": "",
    "url": "https://github.com/reversesingularity/multi-agent-battle-map",
    "language": "TypeScript",
    "private": true,
    "archived": false,
    "updatedAt": "2026-03-19T08:42:21Z",
    "category": "maps-geospatial",
    "landingProjectId": null
  },
  {
    "name": "nephilim-chronicles",
    "description": "Canon governance and worldbuilding for The Nephilim Chronicles.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/nephilim-chronicles",
    "language": "Python",
    "private": true,
    "archived": false,
    "updatedAt": "2026-05-15T11:46:41Z",
    "category": "ml-ai",
    "landingProjectId": null
  },
  {
    "name": "news-aggregator",
    "description": "News aggregation pipeline.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/news-aggregator",
    "language": "Python",
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-15T04:02:44Z",
    "category": "web-apps",
    "landingProjectId": null
  },
  {
    "name": "nuclear-fission-reactors-moon-base-alpha",
    "description": "Interactive NASA Luna-40 nuclear fission reactor webapp for Moon Base Alpha.",
    "homepage": "https://nuclear.reversesingularity.com",
    "url": "https://github.com/reversesingularity/nuclear-fission-reactors-moon-base-alpha",
    "language": "JavaScript",
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-15T04:02:49Z",
    "category": "simulation",
    "landingProjectId": "nuclear"
  },
  {
    "name": "nz-launch-site-ai-project",
    "description": "AI-assisted launch site analysis for New Zealand.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/nz-launch-site-ai-project",
    "language": "HTML",
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-15T04:02:59Z",
    "category": "simulation",
    "landingProjectId": null
  },
  {
    "name": "olanzapine-ml-framework",
    "description": "ML framework research project.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/olanzapine-ml-framework",
    "language": "Python",
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-15T04:03:02Z",
    "category": "ml-ai",
    "landingProjectId": null
  },
  {
    "name": "phobetron_web_app",
    "description": "Biblical Prophecy & Celestial Pattern Detection System with ML correlation models",
    "homepage": "https://phobetronwebapp-production-d69a.up.railway.app",
    "url": "https://github.com/reversesingularity/phobetron_web_app",
    "language": "Python",
    "private": false,
    "archived": false,
    "updatedAt": "2026-03-18T05:42:13Z",
    "category": "ml-ai",
    "landingProjectId": null
  },
  {
    "name": "presentation-web-app",
    "description": "Web-based presentation tooling.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/presentation-web-app",
    "language": "Python",
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-15T04:03:08Z",
    "category": "ml-ai",
    "landingProjectId": null
  },
  {
    "name": "project-jubilees-annotation",
    "description": "Annotation tooling for the Jubilees manuscript project.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/project-jubilees-annotation",
    "language": "HTML",
    "private": true,
    "archived": false,
    "updatedAt": "2026-06-20T08:35:07Z",
    "category": "ml-ai",
    "landingProjectId": null
  },
  {
    "name": "project-orbit-classification",
    "description": "Orbital classification models and datasets.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/project-orbit-classification",
    "language": "Python",
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-15T04:03:40Z",
    "category": "simulation",
    "landingProjectId": null
  },
  {
    "name": "reversesingularity",
    "description": "Config files for my GitHub profile.",
    "homepage": "https://github.com/reversesingularity",
    "url": "https://github.com/reversesingularity/reversesingularity",
    "language": null,
    "private": false,
    "archived": false,
    "updatedAt": "2025-11-22T06:24:52Z",
    "category": "other",
    "landingProjectId": null
  },
  {
    "name": "reversesingularity_landing",
    "description": "Reverse Singularity landing page",
    "homepage": "https://reversesingularitylanding.vercel.app",
    "url": "https://github.com/reversesingularity/reversesingularity_landing",
    "language": "TypeScript",
    "private": false,
    "archived": false,
    "updatedAt": "2026-05-21T08:02:20Z",
    "category": "web-apps",
    "landingProjectId": null
  },
  {
    "name": "rts-game-dev",
    "description": "Real-time strategy game development sandbox.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/rts-game-dev",
    "language": "Python",
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-15T04:03:45Z",
    "category": "games",
    "landingProjectId": null
  },
  {
    "name": "satellite-orbit-classification-project",
    "description": "Satellite orbit classification research project.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/satellite-orbit-classification-project",
    "language": null,
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-15T04:03:50Z",
    "category": "simulation",
    "landingProjectId": null
  },
  {
    "name": "second-brain",
    "description": "Christopher Modina's Second Brain vault — synthesized wiki of NotebookLM exports, GitHub repos, YouTube notes, and cross-domain synthesis. Powers The Nephilim Chronicles canon governance and the SINGULA automation layer.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/second-brain",
    "language": "HTML",
    "private": true,
    "archived": false,
    "updatedAt": "2026-06-18T08:36:05Z",
    "category": "ml-ai",
    "landingProjectId": null
  },
  {
    "name": "self-hosted-ai-starter-kit",
    "description": "Self-hosted AI infrastructure starter kit.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/self-hosted-ai-starter-kit",
    "language": "PowerShell",
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-15T04:03:57Z",
    "category": "ml-ai",
    "landingProjectId": null
  },
  {
    "name": "spritestickerforge-pro",
    "description": "Sprite and sticker creation utility.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/spritestickerforge-pro",
    "language": "HTML",
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-15T04:04:01Z",
    "category": "web-apps",
    "landingProjectId": null
  },
  {
    "name": "stone-sceptre-website",
    "description": "Epic website for \"The Stone and the Sceptre: A Scribe's Tale\"",
    "homepage": "https://reversesingularity.github.io/stone-sceptre-website/",
    "url": "https://github.com/reversesingularity/stone-sceptre-website",
    "language": "HTML",
    "private": false,
    "archived": false,
    "updatedAt": "2026-05-15T12:09:42Z",
    "category": "web-apps",
    "landingProjectId": null
  },
  {
    "name": "super-claude",
    "description": "Claude Code harness and automation utilities.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/super-claude",
    "language": "PowerShell",
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-15T04:04:07Z",
    "category": "ml-ai",
    "landingProjectId": null
  },
  {
    "name": "the-stone-and-the-sceptre",
    "description": "Source materials for The Stone and the Sceptre chronicles.",
    "homepage": "",
    "url": "https://github.com/reversesingularity/the-stone-and-the-sceptre",
    "language": "HTML",
    "private": true,
    "archived": false,
    "updatedAt": "2025-11-19T07:19:55Z",
    "category": "web-apps",
    "landingProjectId": null
  }
]

export const GITHUB_PROFILE_URL = 'https://github.com/reversesingularity'

export const LANDING_REPO_MAP: Record<string, string> = {
  "nuclear": "nuclear-fission-reactors-moon-base-alpha",
  "rover": "mars-rover-navigation-simulator",
  "alrs": "autonomous-lunar-rescue-system",
  "falcon9": "falcon9sim",
  "alls": "autonomous-lunar-logistics",
  "exoplanet": "exoplanet-spaceapp"
}

export function reposByCategory(category: RepoCategory): GitHubRepo[] {
  return GITHUB_REPOS.filter(r => r.category === category)
}

export function liveRepos(): GitHubRepo[] {
  return GITHUB_REPOS.filter(r => Boolean(r.homepage))
}

export function landingRepos(): GitHubRepo[] {
  return GITHUB_REPOS.filter(r => r.landingProjectId)
}
