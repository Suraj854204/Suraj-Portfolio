// Single source of truth for the whole portfolio.
// Content is taken from the resume PDF and the public profile pages.
// Edit text here — every section updates.

export const siteUrl = "https://suraj-kumar-singh.dev"; // replace with your real deployed domain

export const profile = {
  name: "Suraj Kumar Singh",
  headline: "Full-stack & backend engineer building scalable AI systems",
  location: "Lucknow, India",
  email: "surajkumar854000@gmail.com",
  phone: "+91-7250903724",
  github: "https://github.com/Suraj854204",
  githubUsername: "Suraj854204",
  // Resume lists "linkedin.com/in/suraj-singh" — confirm this is your exact URL.
  linkedin: "https://www.linkedin.com/in/suraj-singh",
  leetcode: "https://leetcode.com/u/CodeSurajX/",
  geeksforgeeks: "https://www.geeksforgeeks.org/profile/surajsingh01",
  codechef: "https://www.codechef.com/users/codersurajx",
  photo: "/suraj.jpg",
  about: [
    "Software Engineer building scalable, cloud-native full-stack systems with React, Node.js, Java/Spring Boot, and REST APIs using microservices and API-first design.",
    "I've delivered a 5-service job portal, a multi-tenant AI support platform on AWS (ECS Fargate, RDS, ElastiCache, Elasticsearch/OpenSearch, MSK) provisioned with Terraform and GitHub Actions CI/CD, and an on-device AI code reviewer that runs entirely on a Snapdragon NPU.",
    "Strong grounding in DSA and design patterns (2,000+ problems solved), ICPC 2026 Global Rank 1025, and a 96.83 percentile in Naukri Young Turks 2025. Currently seeking Software Engineering, Full-Stack, and Backend internships.",
  ],
};

export type Diagram = { label: string; nodes: { name: string; note?: string }[] }[];

export type Project = {
  slug: string;
  name: string;
  year: string;
  flagship?: boolean;
  oneLiner: string;
  stack: string[];
  githubUrl?: string;
  overview: string[];
  decisions: { title: string; body: string }[];
  challenges: string[];
  diagram: Diagram;
};

