"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuthModal } from "~/hooks/use-auth-modal";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { openLogin, openSignup, openLogout } = useAuthModal();
  // For now, we'll just show sign in/up buttons
  // TODO: Implement proper auth check when backend auth is integrated
  const isLoggedIn = false;

  const handleSignIn = () => {
    setIsOpen(false);
    openLogin();
  };

  const handleSignUp = () => {
    setIsOpen(false);
    openSignup();
  };

  const handleLogout = () => {
    setIsOpen(false);
    openLogout();
  };

  return (
    <>
      {/* Styled Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2 relative"
        aria-label="Toggle menu"
      >
        {/* Top line - gradient */}
        <span 
          className={`w-6 h-0.5 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          style={{
            background: 'linear-gradient(90deg, #f56800 0%, #ff8c3a 100%)',
            boxShadow: '0 0 8px rgba(245, 104, 0, 0.6)'
          }}
        />
        {/* Middle line - transparent with orange border and glow */}
        <span 
          className={`w-6 h-0.5 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          style={{
            background: 'transparent',
            border: '1px solid #f56800',
            boxShadow: '0 0 10px rgba(245, 104, 0, 0.8), inset 0 0 10px rgba(245, 104, 0, 0.3)'
          }}
        />
        {/* Bottom line - gradient */}
        <span 
          className={`w-6 h-0.5 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          style={{
            background: 'linear-gradient(90deg, #f56800 0%, #ff8c3a 100%)',
            boxShadow: '0 0 8px rgba(245, 104, 0, 0.6)'
          }}
        />
      </button>

      {/* Mobile Menu - with blurred background */}
      <div className={`
        fixed top-16 right-0 w-64 h-[calc(100vh-4rem)] 
        border-l border-border/40 shadow-2xl z-50 md:hidden
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      style={{
        backgroundColor: 'rgba(18, 18, 18, 0.85)',
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)'
      }}
      >
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
          
          {/* Auth Buttons Section */}
          <div className="pt-6 border-t border-border/40 space-y-3">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="w-full btn-secondary text-center"
              >
                Log Out
              </button>
            ) : (
              <>
                <button
                  onClick={handleSignIn}
                  className="w-full btn-ghost text-center"
                >
                  Sign In
                </button>
                <button
                  onClick={handleSignUp}
                  className="w-full btn-primary text-center"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
