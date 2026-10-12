import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile, siteUrl } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.headline}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.about[0],
  keywords: [
    "Suraj Kumar Singh",
    "Full Stack Engineer",
    "Backend Engineer",
    "Node.js Developer",
    "FastAPI",
    "RAG",
    "Applied AI Engineer",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — ${profile.headline}`,
    description: profile.about[0],
    siteName: `${profile.name} Portfolio`,
    images: [{ url: profile.photo, width: 800, height: 1084, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.headline}`,
    description: profile.about[0],
    images: [profile.photo],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Phones: proper scaling + notch-safe area + browser chrome colour.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: profile.headline,
  email: profile.email,
  sameAs: [profile.github, profile.linkedin, profile.leetcode, profile.codechef, profile.geeksforgeeks],
  image: `${siteUrl}${profile.photo}`,
};

// Inline script to set the theme class before hydration — avoids a flash of the wrong theme.
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || 'dark';
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* pb on phones = room for the bottom dock */}
      <body className="flex min-h-screen flex-col pb-[calc(4.25rem+env(safe-area-inset-bottom))] antialiased md:pb-0">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
