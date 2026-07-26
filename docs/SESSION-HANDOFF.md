# Session handoff — DE&I PMO live on landing (2026-07-26)

**Status:** complete — DE&I Horizontal Infrastructure PMO registered, deployed on Railway, and live on landing  
**Landing:** https://reversesingularity.com  
**App:** https://dei-pmo.reversesingularity.com  
**Branch:** `main` (landing)  
**Next agent:** Read this file, then `AGENTS.md` + `.cursor/skills/add-landing-project/SKILL.md`.

---

## Live surfaces (verified)

| Surface | URL | Status |
|---------|-----|--------|
| App | https://dei-pmo.reversesingularity.com | 200 (Railway, SSL valid) |
| Railway service URL | https://dei-pmo-dashboard-production.up.railway.app | 200 |
| GitHub | https://github.com/reversesingularity/dei-pmo-dashboard | public `main` |
| Landing card | https://reversesingularity.com | `dei-pmo` → `status: 'live'` |

Active live count on landing: **11** (+ coming-soon `future`).

---

## What this session did

1. Registered **DE&I Horizontal Infrastructure PMO** card in `src/data/projects.ts` (cyan accent)
2. Updated `scripts/sync-github-repos.mjs` (`LIVE_URLS` + `LANDING_REPO_MAP` + web-apps category) and regenerated `github-repos.ts`
3. Validated + built landing (`validate:projects`, `build`)
4. Added Railway deploy assets in app repo: `Dockerfile`, `railway.toml`, `.dockerignore`
5. Created Railway project `acceptable-dream` / service `dei-pmo-dashboard`, deployed with `railway up`
6. Custom domain + Vercel DNS:
   - CNAME `dei-pmo` → `jt3qr72x.up.railway.app`
   - TXT `_railway-verify.dei-pmo` → `railway-verify=300af427…`
7. Set GitHub repo homepage to `https://dei-pmo.reversesingularity.com`
8. Shipped landing with `vercel --prod` (scope `reversesingularitys-projects`)

Local app path: `F:\Projects\job-hunt\dei-pmo-dashboard`  
Remote: `origin` → `https://github.com/reversesingularity/dei-pmo-dashboard.git`

---

## Architecture

```
Browser → dei-pmo.reversesingularity.com
              │
              ├─ Vercel DNS CNAME → jt3qr72x.up.railway.app
              │
              └─ Railway (Streamlit)
                    Dockerfile → python:3.12-slim
                    build: pip install + generate_mock_data.py
                    run: streamlit on 0.0.0.0:$PORT (8080)
                    data: DuckDB regenerated at image build (gitignored)
```

| Layer | Host | Notes |
|-------|------|--------|
| Streamlit UI | Railway | project id `708f47be-276a-4724-8704-c829f15f3588` |
| DNS / SSL | Vercel DNS + Railway cert | verified ACTIVE / VALID |
| Attribution | OIA caption in `app.py` | header + sidebar — do not remove |

---

## Files touched (landing repo)

| Path | Change |
|------|--------|
| `src/data/projects.ts` | `dei-pmo` card — live URL + cyan accent |
| `scripts/sync-github-repos.mjs` | LIVE_URLS + LANDING_REPO_MAP + web-apps category |
| `src/data/github-repos.ts` | Regenerated via sync script |
| `docs/ADDING-A-PROJECT.md` | Live table row for `dei-pmo` |
| `.cursor/skills/add-landing-project/reference.md` | Registry + accent map |
| `.cursor/skills/add-landing-project/deploy-matrix.md` | Streamlit → Railway path |
| `.cursor/rules/reversesingularity-deploy.mdc` | Host matrix includes dei-pmo on Railway |
| `README.md` | Featured projects + repo map + catalog counts |
| `design-system/MASTER.md` | Project-color map extended |
| `docs/SESSION-HANDOFF.md` | This handoff |

## Files touched (app repo — may be uncommitted)

| Path | Change |
|------|--------|
| `Dockerfile` | Streamlit on `$PORT`, generate DuckDB at build |
| `railway.toml` | DOCKERFILE builder + healthcheck `/` |
| `.dockerignore` | Exclude docs/pdfs/venv; regenerate duckdb in image |
| `HANDOFF.md` | Deploy + landing registration status |

---

## Registry snapshot

```ts
{
  id: 'dei-pmo',
  title: 'DE&I Horizontal Infrastructure',
  subtitle: 'PMO Dashboard',
  url: 'https://dei-pmo.reversesingularity.com',
  repoUrl: 'https://github.com/reversesingularity/dei-pmo-dashboard',
  status: 'live',
  accent: 'cyan',
  tags: ['Python', 'Streamlit', 'DuckDB', 'Plotly'],
}
```

Repo slug map: `dei-pmo` → `dei-pmo-dashboard`

---

## Agent playbook (unchanged)

1. **Registry** → `projects.ts` + sync script → `validate:projects` + `build`
2. **Deploy** app (Vercel and/or Railway) + DNS
3. **Ship** landing → `vercel link --yes --project reversesingularity_landing` then `vercel --prod --yes`  
   Scope on this machine: `--scope reversesingularitys-projects`

---

## Suggested next steps

1. **Commit + push** landing registry/docs changes (still local unless committed)
2. **Commit + push** app `Dockerfile` / `railway.toml` / `.dockerignore` so Railway rebuilds are reproducible from GitHub
3. Optional: rename Railway project from `acceptable-dream` → `dei-pmo-dashboard` in the Railway dashboard
4. Optional: connect Railway ↔ GitHub auto-deploy on `main`
5. Optional: refresh README screenshots (`node scripts/capture-screenshots.mjs`)
6. Next new project: use scaffold prompt in `AGENTS.md`

## Pitfalls for next agent

- Vercel team slug is `reversesingularitys-projects` (not `reversesingularity`)
- DE&I is **Streamlit on Railway**, not Vercel — same pattern as `leo` / `exoplanet`
- `data/dei.duckdb` is **gitignored**; Docker build must run `python generate_mock_data.py`
- Keep OIA captions in `app.py` (header + sidebar); never add NZDF emblems
- Synthetic EVM / risk figures must never be presented as real NZDF delivery data
- Windows DNS cache can lie after CNAME changes — verify with `nslookup … 8.8.8.8`
- App lives under JobHunt path `F:\Projects\job-hunt\dei-pmo-dashboard` but ships from standalone git remote
