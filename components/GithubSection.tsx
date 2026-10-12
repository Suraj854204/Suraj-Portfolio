import { Star, GitFork, Github, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
};

async function getRepos(): Promise<Repo[] | null> {
  const repoNames = [
    "MovieFlex",
    "Ai-Code-Companion--v1",
    "Snapdragon-CoderX",
    "next-hire-job-portal",
    "Support-Saas",
    "TaskForge",
  ];

  try {
    const results = await Promise.all(
      repoNames.map(async (name) => {
        const res = await fetch(
          `https://api.github.com/repos/${profile.githubUsername}/${name}`,
          { next: { revalidate: 3600 } }
        );

        if (!res.ok) return null;

        const data: Repo = await res.json();
        return data;
      })
    );

    return results.filter((repo): repo is Repo => repo !== null);
  } catch {
    return null;
  }
}

// Presentation only: small colour dot per language.
const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572a5",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#8a8a8a",
  Go: "#00add8",
  Rust: "#dea584",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
};

export default async function GithubSection() {
  const repos = await getRepos();

  return (
    <section id="github" className="border-t border-border">
      <div className="container-x section-y">
        <div className="reveal mb-8 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Latest on GitHub</span>
            <h2 className="section-title">Recently pushed.</h2>
          </div>

          <a
            href={profile.github}
            className="btn btn-ghost self-start sm:self-auto"
          >
            <Github size={16} />{" "}
            {profile.github.replace("https://", "")}
          </a>
        </div>

        {repos && repos.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                className="reveal group panel panel-hover flex flex-col p-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="mb-2 flex items-start justify-between gap-3">
                  <h3 className="min-w-0 break-words font-mono text-sm font-medium">
                    {repo.name}
                  </h3>

                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </div>

                <p className="mb-5 flex-1 text-xs leading-relaxed text-muted-foreground sm:text-[13px]">
                  {repo.description || "No description provided."}
                </p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  {repo.language && (
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        aria-hidden="true"
                        className="h-2.5 w-2.5 rounded-full"
                        style={{
                          background:
                            LANG_COLORS[repo.language] ?? "var(--accent)",
                        }}
                      />
                      {repo.language}
                    </span>
                  )}

                  <span className="flex items-center gap-1">
                    <Star size={12} /> {repo.stargazers_count}
                  </span>

                  <span className="flex items-center gap-1">
                    <GitFork size={12} /> {repo.forks_count}
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          // Honest fallback — no fabricated repo data if the GitHub API is unavailable.
          <p className="panel p-5 text-sm text-muted-foreground">
            Live repository data couldn&apos;t be loaded right now — see the
            full list directly on{" "}
            <a
              href={profile.github}
              className="text-accent hover:underline"
            >
              GitHub
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
}