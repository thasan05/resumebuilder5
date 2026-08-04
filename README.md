# Dynamic Resume Builder

A browser-based resume builder with live preview, multiple templates, and one-click PDF export — built with React, TypeScript, Vite, and Tailwind CSS.

## Overview

Fill in your personal details, education, experience, and skills through a form-driven interface and watch the resume render in real time beside you. Pick from five layout templates and export the finished result as a PDF. Everything runs client-side — no backend, no account, no data leaving the browser.

## Features

- **Live preview** — the resume updates as you type (`components/resume/ResumePreview.tsx`)
- **Five templates** — Classic, Modern, Minimal, Creative, and Professional
- **Structured sections** — personal info, education, experience, and skills, each with its own form
- **Drag-and-drop reordering** of entries via `@dnd-kit` (`SortableItem.tsx`)
- **PDF export** using `jspdf` + `html2canvas`
- **Dark/light theming** (`context/ThemeContext.tsx`)
- **Client-side only** — no server, no database, no data collection

## Tech Stack

| Area | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS + shadcn/ui (Radix primitives) |
| Forms | React Hook Form + Zod |
| State | React Context (`ResumeContext`) |
| PDF export | jsPDF + html2canvas |
| Drag & drop | @dnd-kit |
| Testing | Vitest + Testing Library |

## Project Structure

```
src/
├── components/
│   ├── resume/
│   │   ├── PersonalInfoForm.tsx
│   │   ├── EducationForm.tsx
│   │   ├── ExperienceForm.tsx
│   │   ├── SkillsForm.tsx
│   │   ├── ResumePreview.tsx
│   │   ├── SortableItem.tsx
│   │   └── templates/     # Classic, Modern, Minimal, Creative, Professional
│   └── ui/                # shadcn/ui components
├── context/               # ResumeContext (resume data), ThemeContext (dark/light)
├── pages/                 # Index, NotFound
├── types/resume.ts        # PersonalInfo, Education, Experience, Skill, ResumeData
└── test/                  # Vitest setup and tests
```

## Getting Started

### Prerequisites

Node.js and npm ([install via nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Installation

```bash
git clone https://github.com/thasan05/resumebuilder5.git
cd resumebuilder5
npm install
npm run dev
```

Vite will print the local dev URL (default `http://localhost:5173`).

### Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run the test suite once |
| `npm run test:watch` | Run tests in watch mode |

## Deployment

The build output is a static bundle — deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages).

```bash
npm run build   # outputs to dist/
```

## Known Limitations

- Resume data lives in React state only; refreshing the page clears the form (no persistence layer).
- PDF export renders the preview via html2canvas, so very long resumes may paginate imperfectly.
- Test coverage is minimal — the suite is scaffolded but sparse.

## Author

Tanvir Hasan — Computer Science undergraduate, American International University-Bangladesh (AIUB)
