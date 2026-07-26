import type { Metadata } from "next";
import "./globals.css";

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Timileyin Agbaje",
  jobTitle: "Software Engineer",
  sameAs: [
    "https://github.com/Timileyin-Agbaje",
    "https://x.com/timileyinagba",
    "https://www.linkedin.com/in/timileyin-agbaje-1b6200396?",
  ],
};

export const metadata: Metadata = {
  metadataBase: new
    URL("https://timiagba.tech/"),
  title: {
    default: "Timileyin Agbaje",
    template: "%s | Timileyin Agbaje"
  },
  description: "Personal Website of Timileyin Agbaje",

  keywords: [
    "Timileyin Agbaje",
    "Personal Website",
    "Portfolio",
    "Software Engineer",
    "AI Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Vercel",
    "Applied AI Engineer",
    "AI Agents"
  ],
  authors: [{ name: "Timileyin Agbaje" }],
  creator: "Timileyin Agbaje",
  publisher: "Timileyin Agbaje",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Timileyin Agbaje",
    description: "Personal Website of Timileyin Agbaje",
    url: "https://timiagba.tech/",
    siteName: "Timileyin Agbaje",
    images: [
      {
        url: "img/og-image.png",
        width: 1200,
        height: 630,
        alt: "Timileyin's Website"
      },
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Timileyin Agbaje",
    description: "Personal Website of Timileyin Agbaje",
    creator: "@timileyinagba",
    images: ["img/og-image.png"]
  },

  alternates: {
    canonical: "/"
  },

  icons: {
    icon: "favicon.ico"
  },

  manifest: "/site.webmanifest",

  category: "technology"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
        {children}</body>
    </html>
  );
}
