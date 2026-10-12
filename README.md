# Suraj Kumar Singh — Portfolio

Next.js 14 (App Router) + Tailwind CSS 3 + TypeScript.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Edit content
All text lives in `lib/data.ts` (profile, projects + architecture diagrams, experience,
education, skills, achievements, coding-profile stats). Set `siteUrl` there to your real domain.

- Photo: `public/suraj.jpg` · Resume: `public/resume.pdf` (replace to update)
- Coding-profile numbers in `codingProfiles` are a static snapshot (Oct 2026).
- The "Latest on GitHub" section fetches live from the GitHub API (revalidates hourly).
