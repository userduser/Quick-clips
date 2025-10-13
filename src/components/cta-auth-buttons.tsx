"use client";

import { Button } from "./ui/button";
import { useAuthModal } from "~/hooks/use-auth-modal";

export function CTAAuthButtons() {
  const { openSignup, openLogin } = useAuthModal();

  return (
    <>
      <Button onClick={openSignup} className="btn-primary btn-lg">
        Start Your Free Trial
      </Button>
      <Button onClick={openLogin} className="btn-secondary btn-lg">
        Sign In to Dashboard
      </Button>
    </>
  );
}