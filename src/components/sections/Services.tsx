'use client'

import Link from 'next/link'
import { Sparkles, ShieldCheck, Brain, Zap } from 'lucide-react'
import LeadManagementAnimation from '@/components/services/LeadManagementAnimation'
import OrderToCashAnimation from '@/components/services/OrderToCashAnimation'
import SalesEngagementAnimation from '@/components/services/SalesEngagementAnimation'
import CustomerExcellenceAnimation from '@/components/services/CustomerExcellenceAnimation'

const SERVICES = [
  {
    id: 'lead-management',
    title: 'Lead Management',
    badge: 'AI-Powered',
    badgeIcon: Sparkles,
    tagline: 'From First Touch to Sales-Ready',
    description: 'Intelligent lead capture, enrichment, and qualification that turns prospects into pipeline.',
    features: [
      'Multi-channel lead capture with auto-enrichment',
      'AI-powered scoring and qualification',
      'Automated nurture campaigns and handoff'
    ],
    animation: LeadManagementAnimation,
    color: '#3470F0',
    link: '/lead-management',
  },
  {
    id: 'order-to-cash',
    title: 'Order to Cash',
    badge: 'Zero Leakage',
    badgeIcon: ShieldCheck,
    tagline: 'From Order to Revenue Recognition',
    description: 'End-to-end order processing, invoicing, and payment tracking with complete visibility.',
    features: [
      'Automated order approval workflows',
      'Smart invoicing and payment reconciliation',
      'Real-time revenue recognition and reporting'
    ],
    animation: OrderToCashAnimation,
    color: '#C49A3C',
    link: '/order-to-cash',
  },
  {
    id: 'sales-engagement',
    title: 'Sales and Engagement',
    badge: 'Intelligence Layer',
    badgeIcon: Brain,
    tagline: 'Empower Every Rep with AI Insights',
    description: 'Real-time coaching, forecasting, and engagement tools that help reps close more deals.',
    features: [
      'AI-powered deal insights and next actions',
      'Live pipeline visibility and forecasting',
      'Automated activity tracking and coaching'
    ],
    animation: SalesEngagementAnimation,
    color: '#18B87A',
    link: '/sales-and-engagement',
  },
  {
    id: 'customer-excellence',
    title: 'Customer Excellence',
    badge: 'Context-Aware',
    badgeIcon: Zap,
    tagline: 'Support Connected to the Full Journey',
    description: 'AI-assisted support with complete commercial context for faster, smarter resolutions.',
    features: [
      'Intelligent ticket routing and prioritization',
      'Full customer history and context at fingertips',
      'Automated feedback loops and knowledge base'
    ],
    animation: CustomerExcellenceAnimation,
    color: '#8B5CF6',
    link: '/customer-excellence',
  },
]

export default function Services() {
  return (
    <section style={{ background: 'var(--cream)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        
        .service-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 80px;
          position: relative;
        }
        
        .service-item:last-child {
          margin-bottom: 0;
        }
        
        .service-item:nth-child(even) {
          direction: rtl;
        }
        
        .service-item:nth-child(even) > * {
          direction: ltr;
        }
        
        .service-dashboard {
          position: relative;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
          overflow: hidden;
          min-height: 400px;
          border: 1px solid rgba(0,0,0,0.06);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .service-item:hover .service-dashboard {
          transform: translateY(-8px);
          box-shadow: 0 30px 80px rgba(0,0,0,0.12);
        }
        
        .service-content {
          z-index: 1;
        }
        
        .service-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: rgba(196,154,60,0.1);
          border: 1px solid rgba(196,154,60,0.2);
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          color: var(--gold);
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .service-content h3 {
          font-family: 'Fraunces', serif;
          font-size: 32px;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 8px;
          line-height: 1.2;
        }
        
        .service-tagline {
          font-size: 16px;
          color: var(--ink2);
          margin-bottom: 16px;
          font-weight: 500;
        }
        
        .service-description {
          font-size: 15px;
          color: var(--ink3);
          line-height: 1.7;
          margin-bottom: 24px;
        }
        
        .service-features {
          list-style: none;
          padding: 0;
          margin: 0 0 28px 0;
        }
        
        .service-features li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: var(--ink2);
          line-height: 1.6;
          margin-bottom: 10px;
        }
        
        .service-features li:last-child {
          margin-bottom: 0;
        }
        
        .feature-check {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: rgba(34,197,94,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .learn-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          background: var(--gold);
          color: var(--ink);
          font-size: 15px;
          font-weight: 600;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(196,154,60,0.25);
        }
        
        .learn-more-btn:hover {
          background: #d4a843;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(196,154,60,0.35);
        }
        
        @media (max-width: 900px) {
          .services-container {
            padding: 0 24px;
          }
          
          .service-item {
            grid-template-columns: 1fr;
            gap: 40px;
            margin-bottom: 60px;
          }
          
          .service-item:nth-child(even) {
            direction: ltr;
          }
          
          .service-dashboard {
            min-height: 350px;
          }
          
          .service-content {
            text-align: center;
          }
          
          .service-badge {
            margin-left: auto;
            margin-right: auto;
          }
          
          .service-content h3 {
            font-size: 26px;
          }
          
          .service-tagline {
            font-size: 15px;
          }
          
          .service-description {
            font-size: 14px;
          }
          
          .service-features {
            text-align: left;
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 24px;
          }
        }
      `}</style>

      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(11,22,40,.025) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
      }} />

      <div className="services-container">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 80px' }}>
          <div className="eyebrow eyebrow-dark" style={{ justifyContent: 'center' }}>
            <span className="ey-line" />Solutions
          </div>
          <h2 className="h2 h2-ink" style={{ marginTop: 12, marginBottom: 16 }}>
            One Platform. Every Revenue Motion.
          </h2>
          <p className="lead lead-ink" style={{ margin: '0 auto', fontSize: 16, color: 'var(--ink3)' }}>
            From lead to cash to support—unified intelligence across your entire commercial engine.
          </p>
        </div>

        {/* Service Items */}
        <div className="reveal" style={{ transitionDelay: '.15s' }}>
          {SERVICES.map((service) => {
            const BadgeIcon = service.badgeIcon
            const AnimationComponent = service.animation
            
            return (
              <div key={service.id} className="service-item">
                {/* Animated Dashboard */}
                <div className="service-dashboard">
                  <AnimationComponent />
                </div>
                
                {/* Text Content */}
                <div className="service-content">
                  <div className="service-badge">
                    <BadgeIcon size={14} strokeWidth={2.5} />
                    {service.badge}
                  </div>
                  <h3>{service.title}</h3>
                  <div className="service-tagline">{service.tagline}</div>
                  <p className="service-description">{service.description}</p>
                  
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="feature-check">
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link href={service.link} className="learn-more-btn">
                    Learn More
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
