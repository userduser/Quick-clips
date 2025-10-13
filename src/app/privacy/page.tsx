"use client";

import Link from "next/link";
import QuickClipsLogo from "~/components/logo";
import { Footer } from "~/components/footer";
import { AuthButtons } from "~/components/auth-buttons";

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/40 glass-card shadow-glow">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <QuickClipsLogo />
          <AuthButtons />
        </div>
      </header>

      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-4">
              Welcome to Quick Clips. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our 
              website and use our services, and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2 mb-4">
              <li>Account information (name, email address, password)</li>
              <li>Payment information (processed securely through Stripe)</li>
              <li>Content you upload (videos, clips, metadata)</li>
              <li>Usage data and preferences</li>
              <li>Communications with our support team</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2 mb-4">
              <li>Provide, maintain, and improve our AI video clipping services</li>
              <li>Process your transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Analyze usage patterns to improve user experience</li>
              <li>Detect, prevent, and address technical issues and fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your 
              consent, except in the following circumstances:
            </p>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2 mb-4">
              <li>With service providers who assist us in operating our platform (e.g., cloud storage, payment processing)</li>
              <li>To comply with legal obligations or respond to lawful requests</li>
              <li>To protect our rights, property, or safety, and that of our users</li>
              <li>In connection with a business transaction (merger, acquisition, etc.)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="text-muted-foreground mb-4">
              We implement appropriate technical and organizational security measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2 mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication protocols</li>
              <li>Secure data storage and backup procedures</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
            <p className="text-muted-foreground mb-4">
              We retain your personal information for as long as necessary to provide our services and fulfill the 
              purposes outlined in this policy. You may request deletion of your data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2 mb-4">
              <li>Access to your personal data</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of your data</li>
              <li>Restriction of processing</li>
              <li>Data portability</li>
              <li>Objection to processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Cookies and Tracking</h2>
            <p className="text-muted-foreground mb-4">
              We use cookies and similar tracking technologies to collect and track information about your usage 
              of our services. You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
            <p className="text-muted-foreground mb-4">
              Our services are not intended for children under 13 years of age. We do not knowingly collect 
              personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
            <p className="text-muted-foreground mb-4">
              We may update this privacy policy from time to time. We will notify you of any changes by posting 
              the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy or our data practices, please contact us at{" "}
              <a href="mailto:privacy@quickclips.pro" className="text-primary hover:underline">
                privacy@quickclips.pro
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