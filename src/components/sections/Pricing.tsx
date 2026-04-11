'use client'

import { useEffect } from 'react'
import { Check } from 'lucide-react'

const TIERS = [
  {
    tier: 'Tier 1',
    name: 'Starter',
    currency: '₹',
    price: '4,999',
    period: '/person/month',
    tagline: 'For micro-businesses getting their commercial operations unified.',
    featured: false,
    features: [
      'Maximum 5 users',
      '2 hierarchy levels (Owner + Rep)',
      'Standard Commercial KPIs',
      'Full AI Co-Pilot (BYOK)',
      'All integrations except ERP',
      'Self-serve onboarding',
    ],
    cta: 'Get started',
    ctaClass: 'ce-cta-ghost',
  },
  {
    tier: 'Tier 2',
    name: 'Growth',
    currency: '₹',
    price: '9,999',
    period: '/person/month',
    tagline: 'For scaling teams that need custom workflows and ERP sync.',
    featured: true,
    features: [
      'Up to 50 users',
      '3 hierarchy levels (Manager focus)',
      'Custom KPI & Target builder',
      'Two-way ERP integrations',
      'Custom Workflow Builder',
      'Priority email support',
    ],
    cta: 'Book a demo',
    ctaClass: 'ce-cta-gold',
  },
  {
    tier: 'Tier 3',
    name: 'Enterprise',
    price: 'Custom',
    subtext: 'Annual · Volume pricing',
    tagline: 'Global scale with unlimited users and predictive analytics.',
    featured: false,
    features: [
      'Unlimited users & hierarchy',
      'Predictive analytics & forecasting',
      'Dedicated Account Manager',
      'SSO (SAML & OAuth)',
      'Custom branding & domains',
      'White-glove onboarding',
    ],
    cta: 'Contact sales',
    ctaClass: 'ce-cta-blue',
  },
]

