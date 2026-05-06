# Cybersecurity Portfolio

This repository contains a professional cybersecurity portfolio for Patrice Brown. The site is built to present training, transferable experience, cybersecurity skills, and project work in a way that is clear for recruiters, mentors, and hiring teams.

## Purpose

The portfolio highlights work related to:

- Cybersecurity training and awareness
- Security analysis and threat identification
- Risk identification and mitigation
- Compliance and control review
- Incident response documentation
- SIEM/log analysis and network security fundamentals
- TryHackMe progress and hands-on lab practice
- Leadership, communication, and process improvement

Placeholder projects are intentionally labeled so they can be replaced with completed labs, reports, screenshots, GitHub links, and demos over time.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS v4
- Lucide React icons
- GitHub Pages deployment workflow

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run the TypeScript check:

```bash
npm run lint
```

## Project Structure

```text
src/
  App.tsx
  main.tsx
  index.css
  components/
    ProjectCard.tsx
    ProjectGrid.tsx
  data/
    projects.ts
```

The TryHackMe progress section currently lives in `src/App.tsx` as a small editable array named `tryHackMeProgress`. Update the room count, focus areas, profile link, or evidence notes there as your progress changes.

## Add a New Project

Portfolio projects are managed in `src/data/projects.ts`.

Add a new object to the `projects` array:

```ts
{
  title: "Completed Lab Title",
  category: "Detection & Analysis",
  status: "Completed",
  tools: ["Splunk", "Windows Event Logs"],
  shortDescription: "One-sentence summary for the project card.",
  detailedDescription: "A more detailed explanation of the scenario, work completed, and outcome.",
  keySkills: ["Log analysis", "Threat identification", "Documentation"],
  githubLink: "https://github.com/your-username/project-repo",
  liveDemoLink: "https://your-demo-link.example",
  screenshots: ["/screenshots/project-image.png"],
  icon: SearchCode,
}
```

If you add a new icon, import it from `lucide-react` at the top of `src/data/projects.ts`.

## Deployment Notes

The repository includes `.github/workflows/static.yml`, which builds the Vite app and deploys the `dist` folder to GitHub Pages.

For GitHub Pages project sites, the workflow sets:

```bash
BASE_PATH=/${{ github.event.repository.name }}/
```

For a custom domain or another host, update the deployment configuration and the `BASE_PATH` value if needed.

## Privacy

This portfolio does not include a phone number or home address. The contact section uses direct professional links instead of a frontend contact form, which avoids collecting messages without a backend.
