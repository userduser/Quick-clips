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

const plans = [
  {
    title: "Small Pack",
    price: "$9.99",
    description: "Perfect for occasional podcast creators",
    features: ["50 credits", "No expiration", "Download all clips"],
    buttonText: "Buy 50 credits",
    isPopular: false,
  },
  {
    title: "Medium Pack",
    price: "$24.99",
    description: "Best value for regular podcasters",
    features: ["150 credits", "No expiration", "Download all clips"],
    buttonText: "Buy 150 credits",
    isPopular: true,
    savePercentage: "Save 17%",
  },
  {
    title: "Large Pack",
    price: "$69.99",
    description: "Ideal for podcast studios and agencies",
    features: ["500 credits", "No expiration", "Download all clips"],
    buttonText: "Buy 500 credits",
    isPopular: false,
    savePercentage: "Save 30%",
  },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Top Nav */}
      <header className="bg-background sticky top-0 z-10 border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <div className="text-foreground font-sans text-xl font-medium tracking-tight">
              <span>podcast</span>
              <span className="font-light text-gray-500">/</span>
              <span className="font-light">clipper</span>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost">
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Get started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/40">
        <div className="container mx-auto grid gap-8 px-4 py-20 text-center">
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Turn long podcasts into viral clips in minutes
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            AI transcribes, finds the most engaging moments, and auto-crops to the active speaker. Export-ready vertical clips for Shorts and TikTok.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/signup">Start free</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/login">Go to dashboard</Link>
            </Button>
          </div>
          <div className="text-muted-foreground text-xs">
            No subscriptions. Credits never expire.
          </div>
        </div>
      </section>

      {/* Features */}
      <section>
        <div className="container mx-auto grid gap-8 px-4 py-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Find viral moments</CardTitle>
                <CardDescription>Stories, questions, and punchy answers identified automatically.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Uses AI to propose 40–60s clips with sentence-aligned boundaries.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Smart framing</CardTitle>
                <CardDescription>Auto-crops to the active speaker for vertical video.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Generates 9:16 videos with clean composition and readable subtitles.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Ready to post</CardTitle>
                <CardDescription>Download your clips and share anywhere.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Works great for YouTube Shorts, TikTok, and Reels.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-muted/30">
        <div className="container mx-auto grid gap-10 px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple pricing</h2>
            <p className="text-muted-foreground mt-2">Credits never expire. One-time purchase.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.title}
                className={plan.isPopular ? "border-2 border-primary" : undefined}
              >
                {plan.isPopular ? (
                  <div className="bg-primary text-primary-foreground absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform rounded-full px-3 py-1 text-sm font-medium">
                    Most Popular
                  </div>
                ) : null}
                <CardHeader>
                  <CardTitle>{plan.title}</CardTitle>
                  <div className="text-4xl font-bold">{plan.price}</div>
                  {plan.savePercentage ? (
                    <p className="text-sm font-medium text-green-600">{plan.savePercentage}</p>
                  ) : null}
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    {plan.features.map((f) => (
                      <li key={f}>• {f}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/login">{plan.buttonText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container mx-auto grid gap-8 px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">FAQ</h2>
            <p className="text-muted-foreground mt-2">Quick answers to common questions.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>How do credits work?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                1 credit ≈ 1 minute of processing. Credits never expire and you can use them anytime.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Can I use any podcast length?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Yes. Longer podcasts require more credits. We’ll process segments into multiple clips.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Do you add subtitles?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Yes, subtitles are generated automatically and baked into the vertical video.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Where are clips stored?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Processed clips are stored securely and are available to download from your dashboard.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row">
          <div className="font-sans font-medium text-foreground">
            <span>podcast</span>
            <span className="font-light text-gray-500">/</span>
            <span className="font-light">clipper</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">Log in</Link>
            <Link href="/signup">Create account</Link>
            <Link href="/dashboard/billing">Pricing</Link>
          </div>
          <div>© {new Date().getFullYear()} All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
