CampusPe — Responsive Landing Page
A modern, responsive CampusPe landing page built with React JSX, Vite, and component-specific CSS. Inspired by the provided CampusPe landing-page design, the interface focuses on clean typography, smooth animations, interactive sections, and reusable components.
Frontend UI project: Job listings, statistics, logos, and other content are illustrative. No backend or authentication service is connected.

Features
- Responsive layouts for desktop, tablet, and mobile screens
- Hero section with interactive cards and subtle motion effects
- Continuously scrolling partner-logo marquee (including GINSERV and Startup Karnataka)
- Opportunity discovery section with category filters and animated cards
- Resume upload UI with frontend file validation
- Employer-focused section with interactive calls to action
- Mobile app showcase with automatic and manual carousel controls
- Hover, focus, active, and scroll-reveal interactions
- Accessibility-friendly reduced-motion behavior
- Separate CSS files for individual React components
Tech Stack
- React 18 (JSX)
- Vite 6
- CSS3
- Lucide React icons
Getting Started
Requirements: A recent Node.js LTS version and npm.
git clone https://github.com/Guddoo7980/campuspe-assesment.git
cd campuspe-assesment
npm install
npm run dev
Open the local URL printed by Vite in your terminal.
Available Commands
Command	Description
npm run dev	Start the local development server
npm run build	Generate the production build in dist/
npm run preview	Preview the production build locally


Project Structure
campuspe-assesment/
├── index.html
├── package.json
├── vercel.json
├── .gitignore
├── README.md
└── src/
    ├── main.jsx
    ├── styles.css
    ├── data/
    │   └── content.js
    └── components/
        ├── Header.jsx / Header.css
        ├── Hero.jsx / Hero.css
        ├── Common.jsx / Common.css
        ├── Opportunities.jsx / Opportunities.css
        ├── Resume.jsx / Resume.css
        ├── Employers.jsx / Employers.css
        ├── AppShowcase.jsx / AppShowcase.css
        └── Footer.jsx / Footer.css
Each section keeps its JSX and styles in separate files to make the project easy to maintain and extend.
Deploy on Vercel
1. Push the contents of the project folder to your GitHub repository. Keep package.json, index.html, and src/ at the repository root.
2. In Vercel, select Add New → Project and import the repository.
3. Use the following settings:
   Setting	Value
   Framework Preset	Vite
   Root Directory	./
   Install Command	npm install
   Build Command	npm run build
   Output Directory	dist
4. Select Deploy.
The build script calls Vite through Node to work around environments where the Vite executable wrapper lacks execution permission.
Avoid Uploading Thousands of Files
Do not commit node_modules/, dist/, or .vercel/. These belong in .gitignore.
If node_modules was previously committed, remove it from Git tracking (without deleting your local dependencies):
git rm -r --cached node_modules
git add .
git commit -m "Clean repository for deployment"
git push origin main
If Git says node_modules is not tracked, skip the first command. If the app files live inside a subfolder rather than the repository root, set Vercel's Root Directory to that subfolder.
Notes
This project demonstrates the interface and animations. Backend-powered login, job applications, real job feeds, and resume processing would require additional integration.
Developed by Guddu
