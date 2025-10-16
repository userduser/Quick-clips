"use client";

import Link from "next/link";
import QuickClipsLogo from "~/components/logo";
import { MobileLogo } from "~/components/mobile-logo";
import { ScrollReveal } from "~/components/scroll-reveal";
import { AuthButtons } from "~/components/auth-buttons";
import { MobileNav } from "~/components/mobile-nav";

export function PageHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 glass-card shadow-glow">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Desktop Logo */}
        <div className="hidden md:block">
          <ScrollReveal direction="left">
            <QuickClipsLogo />
          </ScrollReveal>
        </div>
        
        {/* Mobile Logo (Q only) */}
        <MobileLogo />
        
        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center space-x-6 left-1/2 -translate-x-1/2 absolute">
          <ScrollReveal direction="up" delay={100}>
            <Link href="/#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300">
              Features
            </Link>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={150}>
            <Link href="/#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300">
              Pricing
            </Link>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300">
              About
            </Link>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={250}>
            <Link href="/affiliate" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300">
              Affiliate
            </Link>
          </ScrollReveal>
        </nav>
        
        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <ScrollReveal direction="right" delay={100}>
            <AuthButtons />
          </ScrollReveal>
        </div>
        
        {/* Mobile Hamburger Menu */}
        <MobileNav />
      </div>
    </header>
  );
}
