"use client";

import "~/styles/globals.css";
import { Geist } from "next/font/google";
import { AuthModalProvider } from "~/components/auth/auth-modal-provider";
import { SessionProvider } from "next-auth/react";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <SessionProvider>
          {children}
          <AuthModalProvider />
        </SessionProvider>
      </body>
    </html>
  );
}