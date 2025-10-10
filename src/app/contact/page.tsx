import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import QuickClipsLogo from "~/components/logo";

export default function ContactPage() {
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
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/affiliate" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Affiliate
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" className="btn-ghost">
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild className="btn-primary">
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Have questions about Quick Clips? Need support? Want to discuss enterprise solutions? 
            We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">💬</div>
                <CardTitle>General Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Get help with your account, billing questions, or technical issues.
                </p>
                <Button asChild className="w-full btn-primary">
                  <a href="mailto:support@quickclips.pro">
                    support@quickclips.pro
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Response within 24 hours
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🏢</div>
                <CardTitle>Enterprise Sales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Discuss custom plans, volume discounts, and enterprise features.
                </p>
                <Button asChild className="w-full btn-primary">
                  <a href="mailto:sales@quickclips.pro">
                    sales@quickclips.pro
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Response within 4 hours
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🤝</div>
                <CardTitle>Partnerships</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Explore partnership opportunities, integrations, and collaborations.
                </p>
                <Button asChild className="w-full btn-primary">
                  <a href="mailto:partners@quickclips.pro">
                    partners@quickclips.pro
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Response within 48 hours
                </p>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to frequently asked questions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>How do I cancel my subscription?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You can cancel anytime from your dashboard billing section. Your subscription will remain active until the end of your billing period.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What video formats do you support?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We support MP4, MOV, AVI, MKV, and most common video formats. Maximum file size is 5GB for Essential, 10GB for Premium, and unlimited for Enterprise.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How accurate are the AI-generated clips?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our AI achieves 90%+ accuracy in identifying engaging moments. You can always review and edit the suggested clips before downloading.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Do you offer refunds?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We offer a 30-day money-back guarantee for all subscriptions. If you're not satisfied, contact support for a full refund.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Can I use Quick Clips for commercial purposes?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! All plans include commercial usage rights. You own the rights to all clips created with Quick Clips.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Is there an API available?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, our REST API is available for Enterprise customers. Contact sales to discuss API access and integration options.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Other Ways to Reach Us
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect with us on social media or through our community channels
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">💬</div>
                  <CardTitle>Live Chat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Get instant help with our live chat support available during business hours.
                  </p>
                  <Button variant="outline" className="w-full btn-secondary">
                    Start Live Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">📚</div>
                  <CardTitle>Help Center</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Browse our comprehensive knowledge base and tutorials.
                  </p>
                  <Button asChild variant="outline" className="w-full btn-secondary">
                    <Link href="/help">
                      Visit Help Center
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">🐛</div>
                  <CardTitle>Report a Bug</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Found an issue? Help us improve Quick Clips by reporting bugs.
                  </p>
                  <Button asChild variant="outline" className="w-full btn-secondary">
                    <a href="mailto:bugs@quickclips.pro">
                      Report Bug
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">💡</div>
                  <CardTitle>Feature Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Have an idea for a new feature? We'd love to hear from you!
                  </p>
                  <Button asChild variant="outline" className="w-full btn-secondary">
                    <a href="mailto:features@quickclips.pro">
                      Suggest Feature
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-8">
              Our Office
            </h2>
            <div className="bg-muted/50 rounded-lg p-8">
              <div className="text-lg font-semibold mb-2">Quick Clips HQ</div>
              <div className="text-muted-foreground space-y-1">
                <p>123 Innovation Drive</p>
                <p>San Francisco, CA 94107</p>
                <p>United States</p>
              </div>
              <div className="mt-6 pt-6 border-t border-border/40">
                <p className="text-sm text-muted-foreground">
                  Business Hours: Monday - Friday, 9:00 AM - 6:00 PM PST
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't have questions? Jump right in and start creating viral clips with Quick Clips today.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-8 text-base btn-primary">
              <Link href="/signup">Start Free Trial</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base btn-secondary">
              <Link href="/#features">Learn More</Link>
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