'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const STEPS = [
  {
    num: 1,
    tag: 'CAPTURE',
    title: 'Order Placement (SOR)',
    desc: 'Distributors browse their authorised product catalogue and submit Suggested Order Requests with line items, quantities, and notes.',
    meta: 'SOR • P-Catalogue • Excel'
  },
  {
    num: 2,
    tag: 'VALIDATE',
    title: 'Review & Approval',
    desc: 'The Sales Manager reviews the SOR — checks credit limit, order history, and SKU authorisations before forwarding to operations.',
    meta: 'Credit Limit • SKU Auth • History'
  },
  {
    num: 3,
    tag: 'FINALIZE',
    title: 'Proforma Invoice',
    desc: 'Operations finalizes pricing, freight, and taxes. The distributor must formally accept the Proforma to push the order to SAP/ERP.',
    meta: 'Pricing • Freight • Taxes'
  },
  {
    num: 4,
    tag: 'DISPATCH',
    title: 'ETA & Dispatch',
    desc: 'Logistics sets the delivery schedule. Dispatcher confirms vehicle and AWB details. ASN is generated and tracked in real-time.',
    meta: 'Vehicle • AWB • ASN'
  },
  {
    num: 5,
    tag: 'SETTLE',
    title: 'Invoice & Settlement',
    desc: 'The final Tax Invoice is mirrored from the ERP. Revenue is attributed to targets, and payment settlement is verified.',
    meta: 'Target Accrual • Settlement • ERP Sync'
  }
];

export default function Fulfillment() {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="reveal" id="fulfillment" style={{
      background: 'var(--ink)',
      padding: '120px 0',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: 'min(92vw, 1300px)', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: 80, textAlign: 'center' }}>
          <div style={{
            fontSize: 12,
            fontWeight: 700,
            color: 'var(--gold)',
            textTransform: 'uppercase',
            letterSpacing: '2.5px',
            marginBottom: 20,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 16
          }}>
            <span style={{ width: 40, height: 1, background: 'var(--gold)', opacity: 0.3 }} />
            The Fulfillment Engine
            <span style={{ width: 40, height: 1, background: 'var(--gold)', opacity: 0.3 }} />
          </div>
          <h2 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 'clamp(40px, 6vw, 64px)',
            fontWeight: 400,
            color: '#fff',
            lineHeight: 1.05,
            letterSpacing: '-1.5px',
            marginBottom: 28
          }}>
            One unified cascade from <br/>
            <em style={{ color: 'var(--gold)', fontStyle: 'italic', fontWeight: 500 }}>Lead to Settlement.</em>
          </h2>
          <p style={{
            fontSize: 19,
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.6)',
            maxWidth: '720px',
            margin: '0 auto',
            fontWeight: 300
          }}>
            Eliminate manual re-entry. The exact same data entity evolves automatically through the pipeline with zero friction at handoffs.
          </p>
        </div>

        {/* Horizontal Flow Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : `repeat(${STEPS.length}, 1fr)`,
          gap: isMobile ? '40px' : '40px',
          position: 'relative',
        }}>
          {/* Connecting Line (Desktop) */}
          {!isMobile && (
            <div style={{
              position: 'absolute',
              top: '25px',
              left: '40px',
              right: '40px',
              height: '1px',
              background: 'linear-gradient(90deg, rgba(255,255,255,0.1), rgba(196,154,60,0.3), rgba(255,255,255,0.1))',
              zIndex: 0
            }} />
          )}

          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ 
                opacity: hoveredIdx === null || hoveredIdx === i ? 1 : 0.4,
                scale: hoveredIdx === i ? 1.02 : 1,
                y: hoveredIdx === i ? -10 : 0
              }}
              viewport={{ once: true }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 25,
                delay: i * (hoveredIdx === null ? 0.1 : 0) 
              }}
              style={{ 
                position: 'relative', 
                zIndex: i === hoveredIdx ? 10 : 1, 
                cursor: 'pointer',
                display: isMobile ? 'flex' : 'block',
                gap: isMobile ? '20px' : '0',
                alignItems: isMobile ? 'flex-start' : 'initial'
              }}
            >
              {/* Number Circle */}
              <motion.div 
                animate={{ 
                  backgroundColor: hoveredIdx === i ? 'var(--gold)' : 'rgba(11,22,40,1)',
                  borderColor: hoveredIdx === i ? 'var(--gold)' : 'rgba(255,255,255,0.2)',
                  color: hoveredIdx === i ? 'var(--ink)' : '#fff',
                  boxShadow: hoveredIdx === i ? '0 0 30px rgba(196,154,60,0.4)' : '0 0 0px transparent'
                }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 16,
                  fontWeight: 700,
                  flexShrink: 0,
                  margin: isMobile ? '0' : '0 0 32px 0',
                  position: 'relative',
                  transition: 'background-color 0.4s ease'
                }}
              >
                {step.num}
                {/* Active Indicator / Ripple */}
                {hoveredIdx === i && (
                  <motion.div
                    layoutId="ripple"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    style={{ position: 'absolute', inset: -1, borderRadius: '50%', border: '1px solid var(--gold)' }}
                  />
                )}
                <div style={{ position: 'absolute', inset: -4, borderRadius: '50%', border: '1px solid rgba(196,154,60,0.2)' }} />
              </motion.div>
 
              {/* Step Content */}
              <div style={{ paddingRight: isMobile ? 0 : 20, flex: 1 }}>
                <div style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: 'var(--gold)',
                  letterSpacing: '1.5px',
                  marginBottom: 8,
                  textTransform: 'uppercase'
                }}>
                  {step.tag}
                </div>
                <h4 style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#fff',
                  marginBottom: 10,
                  letterSpacing: '-0.5px',
                  lineHeight: 1.3
                }}>
                  {step.title}
                </h4>
                <p style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.55,
                  fontWeight: 300,
                  marginBottom: 16
                }}>
                  {step.desc}
                </p>
                <div style={{
                  fontSize: 11,
                  color: 'rgba(196,154,60,0.6)',
                  fontWeight: 500,
                  paddingTop: 12,
                  borderTop: '1px solid rgba(255,255,255,0.05)'
                }}>
                  {step.meta}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Gradient */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80%',
        height: '40%',
        background: 'radial-gradient(ellipse at center, rgba(196,154,60,0.05) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
    </section>
  );
}
