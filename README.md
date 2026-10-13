# Portfolio App

This project is a personal portfolio website built with React and Vite. It presents a curated selection of projects, technical interests, and contact information in a clean and responsive layout. The app is designed to help potential employers, recruiters, and collaborators quickly understand the work, tools, and skills that are being developed.

## Target audience

This portfolio is primarily intended for:

- Potential employers evaluating frontend and full-stack development work
- Recruiters screening candidates for technical roles
- Hiring managers looking for evidence of practical project experience
- Clients or collaborators interested in project quality, communication, and technical curiosity

The content is structured to make the app easy to scan quickly while still highlighting examples of real work and technology usage.

## Project overview

The portfolio showcases a small set of public-facing personal projects such as:

- Flame And Bun
- My Collections
- SQL Queries
- Comic Book Generator

Each project entry includes a short description, technologies used, and links to GitHub or live demos when available. The app uses a data-driven structure so projects can be added or updated without changing the main layout logic.

## Tech stack

- React 19
- Vite
- JavaScript
- CSS for component styling
- JSON-driven content for portfolio project entries

## Project structure

```text
portfolio-app/
├─ public/
│  └─ assets/
│     ├─ ComicBookGenerator/
│     ├─ FlameAndBun/
│     ├─ MyCollections/
│     ├─ SQLQueries/
│     └─ ...
├─ src/
│  ├─ components/
│  │  ├─ Header.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Project.jsx
│  │  ├─ ProjectList.jsx
│  │  └─ *.css
│  ├─ data/
│  │  └─ data.json
│  ├─ App.jsx
│  ├─ App.css
│  ├─ main.jsx
│  ├─ index.css
│  └─ assets/
├─ workflows/
│  └─ deploy.yaml
├─ index.html
├─ package.json
├─ vite.config.js
├─ eslint.config.js
├─ README.md
└─ public/
```

### Key files

- `src/data/data.json`: contains the portfolio project metadata and links
- `src/components/ProjectList.jsx`: loads and renders the project list
- `src/components/Project.jsx`: renders a single project card
- `src/App.jsx`: top-level app composition
- `workflows/deploy.yaml`: deployment workflow configuration

## Setup

1. Clone the repository.
2. Navigate to the project folder:

```bash
cd portfolio-app
```

3. Install dependencies:

```bash
npm install
```

## Execution

### Start the development server

```bash
npm run dev
```

The app will usually be served at:

```text
http://localhost:5173
```

### Build for production

```bash
npm run build
```

This creates a production-ready bundle in the `dist` folder.

### Preview the production build

```bash
npm run preview
```

This serves the built app locally so you can verify the production output before deployment.

### Lint the project

```bash
npm run lint
```

## Notes for maintainers

- Update project cards in `src/data/data.json` to add new work, links, or technologies.
- Styling is handled in the component CSS files under `src/components` and the app-level CSS files.
- This portfolio is designed to be lightweight, easily editable, and suitable for showcasing a developer portfolio to hiring teams.

## Deployment

The repository includes a deployment workflow in `workflows/deploy.yaml`, which can be adapted for cloud or static hosting pipelines depending on your deployment target.
