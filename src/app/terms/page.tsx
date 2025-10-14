"use client";

import Link from "next/link";
import QuickClipsLogo from "~/components/logo";
import { Footer } from "~/components/footer";
import { AuthButtons } from "~/components/auth-buttons";

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/40 glass-card shadow-glow">
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
          <AuthButtons />
        </div>
      </header>

      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing or using Quick Clips ("Service"), you agree to be bound by these Terms of Service 
              ("Terms") and our Privacy Policy. If you do not agree to these Terms, please do not use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
            <p className="text-muted-foreground mb-4">
              Quick Clips is an AI-powered video processing service that automatically generates short clips from 
              longer video content. Our Service includes features such as:
            </p>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2 mb-4">
              <li>AI-powered clip detection and generation</li>
              <li>Automatic captioning and subtitles</li>
              <li>Smart framing and cropping for social media</li>
              <li>Video editing and enhancement tools</li>
              <li>Cloud storage for your content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <p className="text-muted-foreground mb-4">
              To use our Service, you must create an account. You are responsible for:
            </p>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2 mb-4">
              <li>Maintaining the security and confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
              <li>Providing accurate and complete registration information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Content Ownership and License</h2>
            <p className="text-muted-foreground mb-4">
              <strong>Your Content:</strong> You retain all ownership rights to the content you upload to our Service. 
              By uploading content, you grant us a limited, worldwide, non-exclusive license to process, store, and 
              display your content solely to provide the requested services.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Our Content:</strong> The Service, including all software, designs, and trademarks, is owned 
              by Quick Clips and is protected by copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Prohibited Uses</h2>
            <p className="text-muted-foreground mb-4">You agree not to use our Service to:</p>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2 mb-4">
              <li>Upload, post, or transmit any content that is illegal, harmful, threatening, abusive, or offensive</li>
              <li>Violate any intellectual property rights or other proprietary rights</li>
              <li>Upload content containing viruses, malware, or other harmful code</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Use the Service for any automated or systematic data collection</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Subscription and Payment Terms</h2>
            <p className="text-muted-foreground mb-4">
              <strong>Subscription Plans:</strong> Our Service offers various subscription tiers with different 
              features and usage limits. Current pricing and plan details are available on our pricing page.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Billing:</strong> Subscription fees are billed in advance on a monthly or annual basis, 
              depending on your selected plan. All payments are processed securely through our payment processor, Stripe.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Refunds:</strong> We offer a 30-day money-back guarantee for new subscribers. After 30 days, 
              all fees are non-refundable except as required by applicable law.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Cancellation:</strong> You may cancel your subscription at any time. Cancellations take effect 
              at the end of your current billing period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Service Availability and Modifications</h2>
            <p className="text-muted-foreground mb-4">
              We strive to provide reliable service but cannot guarantee uninterrupted access. We reserve the right to:
            </p>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2 mb-4">
              <li>Modify, suspend, or discontinue the Service at any time</li>
              <li>Change pricing with 30 days' notice to existing subscribers</li>
              <li>Update these Terms with notice to users</li>
              <li>Implement usage limits or restrictions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, QUICK CLIPS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED 
              DIRECTLY OR INDIRECTLY, ARISING FROM YOUR USE OF THE SERVICE.
            </p>
            <p className="text-muted-foreground mb-4">
              Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Indemnification</h2>
            <p className="text-muted-foreground mb-4">
              You agree to indemnify and hold Quick Clips harmless from any claims, damages, losses, and expenses 
              arising from your use of the Service, your content, or your violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
            <p className="text-muted-foreground mb-4">
              We may terminate or suspend your account and access to the Service at any time, with or without notice, 
              for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
            <p className="text-muted-foreground mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in 
              which Quick Clips operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:legal@quickclips.pro" className="text-primary hover:underline">
                legal@quickclips.pro
              </a>
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}