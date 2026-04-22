'use client';

import { useEffect } from 'react';
import Nav            from '@/components/sections/Nav';
import Hero           from '@/components/sections/Hero';
import Problem        from '@/components/sections/Problem';
import Solution       from '@/components/sections/Solution';
import Personas       from '@/components/sections/Personas';
import AILayer        from '@/components/sections/Ailsyer';
import AiCapabilities from '@/components/sections/AiCapabilities';
import Fulfillment    from '@/components/sections/Fulfillment';
import KPIEngine      from '@/components/sections/KPIEngine';
import Comparison     from '@/components/sections/Comparison';
import Services       from '@/components/sections/Services';
import Compliance     from '@/components/sections/Compliance';
import FAQ            from '@/components/sections/FAQ';
import Pricing        from '@/components/sections/Pricing';
import CTA            from '@/components/sections/CTA';
import Footer         from '@/components/sections/Footer';
import SectionTracker from '@/components/analytics/SectionTracker';

export default function Home() {
  /* scroll-reveal observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main>
        {/* Hero — first impression, no threshold needed */}
        <SectionTracker name="Hero" threshold={0.1}>
          <Hero />
        </SectionTracker>

        <div id="solution">
          <SectionTracker name="Problem">
            <Problem />
          </SectionTracker>

          <SectionTracker name="Solution">
            <Solution />
          </SectionTracker>

          <SectionTracker name="Personas">
            <Personas />
          </SectionTracker>

          <SectionTracker name="AI Layer">
            <AILayer />
          </SectionTracker>

          <SectionTracker name="AI Capabilities">
            <AiCapabilities />
          </SectionTracker>

          <SectionTracker name="Fulfillment">
            <Fulfillment />
          </SectionTracker>

          <SectionTracker name="KPI Engine">
            <KPIEngine />
          </SectionTracker>

          <SectionTracker name="Comparison">
            <Comparison />
          </SectionTracker>

          <SectionTracker name="Services">
            <Services />
          </SectionTracker>

          <SectionTracker name="Compliance">
            <Compliance />
          </SectionTracker>

          <SectionTracker name="FAQ" threshold={0.2}>
            <FAQ />
          </SectionTracker>

          {/* Pricing — high-intent section, track carefully */}
          <SectionTracker name="Pricing" threshold={0.3}>
            <Pricing />
          </SectionTracker>

          <SectionTracker name="CTA Banner" threshold={0.3}>
            <CTA />
          </SectionTracker>
        </div>
      </main>
      <SectionTracker name="Footer" threshold={0.2}>
        <Footer />
      </SectionTracker>
    </>
  );
}
