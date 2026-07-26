# Session handoff — REE Prospectivity live on landing (2026-07-26)

**Status:** complete — REE Prospectivity registered, deployed, and live on landing  
**Landing:** https://reversesingularity.com  
**App:** https://ree.reversesingularity.com  
**Branch:** `main` (landing)  
**Next agent:** Read this file, then `AGENTS.md` + `.cursor/skills/add-landing-project/SKILL.md`.

---

## Live surfaces (verified)

| Surface | URL | Status |
|---------|-----|--------|
| App | https://ree.reversesingularity.com | 200 (Vercel) |
| Vercel project | https://ree-prospectivity-platform.vercel.app | READY |
| GitHub | https://github.com/reversesingularity/ree-prospectivity-platform | monorepo on `main` |
| Landing card | https://reversesingularity.com | `ree` → `status: 'live'` |

Active live count on landing: **10** (+ coming-soon `future`).

---

## What this session did

1. Registered **REE Prospectivity** card in `src/data/projects.ts` (amber accent)
2. Updated `scripts/sync-github-repos.mjs` (`LIVE_URLS` + `LANDING_REPO_MAP`) and regenerated `github-repos.ts`
3. Validated + built landing (`validate:projects`, `build`)
4. Deployed Vite monorepo from local path `F:\Projects\ree-prospectivity-agency` to Vercel project `ree-prospectivity-platform`
5. Aliased `ree.reversesingularity.com`, disabled SSO protection
6. Shipped landing with `vercel --prod`

Local app path: `F:\Projects\ree-prospectivity-agency`  
Remote: `origin` → `https://github.com/reversesingularity/ree-prospectivity-platform.git`

---

## Architecture

```
Browser → ree.reversesingularity.com (Vercel)
              │
              └─ Vite monorepo build
                    root: npm run build → apps/platform/dist
                    workspaces: @ree/platform + @ree/geospatial + @ree/ui
```

| Layer | Host | Notes |
|-------|------|--------|
| React + CesiumJS UI | Vercel | team scope `reversesingularitys-projects` |
| Env | `VITE_CESIUM_ION_TOKEN` | set in Vercel Production + Preview |

Monorepo needs root install + `outputDirectory: apps/platform/dist`. A local `vercel.json` was used for deploy but **not committed** (user request).

---

## Files touched (landing repo)

| Path | Change |
|------|--------|
| `src/data/projects.ts` | `ree` card — live URL + amber accent |
| `scripts/sync-github-repos.mjs` | LIVE_URLS + LANDING_REPO_MAP + ml-ai category |
| `src/data/github-repos.ts` | Regenerated via sync script |
| `docs/ADDING-A-PROJECT.md` | Live table row for `ree` (+ prior `orbitclass`) |
| `.cursor/skills/add-landing-project/reference.md` | Registry rows for orbitclass + ree |
| `.cursor/rules/reversesingularity-deploy.mdc` | Host matrix includes ree on Vercel |
| `docs/SESSION-HANDOFF.md` | This handoff |

Also included leftover OrbitClass doc sync (reference/deploy matrix / ADDING table) that was uncommitted from the prior session.

---

## Registry snapshot

```ts
{
  id: 'ree',
  title: 'REE Prospectivity',
  subtitle: 'Mining Intelligence Platform',
  url: 'https://ree.reversesingularity.com',
  repoUrl: 'https://github.com/reversesingularity/ree-prospectivity-platform',
  status: 'live',
  accent: 'amber',
  tags: ['React', 'CesiumJS', 'Vite', 'ML'],
}
```

Repo slug map: `ree` → `ree-prospectivity-platform`

---

## Agent playbook (unchanged)

1. **Registry** → `projects.ts` + sync script → `validate:projects` + `build`
2. **Deploy** app (Vercel and/or Railway) + DNS
3. **Ship** landing → `vercel link --yes --project reversesingularity_landing` then `vercel --prod --yes`  
   Scope on this machine: `--scope reversesingularitys-projects`

---

## Suggested next steps

1. Optional: commit `vercel.json` in the app repo if you want reproducible monorepo deploys from GitHub
2. Optional: set GitHub repo homepage to `https://ree.reversesingularity.com`
3. Optional: wire Vercel ↔ GitHub auto-deploy on `main` (project already connected)
4. Optional: README featured-projects table on landing
5. Next new project: use scaffold prompt in `AGENTS.md`

## Pitfalls for next agent

- Vercel team slug is `reversesingularitys-projects` (not `reversesingularity`)
- REE is a **npm workspaces** monorepo — build from repo root; output is `apps/platform/dist`
- Cesium Ion token must be present at **build** time as `VITE_CESIUM_ION_TOKEN`
- Do not commit secrets (`.env.local`); token lives in Vercel env
- Local folder name (`ree-prospectivity-agency`) ≠ GitHub repo slug (`ree-prospectivity-platform`)
- Windows DNS cache can lie after alias changes — verify with `nslookup … 8.8.8.8`
