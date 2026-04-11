'use server';

import { sendMail } from '@/lib/mailer';
import { signData, verifyData } from '@/lib/tokens';

// Defaults
const SALES_RECIPIENT = process.env.SALES_EMAIL || 'sales@clientera.io';

function getOTPSecret(): string {
  const secret = process.env.OTP_SECRET;
  if (!secret) {
    throw new Error('OTP_SECRET environment variable is required');
  }
  return secret;
}

export interface EnquiryData {
  name: string;
  email: string;
  company: string;
  message: string;
}

/**
 * STEP 1: Initiate the enquiry by sending a verification OTP
 */
export async function initiateEnquiry(data: EnquiryData) {
  if (!data.name || !data.email || !data.company) {
    return { ok: false, error: 'Please fill in all required fields.' };
  }

  try {
    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Sign the data + otp into a token (expires in 10 mins)
    const token = await signData({ ...data, otp }, getOTPSecret(), 10);

    // Build OTP Email HTML
    const otpEmailHtml = `
      <div style="background-color: #fcf9f2; padding: 40px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <div style="max-width: 500px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 15px 40px rgba(11, 22, 40, 0.12); border: 1px solid #e2e8f0;">
          <div style="background-color: #0b1628; padding: 30px 20px; text-align: center;">
             <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td style="color: #ffffff; font-family: 'Georgia', serif; font-size: 28px; line-height: 1.2;">client<span style="color: #c49a3c; font-style: italic;">era</span></td>
              </tr>
            </table>
          </div>
          <div style="padding: 40px 30px; text-align: center;">
            <h2 style="color: #0f172a; font-size: 22px; margin-bottom: 24px; font-weight: 700;">Verify your email</h2>
            <p style="color: #475569; font-size: 15px; line-height: 1.6; margin-bottom: 30px;">
              Enter the following code to finalize your demo request for <strong>ClientEra</strong>.
            </p>
            <div style="background-color: #f8fafc; border: 1px dashed #c49a3c; padding: 20px; border-radius: 12px; display: inline-block;">
              <span style="font-size: 32px; font-weight: 800; letter-spacing: 8px; color: #0b1628;">${otp}</span>
            </div>
            <p style="color: #94a3b8; font-size: 12px; margin-top: 30px;">
              This code will expire in 10 minutes.
            </p>
          </div>
        </div>
      </div>
    `;

    // Send OTP email
    await sendMail({
      to: data.email,
      subject: `${otp} is your ClientEra verification code`,
      html: otpEmailHtml,
    });

    return { ok: true, pendingToken: token };
  } catch (error: any) {
    console.error('[initiateEnquiry] Error:', error);
    return { ok: false, error: 'Failed to send verification code. Please try again.' };
  }
}

/**
 * STEP 2: Verify the OTP and submit the final enquiry
 */
export async function verifyAndSubmitEnquiry(userInputOtp: string, pendingToken: string) {
  if (!userInputOtp || !pendingToken) {
    return { ok: false, error: 'Verification data missing.' };
  }

  try {
    // 1. Verify the token
    const decoded = await verifyData(pendingToken, getOTPSecret());
    if (!decoded) {
      return { ok: false, error: 'Verification link expired or invalid. Please try again.' };
    }

    // 2. Check OTP
    if (userInputOtp !== decoded.otp) {
      return { ok: false, error: 'Incorrect verification code. Please check and try again.' };
    }

    // 3. Final submission logic (Original Logic)
    const { otp, expires, ...data } = decoded; // Extract original data
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://clientera.ai';
    const displayMessage = data.message && data.message.trim() !== '' ? data.message : 'No specific message provided.';

    // BUILD FINAL EMAILS
    const salesHtml = buildSalesEmailHtml(data, displayMessage);
    const customerHtml = buildCustomerEmailHtml(data, siteUrl);

    // Send Emails in parallel
    const [salesResult] = await Promise.all([
      sendMail({
        to: SALES_RECIPIENT,
        replyTo: data.email,
        subject: `[Lead] Demo Request: ClientEra (${data.name})`,
        html: salesHtml,
      }),
      sendMail({
        to: data.email,
        subject: "Welcome to the Intelligence Era - ClientEra Demo Request",
        html: customerHtml,
      })
    ]);

    if (!salesResult.ok) {
      throw new Error(salesResult.error || 'Failed to send sales notification.');
    }

    return { ok: true };
  } catch (error: any) {
    console.error('[verifyAndSubmitEnquiry] Error:', error);
    return { ok: false, error: 'Verification failed. Please try again.' };
  }
}

/**
 * HELPER: Build Internal Sales Email
 */
