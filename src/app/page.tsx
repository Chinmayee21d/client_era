'use client';

import { useEffect } from 'react';
import Nav            from '@/components/sections/Nav';
import Hero           from '@/components/sections/Hero';
import Problem        from '@/components/sections/Problem';
import Solution       from '@/components/sections/Solution';
import Personas       from '@/components/sections/Personas';
import AILayer        from '@/components/sections/Ailsyer';
import AiCapabilities   from '@/components/sections/AiCapabilities';
import Fulfillment     from '@/components/sections/Fulfillment';
import KPIEngine      from '@/components/sections/KPIEngine';
import Comparison     from '@/components/sections/Comparison';
import Services       from '@/components/sections/Services';
import Compliance     from '@/components/sections/Compliance';
import Pricing        from '@/components/sections/Pricing';
import CTA            from '@/components/sections/CTA';
import Footer         from '@/components/sections/Footer';
import EnquiryModal   from '@/components/sections/EnquiryModal';

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
        <Hero />
        <div id="solution">
          <Problem />
          <Solution />
          <Personas />
          <AILayer />
          <AiCapabilities />
          <Fulfillment />
          <KPIEngine />
          <Comparison />
          <Services />
          <Compliance />
          <Pricing />
          <CTA />
        </div>
      </main>
      <Footer />
      <EnquiryModal />
    </>
  );
}
