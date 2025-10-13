"use client";

import { useAuthModal } from "~/hooks/use-auth-modal";
import { LoginModal } from "./login-modal";
import { SignupModal } from "./signup-modal";
import { LogoutModal } from "./logout-modal";

export function AuthModalProvider() {
  const { activeModal } = useAuthModal();

  if (!activeModal) return null;

  return (
    <>
      {activeModal === "login" && <LoginModal />}
      {activeModal === "signup" && <SignupModal />}
      {activeModal === "logout" && <LogoutModal />}
    </>
  );
}