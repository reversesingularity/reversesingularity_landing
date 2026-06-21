# Deploy Matrix — Reverse Singularity Projects

## Decision tree

```
Is the app React/Vite/static?
  YES → Vercel
  NO → Is it Python/Flask with ML?
    YES → Railway + Dockerfile
    NO → Ask user (GitHub Pages, Unity WebGL, etc.)
```

## Vercel checklist

- [ ] GitHub repo connected to Vercel project
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Root directory set if monorepo subfolder
- [ ] Production deploy succeeds
- [ ] Domain `{slug}.reversesingularity.com` added or aliased
- [ ] SSO protection disabled if 401: `vercel project protection disable {project} --sso`
- [ ] HTTPS 200 from browser and curl

## Railway checklist

- [ ] `Dockerfile` in app root (not repo root if nested)
- [ ] `requirements-prod.txt` — no dev-only deps; pin versions that exist on PyPI
- [ ] App binds `0.0.0.0:$PORT` (Railway sets PORT, typically 8080)
- [ ] `railway up` or GitHub deploy succeeds
- [ ] `/api/health` or `/` returns 200
- [ ] Railway custom domain: `{slug}.reversesingularity.com`, port **8080**
- [ ] Vercel DNS:
  - CNAME `{slug}` → `{hash}.up.railway.app`
  - TXT `_railway-verify.{slug}` → value from Railway
- [ ] Wait for SSL + verification (may take minutes)
- [ ] Test with `nslookup {slug}.reversesingularity.com 8.8.8.8`

## Landing page checklist

- [ ] `projects.ts` entry with correct `url`
- [ ] `sync-github-repos.mjs` updated
- [ ] `npm run validate:projects` passes
- [ ] `vercel --prod` on `reversesingularity_landing`

## Known pitfalls

| Symptom | Fix |
|---------|-----|
| 401 on Vercel subdomain | Disable SSO deployment protection |
| DNS points to Vercel instead of Railway | Explicit CNAME on Vercel DNS; flush local DNS cache |
| Railway build: pip not found | Use Dockerfile, remove broken nixpacks-only config |
| PyPI version not found | Pin to existing version (e.g. wotan 1.10 not 1.11) |
| gunicorn model not loaded | Import/load model at module level in app.py |

## CLI quick reference

```bash
# Landing
vercel link --yes --project reversesingularity_landing && vercel --prod --yes

# DNS
vercel dns ls reversesingularity.com
vercel dns add reversesingularity.com {slug} CNAME {target}

# Railway
railway login
railway link
railway up
railway domain
```
