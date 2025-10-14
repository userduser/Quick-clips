"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import QuickClipsLogo from "~/components/logo";
import { Badge } from "~/components/ui/badge";
import { ScrollReveal } from "~/components/scroll-reveal";
import { AuthButtons } from "~/components/auth-buttons";
import { HeroAuthButton } from "~/components/hero-auth-button";
import { CTAAuthButtons } from "~/components/cta-auth-buttons";
import { PricingToggle } from "~/components/pricing-toggle";
import { EnhancedPriceDisplay } from "~/components/enhanced-price-display";
import { usePricingToggle } from "~/hooks/use-pricing-toggle";
import { SessionAwareFooter } from "~/components/session-aware-footer";

const subscriptionPlans = [
  {
    title: "Essential",
    price: "$9",
    yearlyPrice: "$90",
    description: "Perfect for content creators getting started",
    features: [
      "10 video uploads per month",
      "Up to 100 clips generated", 
      "AI-powered clip generation", 
      "Auto-captions and subtitles",
      "720p video exports",
      "Basic analytics",
      "Email support"
    ],
    buttonText: "Start Essential",
    isPopular: false,
    maxVideos: "10 videos • 100 clips/month",
  },
  {
    title: "Premium", 
    price: "$29",
    yearlyPrice: "$290",
    description: "Most popular for regular creators and teams",
    features: [
      "50 video uploads per month",
      "Up to 500 clips generated",
      "Advanced AI clip selection",
      "Custom branding and watermarks", 
      "1080p video exports",
      "Advanced analytics dashboard",
      "Priority support",
      "Bulk export tools"
    ],
    buttonText: "Start Premium",
    isPopular: true,
    maxVideos: "50 videos • 500 clips/month",
  },
  {
    title: "Enterprise",
    price: "Custom", 
    yearlyPrice: "Contact us",
    description: "For agencies, studios, and large teams",
    features: [
      "Unlimited video uploads",
      "Unlimited clips generated",
      "White-label solution",
      "API access for integrations",
      "4K video exports", 
      "Team collaboration tools",
      "Dedicated account manager",
      "Custom integrations"
    ],
    buttonText: "Contact Sales",
    isPopular: false,
    maxVideos: "Unlimited videos & clips",
  },
];

const features = [
  {
    title: "AI-Powered Clip Detection",
    description: "Our advanced AI analyzes your long-form content to identify the most engaging moments automatically.",
    icon: (
      <div className="transition-transform duration-500 hover:scale-110">
        <svg className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014.846 17H9.154a3.374 3.374 0 00-1.849-.547l-.548-.547z" />
        </svg>
      </div>
    )
  },
  {
    title: "Smart Framing & Cropping", 
    description: "Automatically crops videos to focus on speakers with perfect 9:16 vertical framing for social media.",
    icon: (
      <div className="transition-transform duration-500 hover:scale-110">
        <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      </div>
    )
  },
  {
    title: "Auto-Generated Captions",
    description: "Accurate subtitles are generated and styled automatically, making your content accessible and engaging.",
    icon: (
      <div className="transition-transform duration-500 hover:scale-110">
        <svg className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      </div>
    )
  },
  {
    title: "Multi-Platform Export",
    description: "Export optimized clips for YouTube Shorts, TikTok, Instagram Reels, and other social platforms.",
    icon: (
      <div className="transition-transform duration-500 hover:scale-110">
        <svg className="w-8 h-8 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      </div>
    )
  },
  {
    title: "Lightning Fast Processing",
    description: "Upload multiple videos and let our AI create dozens of clips simultaneously to save you hours.",
    icon: (
      <div className="transition-transform duration-500 hover:scale-110">
        <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
    )
  },
  {
    title: "Brand Customization",
    description: "Add your logos, custom colors, and branding elements to maintain consistent visual identity.",
    icon: (
      <div className="transition-transform duration-500 hover:scale-110">
        <svg className="w-8 h-8 animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h2a4 4 0 004-4V5z" />
        </svg>
      </div>
    )
  }
];

