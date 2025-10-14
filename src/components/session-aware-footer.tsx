"use client";

import { Footer } from "~/components/footer";

export function SessionAwareFooter() {
  // For now, hide Dashboard link until user logs in
  // TODO: Implement proper auth check when backend auth is integrated
  return <Footer showDashboard={false} />;
}
