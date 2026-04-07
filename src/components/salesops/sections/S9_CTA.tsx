'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Box, BarChart2, Zap } from 'lucide-react';

export default function S9_CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{
      background: 'var(--cream)',
      position: 'relative',
      overflow: 'hidden',
      padding: '80px 0',
      borderTop: '1px solid rgba(255,255,255,0.05)',
    }}>
      {/* Background Subtle Elements */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(ellipse at center, rgba(196,154,60,0.08) 0%, rgba(255,255,255,0) 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle,rgba(11,22,40,.03) 1px,transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 'min(92vw,1200px)',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{
          background: 'var(--ink)',
          border: '1px solid rgba(196,154,60,0.2)',
          borderRadius: 24,
          padding: 'clamp(32px, 5vw, 56px)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
          backdropFilter: 'blur(12px)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(24px)',
          transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
          flexWrap: 'wrap',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle Inner Glow */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(196,154,60,0.3), transparent)',
          }} />
          
          {/* Left Side: Content */}
          <div style={{ flex: '1 1 500px', position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 11,
              fontWeight: 600,
              color: 'var(--gold)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: 20,
              padding: '5px 14px',
              background: 'rgba(196,154,60,.12)',
              border: '1px solid rgba(196,154,60,.3)',
              borderRadius: 100,
            }}>
              <span style={{ width: 6, height: 6, background: 'var(--gold)', borderRadius: '50%', display: 'block', boxShadow: '0 0 8px var(--gold)' }} />
              Distributor Management Platform
            </div>

            <h2 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(32px, 4vw, 44px)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-1.2px',
              color: '#fff',
              marginBottom: 16,
            }}>
              From operational opacity <br/>to <em style={{ color: 'var(--gold)', fontStyle: 'italic', fontWeight: 500 }}>digital clarity.</em>
            </h2>

            <p style={{ 
              fontSize: 'clamp(15px, 1.1vw, 18px)', 
              color: 'rgba(255,255,255,0.7)', 
              lineHeight: 1.6, 
              fontWeight: 300, 
              marginBottom: 32,
              maxWidth: '90%'
            }}>
              One unified system. Every action documented. Every status visible in real-time. Stop relying on WhatsApp and spreadsheets to run your commercial partner network.
            </p>
          </div>

          {/* Right Side: Buttons Column (Horizontal Row only for Mobile) */}
          <div className="s9-cta-buttons" style={{ 
            display: 'flex', 
            flexDirection: 'row', // Force row
            gap: 12,
            flexShrink: 0,
            flexWrap: 'nowrap', // Prevent stacking
            position: 'relative',
            zIndex: 1
          }}>
            <button style={{
              flex: 1,
              background: 'var(--gold)',
              color: 'var(--ink)',
              border: 'none',
              borderRadius: 12,
              padding: '14px 18px',
              fontSize: 'clamp(13px, 1.2vw, 15px)',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              transition: 'all 0.2s',
              boxShadow: '0 8px 16px rgba(196,154,60,.2)',
              whiteSpace: 'nowrap'
            }}>
              Digitize Now <ArrowRight size={16} />
            </button>
            <button style={{
              flex: 1,
              background: 'transparent',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: 12,
              padding: '14px 18px',
              fontSize: 'clamp(13px, 1.2vw, 15px)',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s',
              textAlign: 'center',
              whiteSpace: 'nowrap'
            }}>
              Talk to Sales
            </button>
          </div>

        </div>
      </div>
      <style jsx>{`
        @media (max-width: 600px) {
          .s9-cta-buttons {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
