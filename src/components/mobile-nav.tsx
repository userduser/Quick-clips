"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuthModal } from "~/hooks/use-auth-modal";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { onOpen } = useAuthModal();

  const handleAuthClick = () => {
    setIsOpen(false);
    onOpen("login");
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
        <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`
        fixed top-16 right-0 w-64 h-[calc(100vh-4rem)] bg-background/95 backdrop-blur-lg
        border-l border-border/40 shadow-2xl z-50 md:hidden
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}>
        <nav className="flex flex-col p-6 space-y-6">
          <Link 
            href="/#features" 
            className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Link 
            href="/#pricing" 
            className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link 
            href="/about" 
            className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/affiliate" 
            className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Affiliate
          </Link>
          
          <div className="pt-6 border-t border-border/40">
            <button
              onClick={handleAuthClick}
              className="w-full btn-primary text-center"
            >
              Sign In / Sign Up
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