export const projects: Project[] = [
  {
    slug: "support-saas",
    name: "Support SaaS — AI Support Platform",
    year: "2026",
    flagship: true,
    oneLiner:
      "A multi-tenant, cloud-native AI support platform with org-isolated knowledge bases, a RAG pipeline, and a Java semantic cache in front of the LLM.",
    stack: [
      "Next.js",
      "Express",
      "TypeScript",
      "FastAPI",
      "Java 21",
      "Spring Boot",
      "AWS",
      "Terraform",
      "Redis",
      "Qdrant",
      "Kafka",
    ],
    githubUrl: "https://github.com/Suraj854204/Support-Saas",
    overview: [
      "Support SaaS is a multi-tenant AI support platform built with Next.js, Express/TypeScript, and FastAPI, secured with JWT/RBAC and organization-isolated knowledge bases, following an API-first, domain-driven microservices approach.",
      "Production infrastructure on AWS (ECS Fargate, RDS, ElastiCache, Elasticsearch/OpenSearch, MSK) is provisioned with Terraform, and deployed through GitHub Actions using OIDC. An automated API and AI-service test suite gates every pull request.",
      "Knowledge retrieval runs through a RAG pipeline (LangChain, LlamaIndex, Qdrant, embeddings, Gemini), backed by a Java 21 / Spring Boot semantic cache for scalability and low latency.",
    ],
    decisions: [
      {
        title: "Organization-isolated knowledge bases",
        body: "Retrieval is scoped per organization and requests go through tenant-aware validation, so one tenant's knowledge base is never searched on behalf of another.",
      },
      {
        title: "Semantic cache in front of the LLM",
        body: "A Java 21 / Spring Boot service combines an O(1) LRU, a Bloom filter, random-hyperplane LSH and cosine similarity on Redis with TTL eviction, to serve near-duplicate questions without another LLM call.",
      },
      {
        title: "Cache-aside with graceful fallback",
        body: "The cache sits beside the request path rather than in it: if it is unavailable, the platform falls back to the normal retrieval and generation flow.",
      },
      {
        title: "Everything as code",
        body: "AWS infrastructure is defined in Terraform and shipped via GitHub Actions OIDC deploys, which keeps IaC and CI/CD reviewable and repeatable.",
      },
    ],
    challenges: [
      "Keeping tenants strictly isolated across the API, the vector store, and the cache.",
      "Cutting latency and LLM cost without sacrificing answer quality, using a semantic cache.",
      "Making the system observable: hits, misses, latency, evictions, and LLM requests avoided are all tracked as metrics.",
      "Gating every PR with an automated API and AI-service test suite across a polyglot stack (TypeScript, Python, Java).",
    ],
    diagram: [
      { label: "Client", nodes: [{ name: "Next.js app", note: "Support dashboard" }] },
      { label: "API", nodes: [{ name: "Express / TypeScript", note: "JWT · RBAC · org isolation" }] },
      {
        label: "AI services",
        nodes: [
          { name: "FastAPI RAG", note: "LangChain · LlamaIndex · Gemini" },
          { name: "Semantic cache", note: "Java 21 · Spring Boot · LRU · Bloom · LSH" },
        ],
      },
      {
        label: "Data",
        nodes: [
          { name: "RDS", note: "Relational data" },
          { name: "Qdrant", note: "Embeddings" },
          { name: "Redis", note: "ElastiCache · TTL" },
          { name: "OpenSearch", note: "Search" },
          { name: "Kafka", note: "MSK" },
        ],
      },
      { label: "Delivery", nodes: [{ name: "Terraform → ECS Fargate", note: "GitHub Actions OIDC · PR-gated tests" }] },
    ],
  },
  {
    slug: "nexthire",
    name: "NextHire — AI-Powered Job Portal",
    year: "2025",
    oneLiner:
      "A 5-service microservices job portal with JWT auth, Redis-backed token revocation, Kafka async processing, and four Gemini-powered career tools.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Kafka", "Gemini"],
    githubUrl: "https://github.com/Suraj854204/next-hire-job-portal",
    overview: [
      "NextHire is a 5-service microservices platform (Auth, User, Job, Payment, Utils) with JWT authentication, Redis-backed token revocation, and Kafka-based asynchronous processing for scalability and maintainability.",
      "It ships four AI career tools built on the Gemini API — Resume Builder, Resume Analyzer, ATS Score Checker, and Career Guidance — alongside recruiter subscriptions, payments, and role-based access control through REST APIs.",
    ],
    decisions: [
      {
        title: "Five focused services",
        body: "Auth, User, Job, Payment and Utils each own one concern, which keeps each service small and independently maintainable.",
      },
      {
        title: "Redis-backed token revocation",
        body: "JWTs alone cannot be revoked, so Redis tracks revoked tokens and lets the platform end a session before the token would otherwise expire.",
      },
      {
        title: "Asynchronous work through Kafka",
        body: "Slow or non-critical work is handed to Kafka instead of blocking the request that triggered it.",
      },
      {
        title: "PostgreSQL (NeonDB) with Redis caching",
        body: "Durable data lives in PostgreSQL on NeonDB, with Redis caching in front of hot reads.",
      },
    ],
    challenges: [
      "Designing clean service boundaries across Auth, User, Job, Payment and Utils.",
      "Revoking JWT sessions reliably across services.",
      "Moving background work onto Kafka without complicating the request path.",
      "Applying role-based access control consistently across candidates and recruiters.",
    ],
    diagram: [
      { label: "Client", nodes: [{ name: "Next.js app", note: "Candidates & recruiters" }] },
      {
        label: "Services",
        nodes: [
          { name: "Auth", note: "JWT" },
          { name: "User" },
          { name: "Job" },
          { name: "Payment", note: "Subscriptions" },
          { name: "Utils", note: "Async jobs" },
        ],
      },
      { label: "AI tools", nodes: [{ name: "Gemini API", note: "Resume Builder · Analyzer · ATS · Career Guidance" }] },
      {
        label: "Data & messaging",
        nodes: [
          { name: "PostgreSQL", note: "NeonDB" },
          { name: "Redis", note: "Token revocation · cache" },
          { name: "Kafka", note: "Async processing" },
        ],
      },
    ],
  },
  {
    slug: "coderx",
    name: "CoderX — Private On-Device AI Code Review",
    year: "2026",
    oneLiner:
      "An AI code reviewer for the Snapdragon® Multiverse Hackathon that runs Qwen3-4B entirely on a Snapdragon NPU — no source code ever leaves the machine.",
    stack: [
      "Python",
      "FastAPI",
      "React Native",
      "Qwen3-4B",
      "Snapdragon NPU",
      "GenieX",
      "SQLite",
      "WebSockets",
    ],
    githubUrl: "https://github.com/Suraj854204/Snapdragon-CoderX",
    overview: [
      "CoderX is an on-device AI code reviewer built for the Snapdragon® Multiverse Hackathon. It runs a Qwen3-4B model entirely on a Snapdragon NPU through GenieX, so source code never leaves the developer's machine.",
      "Git post-commit hooks and HMAC-verified GitHub PR webhooks trigger a FastAPI backend, which streams live findings over WebSockets to a React Native (Expo) mobile triage app with a human-in-the-loop reiteration flow and offline PDF/JSON audit reports.",
    ],
    decisions: [
      {
        title: "Privacy by construction",
        body: "Inference runs on the local NPU, so no code is sent to a cloud model — privacy is a property of the architecture, not a policy.",
      },
      {
        title: "Risk-aware routing",
        body: "Each Git diff hunk is classified as critical, standard or trivial before it reaches the NPU, so effort goes where it matters.",
      },
      {
        title: "Incremental review cache",
        body: "A SQLite cache keyed on normalized diff hashes skips re-reviewing code that has not meaningfully changed.",
      },
      {
        title: "Verified webhooks, live feedback",
        body: "GitHub PR webhooks are HMAC-verified, and findings stream over WebSockets to the mobile app as they are produced.",
      },
    ],
    challenges: [
      "Running a 4B-parameter model entirely on a Snapdragon NPU via GenieX.",
      "Deciding how much review each diff hunk deserves before spending NPU time on it.",
      "Avoiding redundant reviews with a cache keyed on normalized diffs.",
      "Keeping a human in the loop, with a reiteration flow and offline PDF/JSON audit reports.",
    ],
    diagram: [
      {
        label: "Triggers",
        nodes: [
          { name: "Git post-commit hook" },
          { name: "GitHub PR webhook", note: "HMAC-verified" },
        ],
      },
      { label: "Backend", nodes: [{ name: "FastAPI", note: "Orchestration" }] },
      {
        label: "Review engine",
        nodes: [
          { name: "Risk router", note: "critical · standard · trivial" },
          { name: "SQLite cache", note: "Normalized diff hashes" },
          { name: "Qwen3-4B on Snapdragon NPU", note: "GenieX · fully on-device" },
        ],
      },
      { label: "Delivery", nodes: [{ name: "WebSockets", note: "Live findings" }] },
      {
        label: "Mobile app",
        nodes: [{ name: "React Native (Expo)", note: "Human-in-the-loop triage · offline PDF/JSON reports" }],
      },
    ],
  },
];

