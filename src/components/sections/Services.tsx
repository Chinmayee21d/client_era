'use client'

import { ArrowRight, Target, TrendingUp, Users, Headphones } from 'lucide-react'

const SERVICES = [
  {
    id: 'lead-management',
    title: 'Lead Management',
    description: 'Our expert team provides detailed lead capture, scoring, and nurturing to help you accurately build your pipeline and understand the full customer journey. Our in-depth research and analysis take into account a variety of factors, including market trends, engagement patterns, and conversion rates.',
    icon: Target,
    color: '#3470F0',
    gradientColor: 'rgba(52,112,240,0.12)',
    link: '/lead-management',
  },
  {
    id: 'order-to-cash',
    title: 'Order to Cash',
    description: 'We use our extensive network and operational expertise to streamline your order-to-cash process to a wide audience. From automated invoicing and payment tracking to targeted revenue recognition, we use a variety of strategies to ensure zero leakage and showcase your efficiency in the best possible light.',
    icon: TrendingUp,
    color: '#C49A3C',
    gradientColor: 'rgba(196,154,60,0.12)',
    link: '/sales-ops',
  },
  {
    id: 'sales-engagement',
    title: 'Sales and Engagement',
    description: 'Our team is available to empower and support sales representatives with AI-powered insights. We understand that your time is valuable, so we work with your schedule to ensure that reps have the tools and intelligence they need while still providing the best possible sales experience.',
    icon: Users,
    color: '#18B87A',
    gradientColor: 'rgba(24,184,122,0.12)',
    link: '/sales-management',
  },
  {
    id: 'customer-excellence',
    title: 'Customer Excellence',
    description: 'Our expert support team delivers context-aware, AI-assisted service connected to the full commercial relationship. Our comprehensive approach and analysis take into account customer history, preferences, and engagement patterns to provide exceptional support experiences.',
    icon: Headphones,
    color: '#8B5CF6',
    gradientColor: 'rgba(139,92,246,0.12)',
    link: '/customer-support',
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
          gap: 80px;
          align-items: center;
          margin-bottom: 100px;
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
        
        .service-image-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .gradient-blob {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.6;
          z-index: 0;
        }
        
        .service-item:nth-child(odd) .gradient-blob {
          left: -100px;
          background: radial-gradient(circle, var(--gradient-color) 0%, transparent 70%);
        }
        
        .service-item:nth-child(even) .gradient-blob {
          right: -100px;
          background: radial-gradient(circle, var(--gradient-color) 0%, transparent 70%);
        }
        
        .service-icon-circle {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: var(--gradient-color);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
        }
        
        .service-icon-inner {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .service-content {
          z-index: 1;
        }
        
        .service-content h3 {
          font-family: 'Fraunces', serif;
          font-size: 28px;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 16px;
          line-height: 1.3;
        }
        
        .service-content p {
          font-size: 15px;
          color: var(--ink3);
          line-height: 1.75;
          margin-bottom: 28px;
        }
        
        .learn-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          background: var(--gold);
          color: var(--ink);
          font-size: 15px;
          font-weight: 600;
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(196,154,60,0.2);
        }
        
        .learn-more-btn:hover {
          background: #d4a843;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(196,154,60,0.3);
        }
        
        @media (max-width: 900px) {
          .services-container {
            padding: 0 24px;
          }
          
          .service-item {
            grid-template-columns: 1fr;
            gap: 40px;
            margin-bottom: 80px;
          }
          
          .service-item:nth-child(even) {
            direction: ltr;
          }
          
          .gradient-blob {
            width: 350px;
            height: 350px;
            left: 50% !important;
            right: auto !important;
            transform: translateX(-50%);
          }
          
          .service-icon-circle {
            width: 240px;
            height: 240px;
          }
          
          .service-icon-inner {
            width: 120px;
            height: 120px;
          }
          
          .service-content {
            text-align: center;
          }
          
          .service-content h3 {
            font-size: 24px;
          }
          
          .service-content p {
            font-size: 14px;
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
            <span className="ey-line" />Our Services
          </div>
          <h2 className="h2 h2-ink" style={{ marginTop: 12, marginBottom: 16 }}>
            How We Help You
          </h2>
          <p className="lead lead-ink" style={{ margin: '0 auto', fontSize: 16, color: 'var(--ink3)' }}>
            Our team of experts is dedicated to helping you achieve your commercial goals.
          </p>
        </div>

        {/* Service Items */}
        <div className="reveal" style={{ transitionDelay: '.15s' }}>
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="service-item"
              style={{
                '--gradient-color': service.gradientColor,
              } as React.CSSProperties}
            >
              {/* Image Area with Gradient Blob */}
              <div className="service-image-wrapper">
                <div className="gradient-blob" />
                <div className="service-icon-circle">
                  <div className="service-icon-inner">
                    <service.icon size={56} strokeWidth={1.5} style={{ color: service.color }} />
                  </div>
                </div>
              </div>
              
              {/* Text Content */}
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href={service.link} className="learn-more-btn">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