export default function Pricing() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.ce-pricing-card')
    const handlers = new Map<HTMLElement, (e: MouseEvent) => void>()
    cards.forEach(card => {
      const fn = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const x = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1)
        const y = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1)
        card.style.setProperty('--mx', x + '%')
        card.style.setProperty('--my', y + '%')
      }
      handlers.set(card, fn)
      card.addEventListener('mousemove', fn)
    })
    return () => {
      handlers.forEach((fn, card) => card.removeEventListener('mousemove', fn))
    }
  }, [])

  return (
    <section className="section-light" id="pricing" style={{ position: 'relative', background: 'var(--cream)', padding: '40px 0', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1.5px)', backgroundSize: '24px 24px', opacity: 0.6, pointerEvents: 'none' }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 660, margin: '0 auto 32px' }}>
          <div className="eyebrow eyebrow-dark" style={{ justifyContent: 'center' }}>
            <span className="ey-line" /> Pricing Tiers
          </div>
          <h2 className="h2 h2-ink" style={{ textAlign: 'center', marginTop: 16 }}>
            Scalable for<br /><em>any team size.</em>
          </h2>
          <p className="lead lead-ink" style={{ margin: '24px auto 0', textAlign: 'center' }}>
            Start with the essentials and scale your commercial operations without ever rebuilding your foundation.
          </p>
        </div>

        <div className="ce-pricing-grid reveal" style={{ transitionDelay: '0.1s' }}>
          {TIERS.map((t) => (
            <div key={t.tier} className={`ce-pricing-card ${t.featured ? 'ce-featured' : t.tier === 'Tier 1' ? 'ce-basic' : 'ce-enterprise'}`}>
              {t.featured && <div className="ce-featured-glow" />}
              {t.featured && <div className="ce-feat-badge">Recommended</div>}

              <div className="ce-card-top">
                <div className="ce-tier-lbl" style={{ color: t.featured ? 'var(--gold)' : 'var(--text3)' }}>{t.tier}</div>
                <div className="ce-card-name" style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>{t.name}</div>
                <div className="ce-card-tagline">{t.tagline}</div>
                <div className="ce-card-price-wrap">
                  {t.currency && <span className="ce-currency" style={{ color: t.featured ? 'var(--gold)' : 'var(--text3)' }}>{t.currency}</span>}
                  <div className="ce-price" style={{ color: t.featured ? 'var(--gold2)' : '#fff' }}>{t.price}</div>
                  {t.period && <span className="ce-period">{t.period}</span>}
                </div>
                {t.subtext && <div className="ce-card-subtext">{t.subtext}</div>}
              </div>

              <div className="ce-card-body">
                <div className="ce-p-feats">
                  {t.features.map(f => (
                    <div key={f} className="ce-p-feat">
                      <div className="ce-pf-icon" style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <Check size={12} color="var(--gold)" />
                      </div>
                      <span className="ce-pf-text">{f}</span>
                    </div>
                  ))}
                </div>
                <button className={`ce-card-cta ${t.ctaClass}`}>{t.cta}</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ce-pricing-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            align-items: stretch;
            max-width: 1140px;
            margin: 0 auto;
        }

        /* Card Base Mechanics */
        .ce-pricing-card {
            background: #0E1D34;
            border: 1px solid rgba(255, 255, 255, .07);
            border-radius: 24px;
            overflow: hidden;
            position: relative;
            display: flex;
            flex-direction: column;
            transition: transform .35s cubic-bezier(.22, 1, .36, 1), box-shadow .35s cubic-bezier(.22, 1, .36, 1), border-color .3s;
        }
        .ce-pricing-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 28px 60px rgba(11, 22, 40, .28), 0 0 0 1px rgba(255, 255, 255, .07);
        }

        /* Tracking Glow */
        .ce-pricing-card::before {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(400px circle at var(--mx, 50%) var(--my, 0%), rgba(255, 255, 255, .06) 0%, transparent 60%);
            opacity: 0;
            transition: opacity .4s;
            pointer-events: none;
            z-index: 0;
        }
        .ce-pricing-card:hover::before {
            opacity: 1;
        }

        /* Top Shimmer border */
        .ce-pricing-card::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, .14), transparent);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform .55s cubic-bezier(.22, 1, .36, 1);
            z-index: 1;
        }
        .ce-pricing-card:hover::after {
            transform: scaleX(1);
        }

        /* Accent Variants */
        .ce-basic { border-color: rgba(196, 154, 60, .15); }
        .ce-basic::after { background: linear-gradient(90deg, transparent, rgba(196, 154, 60, .2), transparent); }
        .ce-enterprise { border-color: rgba(52, 112, 240, .18); }
        .ce-enterprise::after { background: linear-gradient(90deg, transparent, rgba(52, 112, 240, .2), transparent); }

        /* Featured Card */
        .ce-featured {
            border-color: var(--gold);
            box-shadow: 0 0 0 1px rgba(196, 154, 60, .2), 0 8px 40px rgba(196, 154, 60, .12);
            transform: translateY(-4px) scale(1.015);
            overflow: visible;
        }
        .ce-featured:hover {
            transform: translateY(-10px) scale(1.015);
            box-shadow: 0 32px 72px rgba(11, 22, 40, .28), 0 0 0 1px rgba(196, 154, 60, .45), 0 0 60px rgba(196, 154, 60, .12);
        }

        .ce-featured-glow {
            position: absolute;
            inset: 0;
            background: radial-gradient(ellipse at 50% -10%, rgba(196, 154, 60, .1) 0%, transparent 55%);
            pointer-events: none;
            z-index: 0;
            border-radius: 24px;
        }

        .ce-feat-badge {
            position: absolute;
            top: 18px;
            right: 18px;
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 9.5px;
            font-weight: 700;
            color: var(--navy);
            background: var(--gold);
            border-radius: 100px;
            padding: 5px 12px;
            text-transform: uppercase;
            letter-spacing: .6px;
            z-index: 5;
            box-shadow: 0 4px 16px rgba(196, 154, 60, .45);
            animation: featBadgePulse 3s ease-in-out infinite;
        }
        @keyframes featBadgePulse {
            0%, 100% { box-shadow: 0 4px 16px rgba(196, 154, 60, .45); }
            50% { box-shadow: 0 4px 24px rgba(196, 154, 60, .7); }
        }

        .ce-card-top {
            padding: 32px 24px 24px;
            border-bottom: 1px solid rgba(255,255,255,0.06);
            z-index: 2;
            position: relative;
        }
        .ce-tier-lbl {
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            margin-bottom: 6px;
        }
        .ce-card-tagline {
            font-family: 'Fraunces', serif;
            font-size: clamp(15px, 1.1vw, 18px);
            font-weight: 300;
            color: var(--text2);
            margin-bottom: 18px;
            letter-spacing: -.2px;
            line-height: 1.4;
        }
        .ce-card-price-wrap {
            display: flex;
            align-items: baseline;
            gap: 2px;
            margin-bottom: 6px;
        }
        .ce-currency {
            font-size: 18px;
            font-weight: 300;
            margin-right: 1px;
            transition: transform .3s;
        }
        .ce-pricing-card:hover .ce-currency {
            transform: translateX(-2px);
        }
        .ce-price {
            font-family: 'Fraunces', serif;
            font-size: clamp(38px, 3vw, 52px);
            font-weight: 400;
            letter-spacing: -2px;
            line-height: 1;
            transition: color .25s;
        }
        .ce-period {
            font-size: 12px;
            color: var(--text3);
            margin-left: 4px;
        }
        .ce-card-subtext {
            font-size: 11.5px;
            color: var(--text3);
            margin-top: -2px;
            margin-bottom: 6px;
        }
        
        .ce-card-body {
            padding: 24px 24px 24px;
            flex: 1;
            display: flex;
            flex-direction: column;
            z-index: 2;
            position: relative;
        }
        
        .ce-p-feats {
            flex: 1;
            margin-bottom: 24px;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        .ce-p-feat {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            font-size: 13px;
            color: var(--text2);
            line-height: 1.45;
            padding: 5px 8px;
            border-radius: 7px;
            transition: background .2s, color .2s, transform .25s cubic-bezier(.22, 1, .36, 1);
            margin-left: -8px;
        }
        .ce-p-feat:hover {
            background: rgba(255, 255, 255, .05);
            color: #fff;
            transform: translateX(3px);
        }
        .ce-pf-icon {
            width: 17px;
            height: 17px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            margin-top: 2px;
            transition: transform .3s cubic-bezier(.22, 1, .36, 1);
        }
        .ce-p-feat:hover .ce-pf-icon {
            transform: scale(1.2);
        }
        .ce-pf-text {
            line-height: 1.4;
        }
        
        /* CTA Design */
        .ce-card-cta {
            width: 100%;
            padding: 13px;
            border-radius: 12px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            text-align: center;
            position: relative;
            overflow: hidden;
            transition: all .25s cubic-bezier(.22, 1, .36, 1);
            letter-spacing: .1px;
            border: none;
            margin-top: auto;
        }
        .ce-card-cta::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 60%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, .15), transparent);
            transition: left .5s;
        }
        .ce-card-cta:hover::before { left: 150%; }

        .ce-cta-ghost {
            background: transparent;
            border: 1px solid rgba(255,255,255,0.14);
            color: var(--text2);
        }
        .ce-cta-ghost:hover {
            background: rgba(255,255,255,0.05);
            border-color: rgba(255,255,255,0.28);
            color: #fff;
            transform: translateY(-2px);
        }

        .ce-cta-gold {
            background: var(--gold);
            color: var(--navy);
            box-shadow: 0 4px 20px rgba(196, 154, 60, .35);
        }
        .ce-cta-gold:hover {
            background: var(--gold2);
            box-shadow: 0 8px 32px rgba(196, 154, 60, .55), 0 0 0 1px rgba(196, 154, 60, .3);
            transform: translateY(-2px);
        }
        .ce-featured .ce-cta-gold::after {
            content: '';
            position: absolute;
            inset: -3px;
            border-radius: 15px;
            background: linear-gradient(90deg, var(--gold), var(--gold2), var(--gold)) border-box;
            background-size: 200% 100%;
            -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: .55;
            animation: goldRingShimmer 2.4s linear infinite;
        }
        .ce-featured .ce-cta-gold:hover::after { opacity: 1; }

        @keyframes goldRingShimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }

        .ce-cta-blue {
            background: rgba(52,112,240,0.1);
            border: 1px solid rgba(52,112,240,0.2);
            color: rgba(52, 112, 240, .9);
        }
        .ce-cta-blue:hover {
            background: rgba(52,112,240,0.18);
            border-color: rgba(52,112,240,0.35);
            color: #fff;
            transform: translateY(-2px);
        }
        
        @media (max-width: 968px) {
          .ce-pricing-grid {
            grid-template-columns: 1fr !important;
            max-width: 450px !important;
          }
        }
      `}</style>
    </section>
  )
}