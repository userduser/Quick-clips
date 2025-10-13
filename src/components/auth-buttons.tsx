"use client";

import { Button } from "./ui/button";
import { useAuthModal } from "~/hooks/use-auth-modal";

export function AuthButtons() {
  const { openLogin, openSignup } = useAuthModal();

  return (
    <>
      <Button onClick={openLogin} className="btn-ghost">
        Sign In
      </Button>
      <Button onClick={openSignup} className="btn-primary">
        Get Started
      </Button>
    </>
  );
}