# Riasat Chowdhury Portfolio

Personal portfolio website for Riasat Chowdhury, built with React and Vite. The site showcases projects, technical skills, certifications, experience, education, activities, and contact information.

**Live site:** https://rchowd9.github.io/personal-portfolio/

## Overview

The portfolio is designed as a responsive, accessible personal website for a full-stack developer and computer science student. It includes:

- A welcome page with a professional summary, resume download, and social links
- About, experience, education, and activities pages
- A searchable project gallery with technology filters
- Categorized technical skills and certifications
- A contact page
- Persistent light and dark themes
- Hash-based client-side routing
- A live date and time display on the skills page

## Tech Stack

- React 18
- Vite 5
- React Router DOM 6
- React Icons
- JavaScript and JSX
- CSS
- GitHub Pages and Vercel-compatible static hosting

## Technical Skills

The skills page lists technologies across these categories:

- **Languages:** JavaScript, TypeScript, C#, Java, C++, Python, HTML, CSS, PHP, Go
- **Python libraries and frameworks:** Scikit-learn, Pandas, Seaborn, NumPy, FastAPI, Matplotlib
- **Frameworks and libraries:** React, Vue.js, Django, Next.js, Node.js, Spring Boot, Express.js, JavaFX/FXML, Bootstrap, Tailwind CSS, TensorFlow, Flask
- **Databases and cloud:** Redis, MySQL, MongoDB, Supabase, AWS, Google Cloud, Microsoft Azure
- **Developer tools:** Git, Docker, SchemaSpy, Vite, Anaconda
- **Editors and IDEs:** VS Code, Sublime Text, IntelliJ IDEA, PyCharm, Eclipse, Jupyter Notebook
- **Servers and deployment:** Streamlit, GitHub Actions, XAMPP, Railway, Vercel

## Certifications

- Google Cloud Fundamentals - July 2025
- Intro to Technical Interview Prep - April 2026
- Foundations of Creative Writing Microcredential - July 2026
- Foundations of AI Engineering - August 2026

## Project Structure

```bash
.
├── public/
│   ├── profile.jpg
│   └── Riasat_Chowdhury_Resume.pdf
├── src/
│   ├── App.jsx
│   ├── components/
│   ├── context/
│   ├── index.css
│   ├── main.jsx
│   └── pages/
├── index.html
├── package.json
├── vercel.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v18 or newer recommended)
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```bash
http://localhost:3000
```

## Available Scripts

```bash
npm run dev     # starts the Vite development server
npm run build   # builds the app for production
npm run preview # previews the production build locally
npm run deploy  # deploys the built app to GitHub Pages
```

## Deployment

This project is configured for modern static hosting.

### Vercel

The project includes a `vercel.json` file that routes all application requests back to `index.html`.

### GitHub Pages

The `deploy` script builds the site and publishes `dist` to the `gh-pages` branch using `gh-pages`.

## Customization

To personalize this portfolio:

1. Update the brand name and content in the page files inside `src/pages`.
2. Change profile details and social links in `src/pages/Home.jsx`.
3. Update the project list in `src/pages/Projects.jsx`.
4. Update skill categories and certifications in `src/pages/Skills.jsx`.
5. Adjust theme styling in `src/index.css`.
6. Replace the resume file in `public/Riasat_Chowdhury_Resume.pdf`.
7. Replace the profile image in `public/profile.jpg`.

## Notes

- The app uses `HashRouter`, which allows static hosts to serve the portfolio without server-side route configuration.
- Theme preference is managed through `ThemeContext`.
- Resume and image files are stored in `public` so they are served directly.

## License

This project is for personal use and portfolio purposes.

## Contact

For questions or collaboration opportunities, use the contact page in the app or the email/social links shown on the site.
