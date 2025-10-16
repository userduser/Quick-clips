import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Footer } from "~/components/footer";
import { PageHeader } from "~/components/page-header";

const commissionTiers = [
  {
    title: "Starter Affiliate",
    referrals: "1-10 referrals",
    commission: "25%",
    description: "Perfect for getting started with our affiliate program",
    features: [
      "25% recurring commission for 12 months",
      "Real-time tracking dashboard", 
      "Marketing materials provided",
      "Monthly payouts via PayPal/Stripe"
    ],
    isPopular: false,
  },
  {
    title: "Pro Affiliate", 
    referrals: "11-50 referrals",
    commission: "35%",
    description: "For serious affiliates driving consistent referrals",
    features: [
      "35% recurring commission for 12 months",
      "Advanced analytics and reporting",
      "Priority support from our team",
      "Custom landing pages available",
      "Bi-weekly payouts available"
    ],
    isPopular: true,
  },
  {
    title: "Elite Partner",
    referrals: "50+ referrals", 
    commission: "45%",
    description: "Our highest tier for top-performing partners",
    features: [
      "45% recurring commission for 12 months",
      "Dedicated account manager",
      "Co-marketing opportunities",
      "Early access to new features",
      "Custom commission structure available",
      "Weekly payouts available"
    ],
    isPopular: false,
  },
];

const faqItems = [
  {
    question: "How does the commission structure work?",
    answer: "You earn a percentage of every subscription fee paid by users you refer. Commissions are paid monthly for 12 months after the initial signup, creating a reliable recurring income stream."
  },
  {
    question: "When do I get paid?",
    answer: "Payments are processed monthly on the 15th of each month for the previous month's earnings. You'll need to reach a minimum threshold of $50 to receive a payout."
  },
  {
    question: "What marketing materials do you provide?",
    answer: "We provide banners, email templates, social media assets, video testimonials, and landing pages. All materials are professionally designed and optimized for conversions."
  },
  {
    question: "How do I track my referrals?",
    answer: "You'll get access to a comprehensive dashboard showing clicks, conversions, earnings, and detailed analytics. Real-time tracking helps you optimize your campaigns."
  },
  {
    question: "Is there a minimum commitment?",
    answer: "No minimum commitment required. You can start promoting immediately after approval and there are no quotas or requirements to maintain your affiliate status."
  },
  {
    question: "How long does approval take?",
    answer: "Most applications are reviewed and approved within 24-48 hours. We'll send you an email with your affiliate dashboard access and unique tracking links."
  }
];

export default function AffiliatePage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Navigation */}
      <PageHeader />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            💰 Earn Up to 45% Commission
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Join the <span className="text-primary">Quick Clips</span> Affiliate Program
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground mb-8">
            Earn recurring commissions by promoting the AI video clipper that content creators love. 
            Join thousands of affiliates already earning with Quick Clips.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-8 text-base btn-primary">
              <Link href="/signup">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base btn-secondary">
              <Link href="#how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Why Partner With Quick Clips?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join a program that's already generating serious income for our partners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">45%</div>
              <p className="text-muted-foreground">Max Commission Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">12mo</div>
              <p className="text-muted-foreground">Recurring Payments</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$2.4K</div>
              <p className="text-muted-foreground">Avg Monthly Earnings</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24hr</div>
              <p className="text-muted-foreground">Approval Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Tiers */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Commission <span className="text-primary">Tiers</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Higher performance unlocks higher commission rates and exclusive benefits
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {commissionTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative ${
                  tier.isPopular 
                    ? "border-primary shadow-lg shadow-primary/25" 
                    : "border-border/50"
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tier.title}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{tier.commission}</span>
                    <span className="text-muted-foreground"> commission</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {tier.referrals}
                  </div>
                  <CardDescription className="mt-2">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
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
                    className={`w-full ${tier.isPopular ? "btn-primary" : "btn-secondary"}`}
                    variant={tier.isPopular ? "default" : "outline"}
                  >
                    <Link href="/signup">Apply for {tier.title}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Start earning in 4 simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Apply</h3>
              <p className="text-muted-foreground">
                Submit your application with information about your audience and promotion strategy.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Approved</h3>
              <p className="text-muted-foreground">
                Our team reviews applications within 24-48 hours. Most quality applications are approved quickly.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Start Promoting</h3>
              <p className="text-muted-foreground">
                Get your unique affiliate links and marketing materials. Start promoting to your audience.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Earn Commissions</h3>
              <p className="text-muted-foreground">
                Receive monthly payments for every successful referral. Track your earnings in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Affiliate Benefits
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to succeed as a Quick Clips affiliate
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border/50 bg-card/50">
              <CardHeader>
                <div className="text-4xl mb-2">💰</div>
                <CardTitle>Recurring Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Earn monthly commissions for up to 12 months from each referral, creating a reliable income stream.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 bg-card/50">
              <CardHeader>
                <div className="text-4xl mb-2">📊</div>
                <CardTitle>Real-Time Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track clicks, conversions, and earnings with our comprehensive dashboard and reporting tools.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 bg-card/50">
              <CardHeader>
                <div className="text-4xl mb-2">🎨</div>
                <CardTitle>Marketing Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access professionally designed banners, email templates, and landing pages optimized for conversions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 bg-card/50">
              <CardHeader>
                <div className="text-4xl mb-2">🎯</div>
                <CardTitle>High Convert Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Quick Clips converts at 12%+ because it solves a real problem for content creators everywhere.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 bg-card/50">
              <CardHeader>
                <div className="text-4xl mb-2">🏆</div>
                <CardTitle>Performance Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Unlock higher commission rates, exclusive bonuses, and special recognition as you drive more referrals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 bg-card/50">
              <CardHeader>
                <div className="text-4xl mb-2">🤝</div>
                <CardTitle>Dedicated Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get help from our affiliate success team to optimize your campaigns and maximize earnings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our affiliate program
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <Card key={index} className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our affiliate program today and start earning recurring commissions from Quick Clips referrals.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-8 text-base btn-primary">
              <Link href="/signup">Apply Now - It's Free</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base btn-secondary">
              <Link href="/contact">Questions? Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}