export default function HomePage() {
  const { isAnnual, isAnimating, togglePricing, getBillingInfo } = usePricingToggle();
  
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/40 glass-card shadow-glow">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <ScrollReveal direction="left">
            <QuickClipsLogo />
          </ScrollReveal>
          <nav className="hidden md:flex items-center space-x-6 left-1/2 -translate-x-1/2 absolute">
            <ScrollReveal direction="up" delay={100}>
              <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300">
                Features
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={150}>
              <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300">
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
          <div className="flex items-center gap-3">
            <ScrollReveal direction="right" delay={100}>
              <AuthButtons />
            </ScrollReveal>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/10 to-primary/5">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-2xl animate-float"></div>
        
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal direction="up">
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20 shadow-glow animate-glow glass-card">
                <svg className="w-4 h-4 mr-1 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                AI-Powered Video Clipper
              </Badge>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={200}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                Turn Long Videos Into{" "}
                <span className="bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent">
                  Viral Clips
                </span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={400}>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                No credits, no confusion. Simple subscription plans that tell you exactly how many videos and clips you can create. 
                AI transcribes, finds engaging moments, and auto-crops to perfection.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={600}>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <HeroAuthButton />
                <Button asChild className="btn-secondary btn-lg">
                  <Link href="#features">See How It Works</Link>
                </Button>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="fade" delay={800}>
              <p className="mt-4 text-sm text-muted-foreground">
                No credit card required • 7-day free trial • Cancel anytime
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative bg-gradient-to-b from-background via-primary/[0.02] to-muted/10">
        {/* Enhanced Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/10"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/8 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/[0.03] to-transparent rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-bounce opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary/15 rounded-full blur-lg animate-float opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Everything You Need To Create
                <span className="text-primary"> Viral Content</span>
              </h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
                Powerful AI tools that transform your long-form content into engaging social media clips
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <ScrollReveal 
                key={index} 
                direction={index % 2 === 0 ? "left" : "right"} 
                delay={index * 100}
              >
                <Card className="glass-card glass-card-hover shadow-card h-full">
                  <CardHeader>
                    <div className="text-primary mb-4">{feature.icon}</div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 glass-card shadow-card">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Simple 3-Step Process
              </h2>
              <p className="mt-4 text-xl text-muted-foreground">
                From upload to viral clips in minutes
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <ScrollReveal direction="left" delay={0}>
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-orange text-black text-2xl font-bold shadow-glow animate-float gradient-border">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Upload Your Video</h3>
                <p className="text-muted-foreground">
                  Upload your long-form video content. We support all major video formats and sizes up to your plan limit.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={200}>
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-orange text-black text-2xl font-bold shadow-glow animate-float gradient-border" style={{ animationDelay: '2s' }}>
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Analyzes & Clips</h3>
                <p className="text-muted-foreground">
                  Our AI identifies the most engaging moments and creates multiple short clips with captions automatically.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={400}>
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-orange text-black text-2xl font-bold shadow-glow animate-float gradient-border" style={{ animationDelay: '4s' }}>
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Download & Share</h3>
                <p className="text-muted-foreground">
                  Download your clips and share them across all social media platforms instantly. No limits on downloads.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Simple <span className="text-primary">Pricing</span>
              </h2>
              <p className="mt-4 text-xl text-muted-foreground">
                No credits, no confusion. Choose your plan and know exactly what you get.
              </p>
              <div className="mt-6 p-4 glass-card inline-block rounded-lg shadow-card">
                <p className="text-sm text-muted-foreground">
                  <span className="text-primary font-semibold">✓ No credit system</span> • 
                  <span className="text-primary font-semibold">✓ Clear video & clip limits</span> • 
                  <span className="text-primary font-semibold">✓ Instant activation</span>
                </p>
              </div>
              
              {/* Pricing Toggle */}
              <div className="mt-8">
                <PricingToggle 
                  isAnnual={isAnnual} 
                  onToggle={togglePricing}
                />
              </div>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {subscriptionPlans.map((plan, index) => (
              <ScrollReveal 
                key={index} 
                direction={index === 0 ? "left" : index === 2 ? "right" : "up"} 
                delay={index * 150}
              >
                <Card
                  className={`relative glass-card glass-card-hover shadow-card h-full ${
                    plan.isPopular 
                      ? "border-primary shadow-glow gradient-border" 
                      : "border-border/50"
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
                      <Badge className="bg-primary text-primary-foreground shadow-glow animate-glow">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.title}</CardTitle>
                    <div className="mt-4">
                      {plan.price === "Custom" ? (
                        <span className="text-4xl font-bold">Custom</span>
                      ) : (
                        <>
                          <EnhancedPriceDisplay 
                            monthlyPrice={plan.price}
                            yearlyPrice={plan.yearlyPrice}
                            isAnnual={isAnnual}
                            isAnimating={isAnimating}
                            className=""
                          />
                          <span className="text-muted-foreground">/month</span>
                        </>
                      )}
                    </div>
                    {plan.price !== "Custom" && (
                      <div className={`text-sm transition-all duration-300 ${
                        isAnnual ? 'text-primary' : 'text-muted-foreground'
                      }`}>
                        {getBillingInfo()}
                        {isAnnual && (
                          <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary animate-pulse">
                            Save 25%
                          </span>
                        )}
                      </div>
                    )}
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="font-medium text-sm text-primary bg-primary/10 p-2 rounded-lg text-center shadow-card">
                      {plan.maxVideos}
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm">
                          <svg className="text-primary mr-2 mt-0.5 w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <PricingButton 
                      plan={plan}
                      className={plan.isPopular ? "btn-primary" : "btn-secondary"} 
                    />
                  </CardFooter>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal direction="up" delay={600}>
            <div className="text-center mt-12">
              <p className="text-sm text-muted-foreground mb-4">
                All plans include 7-day free trial • No setup fees • Cancel anytime
              </p>
              <Link href="/contact" className="text-primary hover:underline glass-card-hover p-2 rounded-lg inline-block shadow-card">
                Need a custom plan? Contact us →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 glass-card shadow-glow">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal direction="up">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
                Ready to Create Viral Content?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of content creators who are already using Quick Clips to grow their audience.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <CTAAuthButtons />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <SessionAwareFooter />
    </main>
  );
}