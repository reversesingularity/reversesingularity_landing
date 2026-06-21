---
name: add-landing-project
description: >-
  Add a new simulation or web app to the Reverse Singularity landing page at
  reversesingularity.com. Use when registering a project card, updating
  projects.ts, syncing GitHub repos, deploying a subdomain, or onboarding a new
  RS project to the grid.
---

# Add Landing Project

End-to-end workflow for a new Reverse Singularity project on the landing page.

## When to use

- User asks to add, register, or list a project on the landing page
- New subdomain `{slug}.reversesingularity.com` goes live
- Update card after deploy (URL, status live → coming-soon)

## Inputs to gather

| Field | Example |
|-------|---------|
| `id` | `exoplanet` |
| `title` | AI Exoplanet Discovery |
| GitHub repo slug | `exoplanet-spaceapp` |
| Subdomain slug | `exoplanet` |
| Stack | Vite/Vercel or Flask/Railway |
| `accent` | pick unused from reference |
| `tags` | tech stack chips |

If any are missing, infer from repo name or ask once.

## Workflow

### Phase 1 — Registry (landing repo)

1. Run scaffold helper (optional):
   ```bash
   node scripts/scaffold-project.mjs --id {id} --title "{title}" --repo {repo} --slug {slug} --accent {accent}
   ```
2. Edit `src/data/projects.ts` — insert entry **before** `future`.
3. Edit `scripts/sync-github-repos.mjs`:
   - `LIVE_URLS['{repo}'] = 'https://{slug}.reversesingularity.com'`
   - `LANDING_REPO_MAP.{id} = '{repo}'`
4. Run:
   ```bash
   node scripts/sync-github-repos.mjs
   npm run validate:projects
   npm run build
   ```

### Phase 2 — Deploy app (if not already live)

**Vercel (React/Vite):**

```bash
vercel link --yes --project {vercel-project-name}
vercel --prod --yes
vercel alias set {deployment-url} {slug}.reversesingularity.com
vercel project protection disable {project} --sso   # if public 401
```

**Railway (Python/Flask):** see [deploy-matrix.md](deploy-matrix.md)

Verify: `curl -I https://{slug}.reversesingularity.com` → 200

### Phase 3 — Ship landing

```bash
vercel link --yes --project reversesingularity_landing
vercel --prod --yes
```

Hero active count updates automatically — do not edit `Hero.tsx`.

### Phase 4 — Docs (optional)

- Update `docs/ADDING-A-PROJECT.md` live table if new host pattern
- Update README featured projects if user wants

## Rules

- Never duplicate `id` in `PROJECTS`
- `coming-soon` entries omit `url`; keep one `future` placeholder at end
- `repoUrl` always under `github.com/reversesingularity/`
- Minimize scope: only touch registry + sync script unless UI copy requested

## Reference files

- [reference.md](reference.md) — types, accents, current projects
- [deploy-matrix.md](deploy-matrix.md) — Vercel vs Railway checklist
- `docs/ADDING-A-PROJECT.md` — human playbook

## Quick prompt template

```
Add "{title}" to reversesingularity landing.
Repo: reversesingularity/{repo}
Live: https://{slug}.reversesingularity.com
Stack: {vercel|railway}
Tags: {comma-separated}
Accent: {cyan|orange|green|amber|purple}
```
