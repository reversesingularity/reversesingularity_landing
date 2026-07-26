/**
 * Sync Reverse Singularity GitHub repositories into src/data/github-repos.ts
 *
 * Requires: gh CLI authenticated as the repo owner
 * Usage:    node scripts/sync-github-repos.mjs
 */

import { execSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outFile = path.resolve(__dirname, '../src/data/github-repos.ts')

/** Known production URLs not always set as GitHub homepage */
const LIVE_URLS = {
  'nuclear-fission-reactors-moon-base-alpha': 'https://nuclear.reversesingularity.com',
  'luna-40-nasa-reactor': 'https://nuclear.reversesingularity.com',
  'mars-rover-navigation-simulator': 'https://rover.reversesingularity.com',
  'autonomous-lunar-rescue-system': 'https://alrs.reversesingularity.com',
  'falcon9sim': 'https://falcon9.reversesingularity.com',
  'autonomous-lunar-logistics': 'https://alls.reversesingularity.com',
  'exoplanet-spaceapp': 'https://exoplanet.reversesingularity.com',
  'black-hole-explorer-web-app': 'https://blackhole.reversesingularity.com',
  'leo-orbital-capacity-forecaster': 'https://leo.reversesingularity.com',
  'phobetron_web_app': 'https://phobetronwebapp-production-d69a.up.railway.app',
  'stone-sceptre-website': 'https://reversesingularity.github.io/stone-sceptre-website/',
  'reversesingularity_landing': 'https://reversesingularity.com',
}

/** Landing-page project id → primary repo slug */
const LANDING_REPO_MAP = {
  nuclear: 'nuclear-fission-reactors-moon-base-alpha',
  rover: 'mars-rover-navigation-simulator',
  alrs: 'autonomous-lunar-rescue-system',
  falcon9: 'falcon9sim',
  alls: 'autonomous-lunar-logistics',
  exoplanet: 'exoplanet-spaceapp',
  blackhole: 'black-hole-explorer-web-app',
  leo: 'leo-orbital-capacity-forecaster',
}

const CATEGORY_RULES = [
  { category: 'simulation', match: /sim|reactor|rover|lunar|falcon|orbit|exoplanet|spaceapp|launch-site|nuclear|alrs|alls|logistics|black-hole|schwarzschild|leo-orbital|capacity-forecaster|kessler/i },
  { category: 'maps-geospatial', match: /map|basemap|tile|country-maps|battle-map/i },
  { category: 'ml-ai', match: /ml-|ai-|phobetron|classification|ree-detection|olanzapine|audiobook|second-brain|super-claude|self-hosted-ai|desktop-automation|book-writer|nephilim|jubilees|presentation-web/i },
  { category: 'games', match: /game|Cydonian|Soulsvania|Oaths|rts-/i },
  { category: 'web-apps', match: /web-app|website|planner|stone|sceptre|beyond-the-plate|spritesticker|news-aggregator|landing/i },
  { category: 'tooling', match: /toolkit|starter-kit|course|reversesingularity$/i },
]

function categorize(name, description = '') {
  const haystack = `${name} ${description}`
  for (const rule of CATEGORY_RULES) {
    if (rule.match.test(haystack)) return rule.category
  }
  return 'other'
}

function inferDescription(name, description) {
  if (description?.trim()) return description.trim()

  const inferred = {
    'mars-rover-navigation-simulator': 'Mars surface operations simulator with A* pathfinding and 3D terrain.',
    'autonomous-lunar-rescue-system': 'Autonomous lunar rescue simulation and mission control platform.',
    'nuclear-fission-reactors-moon-base-alpha': 'Interactive NASA Luna-40 nuclear fission reactor webapp for Moon Base Alpha.',
    'falcon9sim': 'High-fidelity 2D Falcon 9 booster landing physics simulation.',
    'feast-planner-app': 'Companion app for Feast of Tabernacles planning.',
    'the-stone-and-the-sceptre': 'Source materials for The Stone and the Sceptre chronicles.',
    'falcon-landing-dymos-out': 'Falcon 9 landing trajectory analysis with Dymos/OpenMDAO.',
    'falconlandingode-out': 'Falcon 9 landing ODE simulation outputs.',
    'nephilim-chronicles': 'Canon governance and worldbuilding for The Nephilim Chronicles.',
    'project-jubilees-annotation': 'Annotation tooling for the Jubilees manuscript project.',
    'CydonianOaths': 'Unity game project — Cydonian Oaths.',
    'CydonianSoulsvania': 'Unity game project — Cydonian Soulsvania.',
    'rts-game-dev': 'Real-time strategy game development sandbox.',
    'exoplanet-spaceapp': 'NASA Space Apps exoplanet exploration project.',
    'nz-launch-site-ai-project': 'AI-assisted launch site analysis for New Zealand.',
    'ml-model-for-ree-detection': 'Machine learning model for rare earth element detection.',
    'satellite-orbit-classification-project': 'Satellite orbit classification research project.',
    'project-orbit-classification': 'Orbital classification models and datasets.',
    'country-maps': 'Country map generation utilities.',
    'interactive-basemap': 'Interactive basemap rendering experiments.',
    'interactive-historical-map-generator': 'Historical map generator with interactive layers.',
    'interactive-map-python-pygame': 'Pygame-based interactive map prototype.',
    'map-tile-generation-web-app': 'Web app for generating map tiles.',
    'country-map-tile-generator-app': 'Country-level map tile generator.',
    'beyond-the-plate-web-app': 'Beyond the Plate web application.',
    'presentation-web-app': 'Web-based presentation tooling.',
    'book-writer-ai-toolkit': 'AI-assisted book writing toolkit.',
    'spritestickerforge-pro': 'Sprite and sticker creation utility.',
    'news-aggregator': 'News aggregation pipeline.',
    'desktop-automation-ui': 'Desktop automation control UI.',
    'self-hosted-ai-starter-kit': 'Self-hosted AI infrastructure starter kit.',
    'super-claude': 'Claude Code harness and automation utilities.',
    'ai-engineer-for-developers-course': 'AI engineering course materials.',
    'olanzapine-ml-framework': 'ML framework research project.',
  }

  return inferred[name] ?? ''
}

function fetchRepos() {
  const raw = execSync(
    'gh api "user/repos?affiliation=owner&per_page=100" --paginate',
    { encoding: 'utf8' },
  )
  const chunks = raw.trim().split('\n').filter(Boolean)
  const repos = chunks.flatMap(line => JSON.parse(line))
  return repos
    .filter(r => r.owner.login === 'reversesingularity')
    .map(r => ({
      name: r.name,
      description: inferDescription(r.name, r.description),
      homepage: r.homepage || LIVE_URLS[r.name] || '',
      url: r.html_url,
      language: r.language ?? null,
      private: r.private,
      archived: r.archived,
      updatedAt: r.updated_at,
      category: categorize(r.name, r.description ?? ''),
      landingProjectId: Object.entries(LANDING_REPO_MAP).find(([, slug]) => slug === r.name)?.[0] ?? null,
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
}

function toTs(repos) {
  const generatedAt = new Date().toISOString()
  const publicCount = repos.filter(r => !r.private).length
  const privateCount = repos.filter(r => r.private).length

  return `/**
 * AUTO-GENERATED — do not edit by hand.
 * Regenerate: node scripts/sync-github-repos.mjs
 * Generated:  ${generatedAt}
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

/** ${repos.length} repositories (${publicCount} public, ${privateCount} private) */
export const GITHUB_REPOS: GitHubRepo[] = ${JSON.stringify(repos, null, 2)}

export const GITHUB_PROFILE_URL = 'https://github.com/reversesingularity'

export const LANDING_REPO_MAP: Record<string, string> = ${JSON.stringify(LANDING_REPO_MAP, null, 2)}

export function reposByCategory(category: RepoCategory): GitHubRepo[] {
  return GITHUB_REPOS.filter(r => r.category === category)
}

export function liveRepos(): GitHubRepo[] {
  return GITHUB_REPOS.filter(r => Boolean(r.homepage))
}

export function landingRepos(): GitHubRepo[] {
  return GITHUB_REPOS.filter(r => r.landingProjectId)
}
`
}

const repos = fetchRepos()
writeFileSync(outFile, toTs(repos), 'utf8')
console.log(`Wrote ${repos.length} repos to ${outFile}`)
