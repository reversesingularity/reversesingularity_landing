# Session handoff — Add blackhole + leo projects (2026-07-26)

**Status:** complete — both live on production landing  
**Landing:** https://reversesingularity.com  
**Branch:** `main`

## Live projects added this session

| id | Title | URL | Host | Repo |
|----|-------|-----|------|------|
| blackhole | Black Hole Explorer | https://blackhole.reversesingularity.com | Vercel | black-hole-explorer-web-app |
| leo | LEO Orbital Capacity Forecaster | https://leo.reversesingularity.com | Railway | leo-orbital-capacity-forecaster |

Active live count on landing: **8** (+ coming-soon `future`).

## Files touched (landing repo)

| Path | Change |
|------|--------|
| `src/data/projects.ts` | Added `blackhole` + `leo` cards |
| `scripts/sync-github-repos.mjs` | LIVE_URLS + LANDING_REPO_MAP + category rules |
| `src/data/github-repos.ts` | Regenerated via `npm run sync:repos` |
| `docs/ADDING-A-PROJECT.md` | Live table rows |
| `.cursor/skills/add-landing-project/reference.md` | Registry reference |

## Deploy notes

### Black Hole Explorer (Vite/React → Vercel)

- Vercel project: `black-hole-explorer`
- Alias: `blackhole.reversesingularity.com`
- App path: `F:\Projects\black- hole-explorer-web-app`
- No Dockerfile required (`base: '/'` unless `GITHUB_PAGES=true`)

### LEO Forecaster (Streamlit → Railway)

- Railway project/service: `leo-orbital-capacity-forecaster`
- Domain: `leo.reversesingularity.com` (port 8080)
- DNS on Vercel: CNAME + `_railway-verify.leo` TXT
- Must ship `tests/fixtures/omm_sample.json` in Docker image (catalog offline fallback)
- Deploy files live in the **app** repo: `Dockerfile`, `railway.toml`, `.dockerignore`

## Agent playbook

Follow `AGENTS.md` + `.cursor/skills/add-landing-project/SKILL.md`:

1. Registry → validate/build  
2. Deploy app (Vercel or Railway)  
3. `vercel --prod` landing  

## Suggested next steps

1. Commit + push landing `main` and LEO `master` if not already
2. Optionally connect Railway service to GitHub for auto-deploys
3. Next add: use scaffold prompt in `AGENTS.md`