export const experience = [
  {
    org: "Labmentix",
    role: "Web Development Intern",
    location: "Remote",
    date: "Aug 2025 – Nov 2025",
    bullets: [
      "Developed and deployed a responsive, mobile-first landing page (grinning.vercel.app) using reusable Next.js/React components and Tailwind CSS, participating in Agile sprint ceremonies and peer code reviews.",
      "Implemented responsive layouts, navigation, product sections, and CTA flows while independently handling component development and cross-device testing.",
    ],
  },
];

export const education = [
  {
    school: "Ambalika Institute of Management and Technology",
    place: "Lucknow",
    degree: "B.Tech in Computer Science and Engineering",
    date: "Jul 2023 – Jul 2027 (Expected)",
    note: "CGPA 7.2",
  },
];

export const skills = [
  { category: "Languages", items: ["Java", "JavaScript", "TypeScript", "Python", "C#", "SQL"] },
  {
    category: "CS Fundamentals",
    items: [
      "Data Structures",
      "Algorithms",
      "Design Patterns",
      "OOP",
      "Trees",
      "Graphs",
      "Dynamic Programming",
      "Heaps",
      "Hashing",
    ],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "React Native", "Tailwind CSS", "HTML", "CSS", "Responsive & Accessible UI"],
  },
  {
    category: "Backend",
    items: [
      "Spring Boot",
      "J2EE / Java EE",
      ".NET",
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "Microservices",
      "API-First Design",
      "JWT",
      "Prisma",
    ],
  },
  {
    category: "Databases & Search",
    items: ["PostgreSQL", "MongoDB", "Redis", "SQLite", "Qdrant", "Elasticsearch / OpenSearch"],
  },
  {
    category: "AI / GenAI",
    items: [
      "LangChain",
      "LlamaIndex",
      "RAG",
      "Embeddings",
      "Gemini API",
      "Qwen",
      "On-Device / Edge AI",
      "Vector Search",
      "AI Agents",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (ECS Fargate, RDS, ElastiCache, MSK)",
      "Terraform",
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub Actions",
      "CI/CD",
      "IaC",
      "Agile/Scrum",
      "System Design",
    ],
  },
];

