"use client";

import { useSession } from "next-auth/react";
import { Footer } from "~/components/footer";

export function SessionAwareFooter() {
  const { data: session } = useSession();
  
  return <Footer showDashboard={!!session} />;
}
