# CampusPe Landing Page

React 18 + Vite landing page, with component-specific CSS and a continuously animated partner marquee.

## Local development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

The build invokes the Vite CLI through Node to avoid `node_modules/.bin/vite: Permission denied` on deployment.

## GitHub upload

**Upload the contents of this project directory**, not the containing ZIP. `package.json`, `index.html`, `src/`, and `vercel.json` should be at your repository root.

Do not commit `node_modules`, `dist`, or `.vercel`. They are excluded by `.gitignore`.

If your GitHub repo **already tracks** `node_modules`, `.gitignore` alone will not remove those files. From your repository root run:

```bash
git rm -r --cached node_modules
# If present, also run: git rm -r --cached dist .vercel
git add .
git commit -m "Clean dependencies and fix Vercel build"
git push origin main
```

If Git reports that a path does not match any files, skip that path. Do not delete your `.git` directory.

## Vercel settings

- Framework Preset: **Vite**
- Root Directory: **./** if the project files are at the repository root
- Install Command: **npm install**
- Build Command: **npm run build**
- Output Directory: **dist**

If the project is inside a nested folder, set Vercel's Root Directory to that folder instead. Redeploy after pushing the cleaned commit. Thousands of files in GitHub generally indicate committed dependencies, not 5,000 separate commits.

## Notes

All sample job data and CTAs are frontend demonstrations. Partner logos are styled text representations. Animations respect `prefers-reduced-motion`.

Developed by Guddu.
