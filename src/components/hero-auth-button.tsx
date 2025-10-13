"use client";

import { Button } from "./ui/button";
import { useAuthModal } from "~/hooks/use-auth-modal";

export function HeroAuthButton() {
  const { openSignup } = useAuthModal();

  return (
    <Button onClick={openSignup} className="btn-primary btn-lg">
      Start Creating Clips
    </Button>
  );
}