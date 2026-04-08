# XXCC Unicorn Press Website

This is the static website for **XXCC Unicorn Press** and its flagship publication, the **Journal of XXCC Unicorn**. It serves as a digital archive for the research papers and publications of Yifei Fan and Xiayu Tan.

The site is built as a high-performance static application designed for seamless hosting on GitHub Pages.

## 🚀 Technology Stack

- **[Astro](https://astro.build/)**: Static Site Generator (SSG) for optimal performance and zero-JS by default.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS for a modern, responsive, and clean UI.
- **[KaTeX](https://katex.org/)**: Fast LaTeX math rendering for scientific abstracts.
- **YAML Data**: Decoupled content management for easy updates without modifying code.
- **GitHub Actions**: Automated CI/CD pipeline for building and deploying to GitHub Pages.

## 🛠 Project Structure

- `src/data/config.yml`: **The central configuration file**. Edit this to update publisher details, the editorial board, and the list of published papers.
- `src/utils/`: Contains helpers for YAML parsing and mathematical rendering.
- `src/pages/`:
  - `index.astro`: The homepage gallery featuring horizontal paper cards.
  - `issues/[id].astro`: Dynamic routing for individual paper detail pages.
- `src/components/`: Reusable UI elements (Header, Footer, Issue Cards).
- `public/`: Static assets (favicon, global assets).

## 📝 How to Add a New Paper

Each publication is treated as an "issue" and is linked to its own GitHub repository within the [XXCC-Unicorn-Press](https://github.com/XXCC-Unicorn-Press) organization.

### 1. Repository Setup
The paper's repository must have GitHub Pages enabled and host the following assets at its root:
- `frontcover.png`: High-quality front cover image.
- `backcover.png`: High-quality back cover image.
- `online.pdf`: The digital version of the paper.
- `print.pdf`: The print-ready version of the paper.
- `LICENSE`: The publication license file.

### 2. Update Configuration
Add a new entry to the `issues` list in `src/data/config.yml`:

```yaml
- id: "unique-slug-for-url"
  title: "Full Title of the Research Paper"
  volume: 1
  issue: 2
  year: 2026
  authors:
    - "Author Name"
  editors:
    - "Editor Name"
  repoName: "the-repository-name"
  arxiv: "2501.03714" # Optional: ArXiv ID
  abstract: |
    Your abstract text here. 
    Supports inline math like $E=mc^2$ and block math like $$\int_{\Sigma} \omega$$.
```

## 💻 Development & Deployment

### Local Development
Install dependencies and start the development server:
```bash
npm install
npm run dev
```

### Build for Production
Generate the static site in the `dist/` directory:
```bash
npm run build
```

### Deployment
Deployment is fully automated. Simply push your changes to the `main` branch, and the GitHub Actions workflow (`.github/workflows/deploy.yml`) will build and deploy the site to the `gh-pages` branch.

## 📄 License
This project is licensed under the [MIT License](LICENSE).

---
© 2026 XXCC Unicorn Press. Managed by Yifei Fan and Xiayu Tan.
