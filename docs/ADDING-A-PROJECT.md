# Adding a Project to Reverse Singularity Landing

Playbook for registering a simulation or web app on [reversesingularity.com](https://reversesingularity.com).

## Architecture (30 seconds)

```
src/data/projects.ts     ← single source of truth for the grid (manual edit)
src/data/github-repos.ts ← auto-generated GitHub catalog
src/components/sections/Hero.tsx   ← live count is dynamic (no edit needed)
src/components/sections/ProjectsGrid.tsx ← reads PROJECTS array (no edit needed)
```

Adding a card = **one entry in `projects.ts`** + **deploy the app** + **optional sync scripts**.

---

## Quick add (live project)

### 1. Register the card

Edit `src/data/projects.ts` — insert **before** the `future` coming-soon placeholder:

```ts
{
  id: 'my-project',                    // unique slug, used in LANDING_REPO_MAP
  title: 'Project Name',
  subtitle: 'Optional Tagline',
  description: 'One paragraph for the card.',
  icon: '🛸',
  accent: 'cyan',                      // cyan | orange | green | amber | purple
  tags: ['React', 'Three.js'],
  url: 'https://my-project.reversesingularity.com',
  repoUrl: 'https://github.com/reversesingularity/my-repo',
  status: 'live',
},
```

### 2. Map GitHub repo (for catalog sync)

Edit `scripts/sync-github-repos.mjs`:

```js
// LIVE_URLS — if homepage not set on GitHub
'my-repo-slug': 'https://my-project.reversesingularity.com',

// LANDING_REPO_MAP — links card id to repo
myproject: 'my-repo-slug',
```

Run:

```bash
node scripts/sync-github-repos.mjs
```

### 3. Validate locally

```bash
npm run validate:projects
npm run build
npm run dev
```

### 4. Deploy landing page

```bash
vercel link --yes --project reversesingularity_landing
vercel --prod --yes
```

Hero **Active Projects** count updates automatically.

---

## Coming soon (no URL yet)

```ts
{
  id: 'future-2',
  title: 'Next Project',
  subtitle: 'In Development',
  description: 'Brief teaser.',
  icon: '🛸',
  accent: 'purple',
  tags: ['TBD'],
  status: 'coming-soon',
  // omit url and repoUrl
},
```

Keep exactly **one** generic `future` placeholder at the end, or replace it when going live.

---

## Accent color map

| Accent   | Hex       | Use for                          |
|----------|-----------|----------------------------------|
| `cyan`   | `#00d4ff` | Nuclear, space, default sci-fi   |
| `orange` | `#ff6b35` | Mars, warm robotics              |
| `green`  | `#00ff88` | Life support, rescue, bio        |
| `amber`  | `#ffa502` | Rockets, propulsion, Falcon      |
| `purple` | `#7b2fff` | AI, logistics, future/unknown    |

Pick an unused accent when possible so cards are visually distinct.

---

## Subdomain convention

| Pattern | Example |
|---------|---------|
| `{slug}.reversesingularity.com` | `rover.reversesingularity.com` |
| Railway custom domain | `exoplanet.reversesingularity.com` |
| Vercel default | `*.vercel.app` (alias to subdomain) |

---

## Deploy the app (by stack)

### Vite / React (most sims)

1. Vercel → Import GitHub repo
2. Build: `npm run build`, Output: `dist`
3. Settings → Domains → add `{slug}.reversesingularity.com`
4. If SSO blocks public access: `vercel project protection disable {project} --sso`

**Monorepo subfolder** (e.g. ALLS `mcwi/`):

- Set Root Directory in Vercel project settings
- Or deploy via CLI from subfolder with `vercel link`

### Flask / Python (Exoplanet pattern)

1. Railway → New project from GitHub
2. Root Directory: app folder (e.g. `ai_powered_exoplanet_discovery`)
3. Use `Dockerfile` + `requirements-prod.txt` (see exoplanet-spaceapp)
4. Custom domain + DNS on Vercel registrar:

| Type  | Name                        | Value                    |
|-------|-----------------------------|--------------------------|
| CNAME | `{slug}`                    | `{id}.up.railway.app`    |
| TXT   | `_railway-verify.{slug}`    | `railway-verify=...`     |

5. Target port on Railway: **8080** (Railway `$PORT`, not Dockerfile EXPOSE 5000)

### GitHub Pages

- `vercel alias set {deployment} {slug}.reversesingularity.com` or CNAME in Vercel DNS

---

## DNS (reversesingularity.com on Vercel)

All subdomain records live in **Vercel → Domains → reversesingularity.com → DNS**.

```bash
vercel dns ls reversesingularity.com
vercel dns add reversesingularity.com {slug} CNAME {target}
```

**Router DNS cache:** If `8.8.8.8` resolves correctly but local curl hits Vercel, flush Windows DNS and/or set adapter DNS to `8.8.8.8`.

---

## Current live projects

| id        | Subdomain URL                              | Host    | GitHub repo |
|-----------|--------------------------------------------|---------|-------------|
| nuclear   | nuclear.reversesingularity.com             | Vercel  | nuclear-fission-reactors-moon-base-alpha |
| rover     | rover.reversesingularity.com               | Vercel  | mars-rover-navigation-simulator |
| alrs      | alrs.reversesingularity.com                | Vercel  | autonomous-lunar-rescue-system |
| falcon9   | falcon9.reversesingularity.com             | Vercel  | falcon9sim |
| alls      | alls.reversesingularity.com                | Vercel  | autonomous-lunar-logistics (mcwi/) |
| exoplanet | exoplanet.reversesingularity.com           | Railway | exoplanet-spaceapp |
| blackhole | blackhole.reversesingularity.com           | Vercel  | black-hole-explorer-web-app |
| leo       | leo.reversesingularity.com                 | Railway | leo-orbital-capacity-forecaster |
| orbitclass| orbitclass.reversesingularity.com          | Vercel + Railway API | satellite-orbit-classification-project |
| ree       | ree.reversesingularity.com                 | Vercel  | ree-prospectivity-platform |
| dei-pmo   | dei-pmo.reversesingularity.com             | Railway | dei-pmo-dashboard |
| hashmal   | hashmal.reversesingularity.com             | Vercel  | hashmal-reactor |

---

## Checklist

```
[ ] Entry added to projects.ts (before `future`)
[ ] LIVE_URLS + LANDING_REPO_MAP updated in sync-github-repos.mjs
[ ] node scripts/sync-github-repos.mjs
[ ] npm run validate:projects && npm run build
[ ] App deployed and health URL returns 200
[ ] Subdomain DNS configured (CNAME + verification TXT if Railway)
[ ] vercel --prod on reversesingularity_landing
[ ] Launch Project link tested in browser
[ ] README featured-projects table updated (optional)
[ ] docs/SESSION-HANDOFF.md rewritten for the new project
```

---

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run validate:projects` | Lint projects.ts registry |
| `node scripts/scaffold-project.mjs` | Interactive new entry helper |
| `node scripts/sync-github-repos.mjs` | Refresh github-repos.ts |
| `node scripts/capture-screenshots.mjs` | Refresh README screenshots |

---

## Cursor automation

- **Skill:** `.cursor/skills/add-landing-project/` — full agent workflow
- **Rules:** `.cursor/rules/landing-project-registry.mdc`, `reversesingularity-deploy.mdc`
- **Agents:** `AGENTS.md` — orchestration for add / deploy / validate

Prompt example:

> Add `{name}` to the landing page. Repo: `reversesingularity/{repo}`. Live at `{slug}.reversesingularity.com`.
