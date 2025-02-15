import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "LLM Tokenize - Supercharge your codebase for LLM processing",
  description:
    "A powerful CLI tool to convert and tokenize codebases for LLM usage. Perfect for preparing your project for AI analysis!",
  authors: [{ name: "Shuvam Kumar", url: "https://github.com/shuvamk" }],
  keywords: [
    "LLM",
    "tokenize",
    "CLI",
    "code processing",
    "AI",
    "machine learning",
    "developer tools",
  ],
  creator: "Shuvam Kumar",
  publisher: "Shuvam Kumar",
  robots: "index, follow",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://llm-tokenize.vercel.app",
    title: "LLM Tokenize",
    description:
      "A powerful CLI tool to convert and tokenize codebases for LLM usage",
    siteName: "LLM Tokenize",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LLM Tokenize - Supercharge your codebase for LLM processing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LLM Tokenize",
    description:
      "A powerful CLI tool to convert and tokenize codebases for LLM usage",
    images: ["/og-image.png"],
    creator: "@shuvamk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
