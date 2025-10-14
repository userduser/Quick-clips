"use client";

import { AuthModalProvider } from "~/components/auth/auth-modal-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <AuthModalProvider />
    </>
  );
}
