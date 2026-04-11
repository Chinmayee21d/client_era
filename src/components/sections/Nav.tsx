'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ChevronDown, BarChart3, Target, UserPlus, HelpCircle, ArrowRight, Menu, X, Sparkles } from 'lucide-react'

const SOLUTIONS = [
  { 
    href: '/lead-management', 
    label: 'Lead Management', 
    icon: UserPlus,
    color: '#3470F0'
  },
  { 
    href: '/sales-ops', 
    label: 'Order to Cash', 
    icon: BarChart3,
    color: '#C49A3C'
  },
  { 
    href: '/sales-management', 
    label: 'Sales and Engagement', 
    icon: Target,
    color: '#18B87A'
  },
  { 
    href: '/customer-support', 
    label: 'Customer Excellence', 
    icon: HelpCircle,
    color: '#9C40F0'
  },
]

const OTHER_LINKS = [
  { href: '/#ai-layer', label: 'AI Layer' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#comparison', label: 'Why ClientEra' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const closeMenu = () => {
    setOpen(false)
    setDropdownOpen(false)
  }

  return (
    <>
      <nav 
        id="ce-nav" 
        style={{ 
          background: scrolled ? 'rgba(11, 22, 40, 0.92)' : 'rgba(11, 22, 40, 0.4)',
          backdropFilter: 'blur(24px) saturate(1.8)',
          borderBottom: `1.5px solid ${scrolled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)'}`,
          height: scrolled ? '64px' : '72px',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'fixed',
          top: 0, left: 0, right: 0, zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 clamp(24px, 5vw, 84px)'
        }}
      >
        {/* Logo */}
        <Link href="/" className="ce-nav-logo" style={{ 
          fontSize: 26, letterSpacing: '-0.8px', transition: 'transform 0.3s' 
        }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
          client<em style={{ color: 'var(--gold)', fontStyle: 'italic', fontWeight: 300 }}>era</em>
        </Link>

        {/* Desktop Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="nav-desktop">
          <ul style={{ display: 'flex', gap: 4, listStyle: 'none' }}>
            {OTHER_LINKS.map(l => (
              <li key={l.href}>
                <Link 
                  href={l.href}
                  style={{
                    fontSize: 13, color: 'var(--text2)', padding: '8px 16px', borderRadius: 10,
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.background = 'transparent' }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div 
            ref={dropdownRef}
            style={{ position: 'relative' }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '8px 16px', borderRadius: 10,
                fontSize: 13, fontWeight: 500, color: dropdownOpen ? 'var(--text)' : 'var(--text2)',
                background: dropdownOpen ? 'rgba(255,255,255,0.06)' : 'transparent',
                border: 'none', cursor: 'pointer', transition: 'all 0.3s'
              }}
            >
              Solutions
              <ChevronDown size={14} style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
            </button>

            {/* Dropdown Menu */}
            <div style={{
              position: 'absolute', top: '100%', right: '0', transform: 'none',
              paddingTop: '12px',
              width: 260, 
              opacity: dropdownOpen ? 1 : 0, pointerEvents: dropdownOpen ? 'all' : 'none',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)', 
              visibility: dropdownOpen ? 'visible' : 'hidden',
              zIndex: 1001
            }}>
              <div style={{
                background: 'rgba(11, 21, 38, 0.98)',
                borderRadius: 22, border: '1.5px solid var(--border2)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
                padding: '12px', display: 'flex', flexDirection: 'column', gap: 4,
                backdropFilter: 'blur(30px)'
              }}>
                {SOLUTIONS.map((s, i) => (
                  <Link 
                    key={i} 
                    href={s.href} 
                    onClick={() => setDropdownOpen(false)}
                    style={{
                      padding: '10px 14px', borderRadius: 12, textDecoration: 'none',
                      display: 'flex', alignItems: 'center', gap: 12,
                      background: 'transparent',
                      border: '1px solid transparent',
                      transition: 'all 0.2s ease'
                    }}
                    className="nav-dropdown-item"
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.borderColor = `${s.color}20`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = 'transparent';
                    }}
                  >
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: `${s.color}15`, color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <s.icon size={15} />
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{s.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop CTAs */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }} className="nav-desktop">
          <a href="#" className="btn-ghost" style={{ padding: '8px 20px', fontSize: 13 }}>Log in</a>
          <button 
            onClick={() => window.dispatchEvent(new Event('open-enquiry-modal'))}
            className="btn-gold" 
            style={{ padding: '8px 22px', fontSize: 13, cursor: 'pointer', border: 'none' }}
          >
            Book a Demo
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'none', background: 'rgba(255,255,255,0.05)',
            border: '1.5px solid var(--border)', borderRadius: 10,
            width: 44, height: 44, cursor: 'pointer', color: 'var(--text2)',
            transition: 'all 0.2s', alignItems: 'center', justifyContent: 'center'
          }}
          className="nav-mobile-btn"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        onClick={closeMenu}
        style={{ 
          position: 'fixed', inset: 0, zIndex: 1100, background: 'rgba(7, 14, 28, 0.75)', backdropFilter: 'blur(8px)',
          opacity: open ? 1 : 0, pointerEvents: open ? 'all' : 'none', transition: 'opacity 0.4s'
        }} 
      />

      {/* Mobile Drawer */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 1200, width: 'min(88vw, 380px)',
        background: 'var(--navy2)', borderLeft: '1.5px solid var(--border2)',
        transform: `translateX(${open ? '0' : '100%'})`,
        transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex', flexDirection: 'column', overflowY: 'auto'
      }}>
        <div style={{ padding: '24px 32px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="ce-nav-logo" style={{ fontSize: 24 }}>client<em>era</em></span>
          <button onClick={closeMenu} style={{ background: 'none', border: 'none', color: 'var(--text3)', cursor: 'pointer' }}><X size={24} /></button>
        </div>

        <div style={{ padding: '32px' }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 20 }}>Unified Solutions</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {SOLUTIONS.map((s, i) => (
              <Link 
                key={i} href={s.href} onClick={closeMenu}
                style={{ 
                  display: 'flex', gap: 16, textDecoration: 'none', padding: '12px 16px', borderRadius: 14,
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${s.color}15`, color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <s.icon size={20} />
                </div>
                <div style={{ alignSelf: 'center' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>{s.label}</div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 40 }}>
            <p style={{ fontSize: 10, fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>More</p>
            {OTHER_LINKS.map(l => (
              <Link 
                key={l.href} href={l.href} onClick={closeMenu}
                style={{ display: 'block', padding: '12px 0', fontSize: 16, color: 'var(--text2)', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.05)' }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 'auto', padding: '32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <a href="#" className="btn-ghost" style={{ justifyContent: 'center', padding: '14px' }}>Log in</a>
          <button 
            onClick={() => { closeMenu(); window.dispatchEvent(new Event('open-enquiry-modal')); }}
            className="btn-gold" 
            style={{ justifyContent: 'center', padding: '14px', cursor: 'pointer', border: 'none' }}
          >
            Book a Demo
          </button>
        </div>
      </div>
    </>
  )
}