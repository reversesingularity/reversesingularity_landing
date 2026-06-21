# Reverse Singularity Landing — Agent Guide

Orchestration for Cursor agents adding or shipping projects on [reversesingularity.com](https://reversesingularity.com).

## Repository role

This repo is the **marketing landing page** only. Individual simulations live in separate GitHub repos under `reversesingularity/`. Adding a project usually means:

1. Register card in this repo (`projects.ts`)
2. Deploy the app repo (Vercel or Railway)
3. Redeploy this landing page

## Agent roles

### 1. Registry Agent

**Trigger:** "Add X to the landing page", "Register project", "New card for …"

**Skill:** `.cursor/skills/add-landing-project/SKILL.md`

**Scope:**

- `src/data/projects.ts`
- `scripts/sync-github-repos.mjs`
- Run `validate:projects`, `build`, `sync-github-repos`

**Do not:** Change grid/hero components unless copy explicitly requested.

**Done when:** Validation passes, build green, user confirms card looks correct in dev.

---

### 2. Deploy Agent

**Trigger:** "Deploy subdomain", "Fix 401", "Railway/Vercel setup for …"

**Skill:** `.cursor/skills/add-landing-project/deploy-matrix.md`

**Rules:** `.cursor/rules/reversesingularity-deploy.mdc`

**Scope:** Target app repo (may be outside this workspace). Vercel/Railway CLI, DNS on Vercel.

**Done when:** `https://{slug}.reversesingularity.com` returns 200, SSL valid.

---

### 3. Ship Agent

**Trigger:** "Push landing live", "Update production site"

**Commands:**

```bash
vercel link --yes --project reversesingularity_landing
vercel --prod --yes
```

**Done when:** reversesingularity.com shows new card and correct live count.

---

## Recommended flow (full new project)

```
User request
    │
    ▼
Registry Agent ──► projects.ts + sync script + validate + build
    │
    ▼
Deploy Agent ──► app repo on Vercel/Railway + DNS
    │
    ▼
Ship Agent ──► vercel --prod (landing)
    │
    ▼
Verify ──► card link opens live app
```

Agents can run Registry + Deploy in parallel if the app is already deployed (Registry only needs the final URL).

## Key paths

| Path | Purpose |
|------|---------|
| `src/data/projects.ts` | Project cards registry |
| `scripts/sync-github-repos.mjs` | GitHub catalog + repo map |
| `scripts/validate-projects.mjs` | Registry linter |
| `scripts/scaffold-project.mjs` | Entry template generator |
| `docs/ADDING-A-PROJECT.md` | Human + agent playbook |
| `.cursor/rules/` | Persistent Cursor rules |
| `.cursor/skills/add-landing-project/` | Step-by-step skill |

## Default prompt (copy for users)

```
Add "{Project Title}" to the Reverse Singularity landing page.

- id: {slug}
- repo: reversesingularity/{github-repo}
- url: https://{slug}.reversesingularity.com
- stack: {vercel|railway}
- tags: {React, Three.js, ...}
- accent: {cyan|orange|green|amber|purple}

Follow AGENTS.md and the add-landing-project skill. Validate, build, deploy landing when ready.
```

## Subagent hints

| Task | Subagent type |
|------|----------------|
| Explore app repo structure | `explore` |
| Vercel/Railway CLI | `shell` |
| Review registry diff | `code-reviewer` |
| E2E verify card + link | `e2e-runner` |

## Accounts & projects

- **Vercel team:** `reversesingularity`
- **Landing project:** `reversesingularity_landing`
- **Domain DNS:** Vercel (reversesingularity.com)
- **GitHub org:** `github.com/reversesingularity`

Never commit secrets (`.env`, Railway tokens, Vercel tokens).
