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
      <div className="animate-pulse">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014.846 17H9.154a3.374 3.374 0 00-1.849-.547l-.548-.547z" />
        </svg>
      </div>
    )
  },
  {
    title: "Smart Framing & Cropping", 
    description: "Automatically crops videos to focus on speakers with perfect 9:16 vertical framing for social media.",
    icon: (
      <div className="animate-bounce">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      </div>
    )
  },
  {
    title: "Auto-Generated Captions",
    description: "Accurate subtitles are generated and styled automatically, making your content accessible and engaging.",
    icon: (
      <div className="animate-pulse">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      </div>
    )
  },
  {
    title: "Multi-Platform Export",
    description: "Export optimized clips for YouTube Shorts, TikTok, Instagram Reels, and other social platforms.",
    icon: (
      <div className="animate-spin-slow">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      </div>
    )
  },
  {
    title: "Lightning Fast Processing",
    description: "Upload multiple videos and let our AI create dozens of clips simultaneously to save you hours.",
    icon: (
      <div className="animate-bounce">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
    )
  },
  {
    title: "Brand Customization",
    description: "Add your logos, custom colors, and branding elements to maintain consistent visual identity.",
    icon: (
      <div className="animate-float">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h2a4 4 0 004-4V5z" />
        </svg>
      </div>
    )
  }
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/40 glass-card shadow-glow">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <ScrollReveal direction="left">
            <QuickClipsLogo />
          </ScrollReveal>
          <nav className="hidden md:flex items-center space-x-6">
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
              <Button asChild variant="ghost" className="hover:glow-orange transition-all duration-300">
                <Link href="/login">Sign In</Link>
              </Button>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <Button asChild className="shadow-glow hover:shadow-card transition-all duration-300 gradient-border">
                <Link href="/signup">Get Started</Link>
              </Button>
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
                <span className="bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent shadow-glow">
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
                <Button asChild size="lg" className="h-12 px-8 text-base shadow-glow hover:shadow-card transition-all duration-300 animate-float gradient-border">
                  <Link href="/signup">Start Creating Clips</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base glass-card-hover shadow-card">
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
      <section id="features" className="py-20 relative bg-gradient-to-b from-background to-muted/5">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/10"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/8 rounded-full blur-2xl animate-float"></div>
        
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
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold shadow-glow animate-float gradient-border">
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
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold shadow-glow animate-float gradient-border" style={{ animationDelay: '2s' }}>
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
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold shadow-glow animate-float gradient-border" style={{ animationDelay: '4s' }}>
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
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                    </div>
                    {plan.yearlyPrice !== "Contact us" && (
                      <div className="text-sm text-muted-foreground">
                        or {plan.yearlyPrice}/year <span className="text-primary font-medium">(Save 25%)</span>
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
                    <Button 
                      asChild 
                      className={`w-full transition-all duration-300 ${
                        plan.isPopular 
                          ? "shadow-glow hover:shadow-card gradient-border" 
                          : "glass-card-hover shadow-card"
                      }`}
                      variant={plan.isPopular ? "default" : "outline"}
                    >
                      {plan.title === "Enterprise" ? (
                        <Link href="/contact">{plan.buttonText}</Link>
                      ) : (
                        <Link href="/signup">{plan.buttonText}</Link>
                      )}
                    </Button>
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
                <Button asChild size="lg" className="h-12 px-8 text-base shadow-glow hover:shadow-card animate-float gradient-border">
                  <Link href="/signup">Start Your Free Trial</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base glass-card-hover shadow-card">
                  <Link href="/login">Sign In to Dashboard</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 glass-card shadow-card">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <ScrollReveal direction="left">
              <div className="space-y-4">
                <QuickClipsLogo />
                <p className="text-sm text-muted-foreground max-w-xs">
                  Transform your long-form content into viral social media clips with AI-powered precision.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={100}>
              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
                  <li><Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
                  <li><Link href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">Dashboard</Link></li>
                  <li><Link href="/api" className="text-muted-foreground hover:text-primary transition-colors">API</Link></li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={200}>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
                  <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                  <li><Link href="/affiliate" className="text-muted-foreground hover:text-primary transition-colors">Affiliate Program</Link></li>
                  <li><Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={300}>
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                  <li><Link href="/security" className="text-muted-foreground hover:text-primary transition-colors">Security</Link></li>
                  <li><Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link></li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal direction="up" delay={400}>
            <div className="border-t border-border/40 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Quick Clips. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <Link href="https://twitter.com/quickclips" className="text-muted-foreground hover:text-primary transition-colors animate-float">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </Link>
                <Link href="https://youtube.com/@quickclips" className="text-muted-foreground hover:text-primary transition-colors animate-float" style={{ animationDelay: '2s' }}>
                  <span className="sr-only">YouTube</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </Link>
                <Link href="https://linkedin.com/company/quickclips" className="text-muted-foreground hover:text-primary transition-colors animate-float" style={{ animationDelay: '4s' }}>
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </main>
  );
}