function buildSalesEmailHtml(data: any, displayMessage: string) {
  
  return `
    <div style="background-color: #fcf9f2; padding: 40px 20px;">
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 15px 40px rgba(11, 22, 40, 0.12); border: 1px solid #e2e8f0;">
        <div style="background-color: #0b1628; padding: 30px 20px; text-align: center; border-bottom: 4px solid #c49a3c;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td style="color: #ffffff; font-family: 'Georgia', serif; font-size: 30px; line-height: 1.2;">client<span style="color: #c49a3c; font-style: italic;">era</span></td>
            </tr>
          </table>
          <p style="color: #ffffff; margin: 8px 0 0 0; text-transform: uppercase; letter-spacing: 2px; font-size: 11px; font-weight: 700; opacity: 0.9;">Sales Notification Panel</p>
        </div>
        <div style="padding: 40px 30px;">
          <h2 style="color: #0b1628; font-size: 18px; margin-bottom: 24px; font-weight: 700;">Opportunity Registered (Verified)</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
            <tr><td style="padding: 12px 0; color: #64748b; font-size: 13px; border-bottom: 1px solid #f1f5f9; width: 120px;">Contact</td><td style="padding: 12px 0; color: #0f172a; font-size: 15px; font-weight: 600; border-bottom: 1px solid #f1f5f9;">${data.name}</td></tr>
            <tr><td style="padding: 12px 0; color: #64748b; font-size: 13px; border-bottom: 1px solid #f1f5f9;">Email</td><td style="padding: 12px 0; color: #0f172a; font-size: 15px; font-weight: 600; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${data.email}" style="color: #c49a3c; text-decoration: none;">${data.email}</a></td></tr>
            <tr><td style="padding: 12px 0; color: #64748b; font-size: 13px; border-bottom: 1px solid #f1f5f9;">Organization</td><td style="padding: 12px 0; color: #0f172a; font-size: 15px; font-weight: 600; border-bottom: 1px solid #f1f5f9;">${data.company}</td></tr>
          </table>
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 25px;">
            <p style="margin: 0 0 10px 0; color: #0b1628; font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Message Brief</p>
            <div style="color: #334155; font-size: 15px; line-height: 1.6;">${displayMessage}</div>
          </div>
        </div>
        <div style="padding: 20px 30px; background-color: #0b1628; color: #94a3b8; font-size: 11px; text-align: center;">
          Sent via ClientEra Marketing Engine &bull; ${new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  `;
}

/**
 * HELPER: Build Customer Welcome Email
 */
function buildCustomerEmailHtml(data: any, siteUrl: string) {
  return `
    <div style="background-color: #fcf9f2; padding: 40px 20px;">
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 15px 40px rgba(11, 22, 40, 0.12); border: 1px solid #e2e8f0;">
        <div style="background-color: #0b1628; padding: 50px 20px; text-align: center;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td style="color: #ffffff; font-family: 'Georgia', serif; font-size: 38px; line-height: 1.2;">client<span style="color: #c49a3c; font-style: italic;">era</span></td>
            </tr>
          </table>
          <p style="color: #ffffff; font-size: 12px; margin: 12px 0 0 0; text-transform: uppercase; letter-spacing: 4px; font-weight: 700; opacity: 1;">THE INTELLIGENCE ERA</p>
        </div>
        <div style="padding: 50px 40px; text-align: center;">
          <h1 style="color: #0f172a; font-size: 28px; margin-bottom: 16px; font-weight: 700;">Step inside the engine, ${data.name.split(' ')[0]}!</h1>
          <p style="color: #475569; font-size: 17px; line-height: 1.8; margin-bottom: 35px;">
            Thanks for reaching out. We've received your request for a demo and our team is already reviewing your details. We can't wait to show you how ClientEra unifies your commercial ecosystem.
          </p>
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 30px; border-radius: 16px; margin-bottom: 40px; text-align: left;">
            <p style="margin: 0 0 15px 0; color: #0b1628; font-weight: 700; font-size: 15px;">Next Steps:</p>
            <ul style="margin: 0; padding-left: 20px; color: #64748b; font-size: 14px; line-height: 1.7;">
              <li style="margin-bottom: 12px;">A solution expert will reach out within 24 business hours.</li>
              <li>We will schedule a personalized walk-through based on your organization.</li>
            </ul>
          </div>
          <a href="${siteUrl}" style="display: inline-block; background-color: #c49a3c; color: #ffffff; padding: 18px 40px; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 15px; box-shadow: 0 8px 20px rgba(196, 154, 60, 0.25);">
            Visit Our Website
          </a>
        </div>
        <div style="padding: 30px; background-color: #f8fafc; text-align: center; border-top: 1px solid #f1f5f9;">
          <p style="margin: 0; font-size: 12px; color: #94a3b8;">
            &copy; ${new Date().getFullYear()} ClientEra. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  `;
}
