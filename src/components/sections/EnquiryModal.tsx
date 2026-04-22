'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Loader2, Mail, Building2, User, ArrowRight, ShieldCheck, ChevronLeft, Globe } from 'lucide-react';
import { initiateEnquiry, verifyAndSubmitEnquiry } from '@/app/actions/enquiry';
import { useAnalytics } from '@/hooks/useAnalytics';

type Step = 'selection' | 'form' | 'verify' | 'success';
type Role = 'business' | 'enterprise' | 'ca';

export default function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const wasOpen = useRef(false);
  const [step, setStep] = useState<Step>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formTouched = useRef(false);
  const { logFormStart, logFormSubmit, logFormError, logCTA } = useAnalytics('Enquiry Modal');
  
  // Verification State
  const [pendingToken, setPendingToken] = useState<string | null>(null);
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);
  const [userEmail, setUserEmail] = useState('');
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      wasOpen.current = true;
    } else {
      document.body.style.overflow = '';
      // Only dispatch close event if it was actually open before
      if (wasOpen.current) {
        window.dispatchEvent(new Event('enquiry-modal-closed'));
        wasOpen.current = false;
      }
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Auto-open when navigated directly to /enquiry (avoids race condition with event dispatch)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.pathname === '/enquiry') {
      setIsOpen(true);
      setStep('form');
      setError(null);
      setOtpDigits(['', '', '', '', '', '']);
      formTouched.current = false;
      logCTA('Open Enquiry Modal', 'Enquiry Modal - Direct Route');
    }
  }, [logCTA]);

  // Also support programmatic open via event (e.g. from CTAs on other pages)
  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setStep('form');
      setError(null);
      setOtpDigits(['', '', '', '', '', '']);
      formTouched.current = false;
      logCTA('Open Enquiry Modal', 'Enquiry Modal');
    };
    window.addEventListener('open-enquiry-modal', handleOpen);
    return () => window.removeEventListener('open-enquiry-modal', handleOpen);
  }, [logCTA]);



  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    setUserEmail(email);

    const data = {
      name: formData.get('name') as string,
      email: email,
      company: formData.get('company') as string,
      message: (formData.get('message') as string) || 'Interested in a demo.',
    };

    // Track form submission attempt
    logFormSubmit('demo_request', false);

    const result = await initiateEnquiry(data);

    setIsSubmitting(false);
    if (result.ok && result.pendingToken) {
      setPendingToken(result.pendingToken);
      setStep('verify');
    } else {
      setError(result.error || 'Failed to send verification code.');
      logFormError('demo_request', 'submission_failed');
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newDigits = [...otpDigits];
    newDigits[index] = value;
    setOtpDigits(newDigits);

    // Auto-focus next
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const otp = otpDigits.join('');
    if (otp.length !== 6) {
      setError('Please enter the full 6-digit code.');
      logFormError('demo_request', 'otp_incomplete');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const result = await verifyAndSubmitEnquiry(otp, pendingToken || '');

    setIsSubmitting(false);
    if (result.ok) {
      setStep('success');
      // 🎯 This is the most important event — full form completion
      logFormSubmit('demo_request', true);
    } else {
      setError(result.error || 'Invalid or expired code.');
      logFormError('demo_request', 'otp_invalid');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 20 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
          <div 
            className="ce-modal-overlay"
            style={{
              position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
              padding: '40px 24px', background: 'rgba(7, 14, 28, 0.85)', backdropFilter: 'blur(16px)',
              overflowY: 'auto'
            }}
            onClick={() => setIsOpen(false)}
          >
          <div className="ce-modal-wrapper" style={{ width: '100%', maxWidth: '960px', transition: 'max-width 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>
            

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="ce-modal-glass"
              style={{ borderRadius: '24px', position: 'relative', overflow: 'hidden' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                style={{ position: 'absolute', right: '20px', top: '20px', background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '8px', zIndex: 50, padding: '8px', color: 'var(--text3)', cursor: 'pointer' }}
              >
                <X size={18} />
              </button>

              <style>{`
                .ce-modal-grid {
                  display: grid;
                  grid-template-columns: 1fr 1.05fr;
                  min-height: 540px;
                }
                @media (max-width: 900px) {
                  .ce-modal-grid {
                    grid-template-columns: 1fr;
                  }
                  .ce-modal-context {
                    display: none;
                  }
                }
                .ce-input-glow:focus-within {
                  border-color: var(--gold) !important;
                  box-shadow: 0 0 15px rgba(196, 154, 60, 0.1);
                  background: rgba(255, 255, 255, 0.05) !important;
                }
              `}</style>

              <div className="ce-modal-grid">
                {/* Left Panel - Context (Brand/Preview) */}
                <div className="ce-modal-context" style={{ padding: '48px 40px', borderRight: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.01)', display: 'flex', flexDirection: 'column' }}>
                  <div className="ce-hero-eyebrow" style={{ margin: '0 0 16px 0', opacity: 1, animation: 'none' }}>
                    <span className="ey-line" />
                    The Intelligence Era
                  </div>
                  <h2 className="h3" style={{ fontSize: '32px', marginBottom: '20px', letterSpacing: '-0.8px', lineHeight: 1.15 }}>One System.<br />Every Deal.<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>Zero Gaps.</em></h2>
                  <p style={{ color: 'var(--text2)', fontSize: '14px', lineHeight: 1.6, marginBottom: '28px' }}>
                    ClientEra unifies Marketing, Sales, Operations, and Customer Service into a single AI intelligence layer.
                  </p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <ContextItem icon={<ShieldCheck size={20} />} title="Morning Intelligence" desc="AI Digest converts opens and target tracking into a plain-language briefing." />
                    <ContextItem icon={<Globe size={20} />} title="Unified Lifecycle" desc="One timeline for the entire commercial pipeline — from campaign touch to final payment." />
                  </div>

                  <div style={{ marginTop: 'auto', paddingTop: '40px' }}>
                    <div style={{ padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--gold)', fontWeight: 700 }}>Security Protocol</span>
                      <div style={{ marginTop: '6px', fontSize: '14px', color: '#fff', fontWeight: 500 }}>Email verification required to access live site</div>
                    </div>
                  </div>
                </div>

                {/* Right Panel - Interaction */}
                <div style={{ padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <AnimatePresence mode="wait">
                    {step === 'form' && (
                      <motion.div key="form" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
                        <div className="ce-hero-eyebrow" style={{ margin: '0 0 12px 0' }}>
                          <span className="ey-line" />
                          Book a Demo
                        </div>
                        <h3 className="h3" style={{ marginBottom: '8px', fontSize: '24px' }}>Join the <span style={{ color: 'var(--gold)' }}>Intelligence Era</span></h3>
                        <p style={{ color: 'var(--text2)', fontSize: '14px', marginBottom: '24px' }}>Complete your details to request a personalized walk-through.</p>
                        
                        <form
                          onSubmit={handleFormSubmit}
                          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                          onFocus={() => {
                            if (!formTouched.current) {
                              formTouched.current = true;
                              logFormStart('demo_request');
                            }
                          }}
                        >
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <InputField label="Full Name" name="name" icon={<User size={16} />} placeholder="Your full name" required />
                            <InputField label="Company" name="company" icon={<Building2 size={16} />} placeholder="Company name" required />
                          </div>
                          <InputField label="Work Email" name="email" type="email" icon={<Mail size={16} />} placeholder="work@email.com" required />
                          
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '1px' }}>Message (Optional)</label>
                            <textarea 
                              name="message"
                              placeholder="How can we help?"
                              rows={3}
                              style={{
                                width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '12px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none', resize: 'none'
                              }}
                            />
                          </div>

                          {error && <div style={{ color: 'var(--red)', fontSize: '13px' }}>{error}</div>}
                          <button disabled={isSubmitting} className="btn-gold" style={{ width: '100%', justifyContent: 'center', height: '52px', borderRadius: '12px', marginTop: '8px' }}>
                            {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <>Book My Live Demo <ArrowRight size={18} style={{ marginLeft: '8px' }} /></>}
                          </button>
                        </form>
                      </motion.div>
                    )}

                    {step === 'verify' && (
                      <motion.div key="verify" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} style={{ textAlign: 'center' }}>
                        <div className="ce-hero-eyebrow" style={{ margin: '0 0 12px 0', justifyContent: 'center' }}>
                          <span className="ey-line" />
                          Email Verification
                        </div>
                        <h3 className="h3" style={{ marginBottom: '12px', fontSize: '28px' }}>Join the <span style={{ color: 'var(--gold)' }}>Intelligence Era</span></h3>
                        <p style={{ color: 'var(--text2)', fontSize: '14px', marginBottom: '32px' }}>
                          We sent a 6-digit verification code to <br /><strong style={{ color: 'var(--gold)' }}>{userEmail}</strong>. Enter it below to confirm.
                        </p>

                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '32px' }}>
                          {otpDigits.map((digit, i) => (
                            <input
                              key={i}
                              ref={(el) => { otpRefs.current[i] = el; }}
                              type="text"
                              maxLength={1}
                              value={digit}
                              onChange={(e) => handleOtpChange(i, e.target.value)}
                              onKeyDown={(e) => handleOtpKeyDown(i, e)}
                              style={{
                                width: '48px', height: '56px', textAlign: 'center', fontSize: '20px', fontWeight: 600,
                                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '10px', color: '#fff', outline: 'none', transition: 'all 0.2s',
                              }}
                              onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                            />
                          ))}
                        </div>

                        {error && <div style={{ color: 'var(--red)', fontSize: '13px', marginBottom: '16px' }}>{error}</div>}
                        
                        <p style={{ fontSize: '13px', color: 'var(--text3)', marginBottom: '32px' }}>
                          Enter the verification code sent to your email.
                        </p>

                        <button onClick={handleVerifyOtp} disabled={isSubmitting} className="btn-gold" style={{ width: '100%', justifyContent: 'center', height: '52px', borderRadius: '12px' }}>
                          {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : 'Confirm Verification'}
                        </button>

                        <button 
                          type="button" 
                          onClick={() => setStep('form')} 
                          style={{ background: 'none', border: 'none', color: 'var(--text3)', fontSize: '13px', marginTop: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', margin: '24px auto 0' }}
                        >
                          <ChevronLeft size={14} /> Back to details
                        </button>
                      </motion.div>
                    )}

                    {step === 'success' && (
                      <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center' }}>
                        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(24, 184, 122, 0.1)', color: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto' }}>
                          <CheckCircle2 size={32} />
                        </div>
                        <h3 className="h3" style={{ marginBottom: '12px', fontSize: '28px' }}>Verified & Booked!</h3>
                        <p style={{ color: 'var(--text2)', fontSize: '15px', lineHeight: 1.6, marginBottom: '32px' }}>
                          A specialist will reach out to <strong>{userEmail}</strong> within 24 hours to schedule your walk-through.
                        </p>
                        <button onClick={() => setIsOpen(false)} className="btn-gold" style={{ width: '100%', justifyContent: 'center', height: '52px', borderRadius: '12px' }}>Done</button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}


function ContextItem({ icon, title, desc }: any) {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', flexShrink: 0 }}>
        {icon}
      </div>
      <div>
        <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>{title}</h4>
        <p style={{ fontSize: '13px', color: 'var(--text3)', lineHeight: 1.5 }}>{desc}</p>
      </div>
    </div>
  );
}


function InputField({ label, icon, ...props }: any) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</label>
      <div className="ce-input-glow" style={{ position: 'relative', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', transition: 'all 0.2s' }}>
        <div style={{ position: 'absolute', left: '16px', top: '14px', color: 'var(--text3)' }}>{icon}</div>
        <input {...props} style={{
          width: '100%', background: 'none', border: 'none',
          padding: '12px 16px 12px 44px', color: '#fff', fontSize: '14px', outline: 'none'
        }} />
      </div>
    </div>
  );
}
