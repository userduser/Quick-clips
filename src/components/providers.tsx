"use client";

import { SessionProvider } from "next-auth/react";
import { AuthModalProvider } from "~/components/auth/auth-modal-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {children}
      <AuthModalProvider />
    </SessionProvider>
  );
}
