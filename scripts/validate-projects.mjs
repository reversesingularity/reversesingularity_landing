/**
 * Validate src/data/projects.ts registry
 * Usage: node scripts/validate-projects.mjs
 */

import { PROJECTS } from '../src/data/projects.ts'

const ACCENTS = new Set(['cyan', 'orange', 'green', 'amber', 'purple'])
const STATUSES = new Set(['live', 'coming-soon'])
const errors = []
const ids = new Set()

for (const [i, p] of PROJECTS.entries()) {
  const loc = `PROJECTS[${i}] id="${p.id}"`

  if (ids.has(p.id)) errors.push(`${loc}: duplicate id`)
  ids.add(p.id)

  if (!p.title?.trim()) errors.push(`${loc}: missing title`)
  if (!p.description?.trim()) errors.push(`${loc}: missing description`)
  if (!p.icon?.trim()) errors.push(`${loc}: missing icon`)
  if (!ACCENTS.has(p.accent)) errors.push(`${loc}: invalid accent "${p.accent}"`)
  if (!STATUSES.has(p.status)) errors.push(`${loc}: invalid status "${p.status}"`)
  if (!Array.isArray(p.tags) || p.tags.length === 0) errors.push(`${loc}: tags required`)

  if (p.status === 'live' && !p.url) errors.push(`${loc}: live project needs url`)
  if (p.status === 'coming-soon' && p.url) errors.push(`${loc}: coming-soon should omit url`)

  if (p.url && !/^https:\/\//.test(p.url)) errors.push(`${loc}: url must be https`)
  if (p.repoUrl && !p.repoUrl.startsWith('https://github.com/reversesingularity/')) {
    errors.push(`${loc}: repoUrl should be github.com/reversesingularity/...`)
  }
}

const live = PROJECTS.filter(p => p.status === 'live').length
const comingSoon = PROJECTS.filter(p => p.status === 'coming-soon').length

console.log(`Validated ${PROJECTS.length} projects (${live} live, ${comingSoon} coming-soon)`)

if (errors.length) {
  console.error('\nValidation failed:')
  for (const e of errors) console.error(`  ✗ ${e}`)
  process.exit(1)
}

console.log('✓ All checks passed')
