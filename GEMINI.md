# XXCC Unicorn Press: Instructional Context

This project is a static website for **XXCC Unicorn Press** and its journal, **Journal of XXCC Unicorn**, designed to record and publish research papers by Yifei Fan and Xiayu Tan.

## 🚀 Project Overview

- **Framework**: [Astro](https://astro.build/) (Static Site Generator)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Mathematics**: [KaTeX](https://katex.org/) (Custom server-side rendering for LaTeX equations)
- **Data Layer**: Decoupled content managed via `src/data/config.yml`.
- **Deployment**: Hosted on GitHub Pages (`xxcc-unicorn-press.github.io`) with automated deployment via GitHub Actions.

## 🛠 Architecture & Key Files

- **`src/data/config.yml`**: The central source of truth. Defines publisher info, editors, and all journal issues (papers).
- **`src/utils/config.ts`**: Utility to load and parse the YAML configuration.
- **`src/utils/math.ts`**: Custom LaTeX renderer supporting inline (`$...$`) and block (`$$...$$`) math using KaTeX.
- **`src/components/IssueCard.astro`**: A horizontal, full-width card component for the homepage gallery.
- **`src/pages/issues/[id].astro`**: Dynamic route that generates individual detail pages for each paper.
- **`public/assets/`**: Static assets. Note that paper-specific assets (covers, PDFs) are typically hosted on the individual paper's GitHub repository.

## 💻 Building and Running

- **Development Server**: `npm run dev`
- **Build for Production**: `npm run build` (Generates static HTML in `dist/`)
- **Preview Build**: `npm run preview`

## 📝 Development Conventions

- **Content Updates**: All primary content (titles, authors, editors, abstracts) should be modified in `src/data/config.yml`.
- **Math in YAML**: Mathematical notation in the `abstract` field should use LaTeX syntax. Use block style (`|`) in YAML for multi-line abstracts.
- **Image Rendering**: The site uses `[image-rendering:auto] transform-gpu` on cover images to ensure high-quality, hardware-accelerated scaling.
- **Asset Links**: Paper assets (frontcover, backcover, PDFs) are resolved dynamically using `${config.publisher.siteUrl}/${issue.repoName}/`.

## 🧬 Issue Schema (YAML)

Each issue entry in `config.yml` requires:
```yaml
- id: "unique-slug"
  title: "Paper Title"
  volume: 1
  issue: 1
  year: 2026
  authors: ["Author Name"]
  editors: ["Editor Name"]
  repoName: "github-repo-name"
  arxiv: "2501.03714" # Optional: ArXiv ID for the paper
  abstract: "Abstract with math like $E=mc^2$."
```
