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

const subscriptionPlans = [
  {
    title: "Essential",
    price: "$9",
    yearlyPrice: "$90",
    description: "Perfect for content creators getting started",
    features: [
      "Up to 10 video uploads per month",
      "AI-powered clip generation", 
      "Auto-captions and subtitles",
      "720p video exports",
      "Basic analytics",
      "Email support"
    ],
    buttonText: "Start Essential",
    isPopular: false,
    maxVideos: "10 videos/month",
  },
  {
    title: "Premium", 
    price: "$29",
    yearlyPrice: "$290",
    description: "Best for regular content creators and small teams",
    features: [
      "Up to 50 video uploads per month",
      "Advanced AI clip selection",
      "Custom branding and watermarks", 
      "1080p video exports",
      "Advanced analytics dashboard",
      "Priority support",
      "Bulk export tools"
    ],
    buttonText: "Start Premium",
    isPopular: true,
    maxVideos: "50 videos/month",
  },
  {
    title: "Enterprise",
    price: "$99", 
    yearlyPrice: "$990",
    description: "For agencies, studios, and large teams",
    features: [
      "Unlimited video uploads",
      "White-label solution",
      "API access for integrations",
      "4K video exports", 
      "Team collaboration tools",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced security features"
    ],
    buttonText: "Start Enterprise",
    isPopular: false,
    maxVideos: "Unlimited videos",
  },
];

const features = [
  {
    title: "AI-Powered Clip Detection",
    description: "Our advanced AI analyzes your long-form content to identify the most engaging moments automatically.",
    icon: "🎯"
  },
  {
    title: "Smart Framing & Cropping", 
    description: "Automatically crops videos to focus on speakers with perfect 9:16 vertical framing for social media.",
    icon: "📱"
  },
  {
    title: "Auto-Generated Captions",
    description: "Accurate subtitles are generated and styled automatically, making your content accessible and engaging.",
    icon: "💬"
  },
  {
    title: "Multi-Platform Export",
    description: "Export optimized clips for YouTube Shorts, TikTok, Instagram Reels, and other social platforms.",
    icon: "🚀"
  },
  {
    title: "Batch Processing",
    description: "Upload multiple videos and let our AI create dozens of clips simultaneously to save you hours.",
    icon: "⚡"
  },
  {
    title: "Brand Customization",
    description: "Add your logos, custom colors, and branding elements to maintain consistent visual identity.",
    icon: "🎨"
  }
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <QuickClipsLogo />
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
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
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="mx-auto max-w-4xl">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              ✨ AI-Powered Video Clipper
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Turn Long Videos Into{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Viral Clips
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              AI transcribes, finds the most engaging moments, and auto-crops to the active speaker. 
              Export-ready vertical clips for all social platforms in minutes.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-8 text-base">
                <Link href="/signup">Start Creating Clips</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
                <Link href="#features">See How It Works</Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              No credit card required • Free trial available • Cancel anytime
            </p>
          </div>
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-transparent" />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Everything You Need To Create
              <span className="text-primary"> Viral Content</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful AI tools that transform your long-form content into engaging social media clips
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="text-4xl mb-2">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Simple 3-Step Process
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              From upload to viral clips in minutes
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Upload Your Video</h3>
              <p className="text-muted-foreground">
                Upload your long-form video content. We support all major video formats and sizes.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Analyzes & Clips</h3>
              <p className="text-muted-foreground">
                Our AI identifies the most engaging moments and creates multiple short clips with captions.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Download & Share</h3>
              <p className="text-muted-foreground">
                Download your clips and share them across all social media platforms instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Choose Your <span className="text-primary">Plan</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Flexible subscription plans that grow with your content creation needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {subscriptionPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.isPopular 
                    ? "border-primary shadow-lg shadow-primary/25" 
                    : "border-border/50"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    or {plan.yearlyPrice}/year <span className="text-primary font-medium">(Save 25%)</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="font-medium text-sm text-primary">
                    {plan.maxVideos}
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <span className="text-primary mr-2 mt-0.5">✓</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    asChild 
                    className="w-full" 
                    variant={plan.isPopular ? "default" : "outline"}
                  >
                    <Link href="/signup">{plan.buttonText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground mb-4">
              All plans include 7-day free trial • No setup fees • Cancel anytime
            </p>
            <Link href="/contact" className="text-primary hover:underline">
              Need a custom plan? Contact us →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
            Ready to Create Viral Content?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of content creators who are already using Quick Clips to grow their audience.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <Link href="/signup">Start Your Free Trial</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
              <Link href="/login">Sign In to Dashboard</Link>
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
                <li><Link href="#features" className="text-muted-foreground hover:text-foreground">Features</Link></li>
                <li><Link href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
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