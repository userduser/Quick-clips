import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Providers } from "~/components/providers";

export const metadata: Metadata = {
  title: "Quick Clips - AI Video Clipper",
  description: "Turn long videos into viral clips in minutes with AI. Smart framing, auto-captions, and ready-to-post content for social media.",
  keywords: "AI video clipper, video editing, social media clips, auto-captions, viral clips, video repurposing",
  authors: [{ name: "Quick Clips" }],
  metadataBase: new URL("https://quickclips.pro"),
  openGraph: {
    title: "Quick Clips - AI Video Clipper",
    description: "Turn long videos into viral clips in minutes with AI",
    url: "https://quickclips.pro",
    siteName: "Quick Clips",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quick Clips - AI Video Clipper",
    description: "Turn long videos into viral clips in minutes with AI",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: [
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    { rel: "shortcut icon", url: "/favicon.svg" }
  ],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} overflow-x-hidden`}>
      <body className="min-h-screen bg-background font-sans antialiased overflow-x-hidden">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}