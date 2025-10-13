"use client";

import { Button } from "./ui/button";
import { useAuthModal } from "~/hooks/use-auth-modal";

export function PageAuthButtons() {
  const { openLogin, openSignup } = useAuthModal();

  return (
    <div className="flex items-center gap-3">
      <Button onClick={openLogin} className="btn-ghost">
        Sign In
      </Button>
      <Button onClick={openSignup} className="btn-primary">
        Get Started
      </Button>
    </div>
  );
}