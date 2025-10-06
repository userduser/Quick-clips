import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import QuickClipsLogo from "~/components/logo";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <QuickClipsLogo />
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground">
              About
            </Link>
            <Link href="/affiliate" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Affiliate
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost">
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            About <span className="text-primary">Quick Clips</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            We're on a mission to democratize content creation by making viral clip generation accessible to everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Content creators spend countless hours manually editing long-form videos into short clips for social media. 
                We believe this time could be better spent creating amazing content.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Quick Clips uses advanced AI to automate the entire process - from identifying the most engaging moments 
                to creating perfectly formatted clips with captions. What used to take hours now takes minutes.
              </p>
              <p className="text-lg text-muted-foreground">
                We're empowering creators, educators, podcasters, and businesses to reach wider audiences 
                across all social media platforms without the technical complexity.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 mb-6 glass-card glow-orange animate-float">
                <svg className="w-16 h-16 text-primary animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Accelerating Creator Success</h3>
              <p className="text-muted-foreground">
                Helping content creators focus on what they do best - creating amazing content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Trusted by Creators Worldwide
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of content creators who are scaling their reach with Quick Clips
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <p className="text-muted-foreground">Videos Processed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <p className="text-muted-foreground">Active Creators</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1M+</div>
              <p className="text-muted-foreground">Clips Generated</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-muted-foreground">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border/50 bg-card/50">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <CardTitle>Speed & Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  We believe your time is valuable. Our AI processes videos in minutes, not hours, 
                  so you can focus on creating more content.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 bg-card/50">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <CardTitle>Quality First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Every clip generated meets professional standards with perfect framing, 
                  accurate captions, and platform-optimized formatting.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 bg-card/50">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">🌍</div>
                <CardTitle>Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Professional video editing should be accessible to everyone, regardless of 
                  technical expertise or budget constraints.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Built by Creators, for Creators
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our team combines deep expertise in AI, video processing, and content creation 
              to build the best possible experience for creators.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Founded in 2024, Quick Clips emerged from our own frustration with time-consuming video editing workflows. 
              As content creators ourselves, we knew there had to be a better way.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, we're proud to serve a global community of creators, helping them amplify their reach 
              and grow their audiences across all social media platforms.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already scaling their reach with Quick Clips.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <Link href="/signup">Start Your Free Trial</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/20">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <QuickClipsLogo />
              <p className="text-sm text-muted-foreground max-w-xs">
                Transform your long-form content into viral social media clips with AI-powered precision.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#features" className="text-muted-foreground hover:text-foreground">Features</Link></li>
                <li><Link href="/#pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
                <li><Link href="/dashboard" className="text-muted-foreground hover:text-foreground">Dashboard</Link></li>
                <li><Link href="/api" className="text-muted-foreground hover:text-foreground">API</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
                <li><Link href="/affiliate" className="text-muted-foreground hover:text-foreground">Affiliate Program</Link></li>
                <li><Link href="/careers" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
                <li><Link href="/security" className="text-muted-foreground hover:text-foreground">Security</Link></li>
                <li><Link href="/cookies" className="text-muted-foreground hover:text-foreground">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/40 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Quick Clips. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link href="https://twitter.com/quickclips" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter</span>
                𝕏
              </Link>
              <Link href="https://youtube.com/@quickclips" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">YouTube</span>
                📺
              </Link>
              <Link href="https://linkedin.com/company/quickclips" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">LinkedIn</span>
                💼
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}