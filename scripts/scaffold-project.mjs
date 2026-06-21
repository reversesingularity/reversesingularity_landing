/**
 * Print a ready-to-paste projects.ts entry + sync-github-repos.mjs snippets
 *
 * Usage:
 *   node scripts/scaffold-project.mjs --id rover2 --title "My Sim" --repo my-repo --slug rover2
 *   node scripts/scaffold-project.mjs   (interactive prompts via args)
 */

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, cur, i, arr) => {
    if (cur.startsWith('--')) acc.push([cur.slice(2), arr[i + 1]])
    return acc
  }, []),
)

const id = args.id ?? 'my-project'
const title = args.title ?? 'Project Name'
const subtitle = args.subtitle ?? 'Optional Subtitle'
const slug = args.slug ?? id
const repo = args.repo ?? `${id}-repo`
const accent = args.accent ?? 'cyan'
const icon = args.icon ?? '🛸'
const status = args.status ?? 'live'
const host = args.host ?? 'vercel' // vercel | railway

const url = status === 'live' ? `https://${slug}.reversesingularity.com` : null
const repoUrl = `https://github.com/reversesingularity/${repo}`

const entry = `{
  id: '${id}',
  title: '${title}',
  subtitle: '${subtitle}',
  description: 'TODO: one paragraph describing the project.',
  icon: '${icon}',
  accent: '${accent}',
  tags: ['TODO'],
  ${url ? `url: '${url}',\n  ` : ''}repoUrl: '${repoUrl}',
  status: '${status}',
},`

console.log(`
╔══════════════════════════════════════════════════════╗
║  Paste into src/data/projects.ts (before \`future\`)  ║
╚══════════════════════════════════════════════════════╝

${entry}

╔══════════════════════════════════════════════════════╗
║  Add to scripts/sync-github-repos.mjs                 ║
╚══════════════════════════════════════════════════════╝

LIVE_URLS:
  '${repo}': '${url ?? 'https://...'}',

LANDING_REPO_MAP:
  ${id}: '${repo}',

╔══════════════════════════════════════════════════════╗
║  Deploy hints (${host})                               ║
╚══════════════════════════════════════════════════════╝
${host === 'railway' ? `
  Railway port: 8080
  DNS: CNAME ${slug} → *.up.railway.app + TXT _railway-verify.${slug}
  See docs/ADDING-A-PROJECT.md § Flask / Python
` : `
  vercel link --yes --project ${repo.replace(/_/g, '-')}
  vercel alias set <deployment-url> ${slug}.reversesingularity.com
  vercel project protection disable <project> --sso  (if 401)
`}

Next:
  npm run validate:projects && npm run build
  node scripts/sync-github-repos.mjs
  vercel --prod --yes   (landing page)
`)
