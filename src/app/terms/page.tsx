import Link from "next/link";
import { Button } from "~/components/ui/button";
import QuickClipsLogo from "~/components/logo";

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <QuickClipsLogo />
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

      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing or using Quick Clips, you agree to be bound by these Terms of Service and our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
            <p className="text-muted-foreground mb-4">
              Quick Clips is an AI-powered video processing service that automatically generates short clips from longer video content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <p className="text-muted-foreground mb-4">
              You are responsible for maintaining the security of your account and for all activities under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Content Ownership</h2>
            <p className="text-muted-foreground mb-4">
              You retain ownership of all content you upload. By using our service, you grant us a license to process your content 
              to provide the requested services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Prohibited Uses</h2>
            <p className="text-muted-foreground mb-4">You may not use our service to:</p>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li>Upload illegal or copyrighted content</li>
              <li>Violate any laws or regulations</li>
              <li>Interfere with our service operations</li>
              <li>Upload malicious content or viruses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Payment Terms</h2>
            <p className="text-muted-foreground mb-4">
              Subscription fees are billed monthly or annually as selected. All fees are non-refundable except as required by law 
              or our 30-day money-back guarantee.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              Quick Clips shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about these Terms, contact us at{" "}
              <a href="mailto:legal@quickclips.pro" className="text-primary hover:underline">
                legal@quickclips.pro
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}