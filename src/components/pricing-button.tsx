"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useAuthModal } from "~/hooks/use-auth-modal";

interface PricingButtonProps {
  plan: {
    title: string;
    buttonText: string;
  };
  className?: string;
}

export function PricingButton({ plan, className }: PricingButtonProps) {
  const { openSignup } = useAuthModal();

  if (plan.title === "Enterprise") {
    return (
      <Button asChild className={`${className} btn-full`}>
        <Link href="/contact">{plan.buttonText}</Link>
      </Button>
    );
  }

  return (
    <Button onClick={openSignup} className={`${className} btn-full`}>
      {plan.buttonText}
    </Button>
  );
}