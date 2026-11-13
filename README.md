# lazodevo

> Tirta Keniten's portfolios

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and preview it locally
$ npm run build
$ npm run start

# generate the static site (.output/public, or dist/ when Netlify's
# NETLIFY environment is detected)
$ npm run generate

# lint JavaScript/Vue and SCSS
$ npm run lint
$ npm run lint:style
```

Nuxt 3 requires Node `^20.19.0 || >=22.12.0`. Deployment is configured in
`netlify.toml`: Netlify builds with Node 20 (`npm run generate`) and publishes
`dist` (Nitro's `netlify-static` output, which also emits `_headers` and
`_redirects`).

For detailed explanation on how things work, check out the [Nuxt 3 docs](https://nuxt.com).

## Known `npm audit` findings

`npm audit` reports a number of low/moderate advisories inherited from the
Nuxt 3 build toolchain (`nitropack` → `@vercel/nft`, `archiver` → `readdir-glob`
→ `minimatch`, `glob`, `deepmerge`) and from the ESLint config
(`@typescript-eslint/*` → `minimatch`). There are no high or critical findings.

The audit's only offered fixes are breaking upgrades to Nuxt 4, which requires
Node `^22.22.3`, while this project targets Node 20. They are accepted for now
because:

- the site is deployed as a static site (`.output/public`) and the Nitro server
  is never run in production;
- `glob`/`minimatch`/`archiver`/`deepmerge` are only used at build time.

Revisit these findings when upgrading to Node 22 / Nuxt 4.
