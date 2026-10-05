# BeLikely Dashboard

A clean, **config-driven** admin dashboard starter.

- **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui**
- **Firebase Auth** (email/password + Google) and **Firestore** for data
- Light/dark theme
- Deploys on **Firebase App Hosting** (server-rendered)

It works out of the box with **sample data**, so you can see the UI before any
Firebase setup. Add your Firebase web config to turn on real login + data.

---

## Quick start

```bash
pnpm install
cp .env.example .env.local   # fill in your Firebase web config
pnpm dev                     # http://localhost:3000
```

Without Firebase config, the dashboard shows in **preview mode** (sample data, no
login). With config, you must sign in at `/login`.

## Make it your own

1. **`webshots.config.json`** — brand name, logo and **accent colour**.
   [WebShots](https://webshots.design) writes this file when you start a project
   from a blueprint; edit it by hand any time.
2. **`src/config/dashboard.ts`** — sidebar items and the sample data.
3. Replace **`public/logo.svg`** with your logo.
3. Add your **Firebase web config** to `.env.local` (and to `apphosting.yaml`
   for deploy).

## Firebase setup (one time per project)

1. Create a Firebase project (Blaze plan — App Hosting requires it).
2. **Authentication** → enable **Email/Password** and **Google**.
3. **Firestore** → create a database. Rules ship in `firestore.rules`.
4. Copy the **web app config** into `.env.local` / `apphosting.yaml`.

### (Optional) seed sample data into Firestore

```bash
SEED_EMAIL=you@example.com SEED_PASSWORD=... \
  node --env-file=.env.local scripts/seed.mjs
```

## Build

```bash
pnpm build
```

## Deploy (Firebase App Hosting)

```bash
firebase use <your-project-id>
firebase apphosting:backends:create   # first time
firebase deploy
```

`apphosting.yaml` holds the runtime config + the `NEXT_PUBLIC_FIREBASE_*` env
vars. App Hosting needs the **Blaze (pay-as-you-go)** plan.

---

## Structure

```
webshots.config.json      # ← brand: name, logo, accent colour
webshots.json             # what this template builds, for WebShots and AI agents
src/
  config/dashboard.ts     # ← sidebar and sample data
  lib/
    firebase.ts           # Firebase init (web config from env)
    auth.tsx              # auth context (email + Google)
    data.ts               # Firestore reads (fall back to sample data)
  app/
    layout.tsx            # root layout + theme
    login/page.tsx        # sign in
    (dash)/layout.tsx     # protected shell (sidebar/topbar)
    (dash)/page.tsx       # Overview (KPIs, chart, activity)
    globals.css           # shadcn theme tokens (light/dark)
  components/
    ui/                   # shadcn-style primitives
    Sidebar / Topbar / StatCard / OverviewChart / ThemeToggle
public/
  logo.svg                # ← replace with your logo
scripts/
  seed.mjs                # optional Firestore seeder
```

## For AI agents

`webshots.json` says which parts of WebShots' SaaS Dashboard and Internal Tool
blueprints this template already builds. When WebShots starts a project, it also
writes `BLUEPRINT.md`: the picked parts still to build.

---

MIT licensed. Built by [BeLikely](https://belikely.com).
