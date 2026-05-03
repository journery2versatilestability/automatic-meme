# Lebaba Ecommerce (React + Vite + Tailwind)

A storefront built with **React 18**, **Vite 5**, **Tailwind CSS 3**, **React Router v6**,
**Redux Toolkit**, and **Remix Icon**. The project is deployed automatically to
**GitHub Pages** via a GitHub Actions workflow.

Live site (after first successful workflow run):
**https://journery2versatilestability.github.io/automatic-meme/**

---

## Project structure

```
.
├── index.html                  # Vite entry HTML
├── package.json
├── vite.config.js              # base = "/automatic-meme/" for GitHub Pages
├── tailwind.config.js
├── postcss.config.js
├── .github/workflows/deploy.yml
├── mockups/                    # original static HTML design references
└── src/
    ├── main.jsx                # React entry, mounts <RouterProvider>
    ├── App.jsx                 # Layout: <Navbar /> + <Outlet /> + <Footer />
    ├── App.css                 # Custom storefront styles
    ├── index.css               # Tailwind directives
    ├── components/
    │   ├── Navbar.jsx
    │   └── Footer.jsx
    ├── pages/
    │   └── Home.jsx            # Hero, categories, products, deals, blog
    ├── routes/
    │   ├── router.jsx          # createBrowserRouter (uses BASE_URL basename)
    │   └── PrivateRoute.jsx    # Auth/role guard (Redux)
    └── data/
        ├── blogs.json
        ├── products.json
        └── steps.js            # Order timeline steps
```

---

## Run locally

Prerequisites: **Node.js 20+** and **npm**.

```powershell
# 1. Install dependencies
npm install

# 2. Start the Vite dev server (http://localhost:5173)
npm run dev

# 3. Production build (outputs to ./dist)
npm run build

# 4. Preview the production build locally
npm run preview
```

> When running `npm run dev` locally, the app is served from `/automatic-meme/`
> because of the `base` setting in `vite.config.js`. Open
> `http://localhost:5173/automatic-meme/` in your browser.
> If you want it served from `/`, run with an empty base:
> `$env:GITHUB_PAGES_BASE='/'; npm run dev`

---

## Deploy to GitHub Pages

Deployment is fully automated. **One-time setup** in the repository:

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to the `main` branch — the `.github/workflows/deploy.yml` workflow will:
   - install deps with `npm ci`
   - run `npm run build`
   - upload `./dist` and publish it to GitHub Pages.

You can also trigger it manually from the **Actions** tab → *Deploy to GitHub
Pages* → **Run workflow**.

### Push workflow

```powershell
git add -A
git commit -m "your message"
git push origin main
```

The deploy URL appears in the Actions run summary once the `deploy` job finishes.

---

## Repository

- Remote: `https://github.com/journery2versatilestability/automatic-meme.git`
- Default branch: `main`

## License

For learning / portfolio use.

