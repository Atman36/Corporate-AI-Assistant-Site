/**
 * CORPRAG — Main Landing Page
 *
 * Сборка всех секций лендинга согласно PRD.
 * Для использования в Next.js App Router: app/page.tsx
 */

import React from 'react';
import {
  Header,
  HeroSection,
  SocialProofSection,
  ProblemSolutionSection,
  HowItWorksSection,
  FeaturesSection,
  UseCasesSection,
  AddonsSection,
  PackagesSection,
  TimelineSection,
  SecuritySection,
  FAQSection,
  CTASection,
  RequestDemoForm,
  Footer,
} from '../sections';

export default function HomePage() {
  return (
    <>
      {/* Fixed Header */}
      <Header />

      {/* Main Content - with top padding for fixed header */}
      <main className="pt-16 lg:pt-20">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Social Proof */}
        <SocialProofSection />

        {/* 3. Problem → Solution */}
        <ProblemSolutionSection />

        {/* 4. How It Works */}
        <div id="how-it-works">
          <HowItWorksSection />
        </div>

        {/* 5. Features */}
        <div id="features">
          <FeaturesSection />
        </div>

        {/* 6. Use Cases (has own id) */}
        <UseCasesSection />

        {/* 7. Add-ons */}
        <AddonsSection />

        {/* 8. Packages */}
        <div id="packages">
          <PackagesSection />
        </div>

        {/* 9. Timeline */}
        <TimelineSection />

        {/* 10. Security */}
        <div id="security">
          <SecuritySection />
        </div>

        {/* 11. FAQ (has own id) */}
        <FAQSection />

        {/* 12. CTA */}
        <CTASection />

        {/* 13. Request Demo Form */}
        <RequestDemoForm />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