export const achievements = [
  "ICPC 2026 Online Challenge 1 powered by Huawei (Codeforces #2251) — Global Rank 1025.",
  "Competitive programming: Codeforces rating 1200, CodeChef DSA rating 1573, and LeetCode Contest Global Rank 874 among 27,000+ participants.",
  "2,000+ DSA problems solved across LeetCode, Codeforces, CodeChef, and GeeksforGeeks.",
  "Naukri Campus Codequezt #31 — ranked #441 among 14,000+ participants nationwide.",
  "Pardis Technology Olympics 2026 — ranked #45 among 1,065 competitors in the Algorithm Track Online Qualifier (Pardis Technology Park, Tehran).",
  "Naukri Campus Young Turks 2025 — 96.83 percentile in the national technical assessment; top 10% of institute for coding and leadership.",
  "3rd place in a college hackathon for an Image-Provenance Utility using cryptographic signatures.",
  "Organized coding and technical events with 100–200+ participants as Unstop Campus Ambassador and event lead.",
];

// Snapshot of public profile pages (fetched Oct 2026). Numbers are static —
// update them here when you want the site to show newer values.
export const codingProfiles = [
  {
    platform: "LeetCode",
    handle: "CodeSurajX",
    href: profile.leetcode,
    highlight: "921",
    highlightLabel: "problems solved",
    details: ["6 badges · incl. 365 Days Badge"],
  },
  {
    platform: "CodeChef",
    handle: "codersurajx",
    href: profile.codechef,
    highlight: "400",
    highlightLabel: "problems solved",
    details: ["DSA rating 1573 (peak)", "1★ · 10 rated contests"],
  },
  {
    platform: "GeeksforGeeks",
    handle: "surajsingh01",
    href: profile.geeksforgeeks,
    highlight: "GfG",
    highlightLabel: "practice profile",
    details: ["AIMT Lucknow"],
  },
  {
    platform: "GitHub",
    handle: "Suraj854204",
    href: profile.github,
    highlight: "23",
    highlightLabel: "public repositories",
    details: ["Backend-focused full-stack", "Pinned: Support-Saas, CoderX"],
  },
];
