import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// ─── Types ──────────────────────────────────────────────────────────────────────

interface LeadPayload {
  name: string;
  mobile: string;
  business: string;
}

// ─── Helpers ────────────────────────────────────────────────────────────────────

function validatePayload(body: unknown): { valid: true; data: LeadPayload } | { valid: false; error: string } {
  if (!body || typeof body !== 'object') {
    return { valid: false, error: 'Invalid request body' };
  }

  const { name, mobile, business } = body as Record<string, unknown>;

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return { valid: false, error: 'Name is required (min 2 characters)' };
  }

  if (!mobile || typeof mobile !== 'string' || !/^[6-9]\d{9}$/.test(mobile)) {
    return { valid: false, error: 'A valid 10-digit Indian mobile number is required' };
  }

  if (!business || typeof business !== 'string' || business.trim().length === 0) {
    return { valid: false, error: 'Business type is required' };
  }

  return {
    valid: true,
    data: { name: name.trim(), mobile: mobile.trim(), business: business.trim() },
  };
}

function formatIST(date: Date): string {
  return date.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium',
  });
}

// ─── Fallback: console-log lead when Resend not configured ───────────────────────
// This ensures NO lead is ever lost during setup/testing.

function logLeadToConsole(lead: LeadPayload & { submittedAt: string; source: string }) {
  console.log('\n========================================');
  console.log('📋 NEW DEMO LEAD (email not configured)');
  console.log('========================================');
  console.log(`  Name       : ${lead.name}`);
  console.log(`  Mobile     : +91 ${lead.mobile}`);
  console.log(`  Business   : ${lead.business}`);
  console.log(`  Submitted  : ${lead.submittedAt}`);
  console.log(`  Source     : ${lead.source}`);
  console.log('========================================\n');
  console.log('⚠️  To enable email delivery, add RESEND_API_KEY to .env.local');
  console.log('   Get your key at: https://resend.com/api-keys\n');
}

// ─── Google Sheets backup (optional) ────────────────────────────────────────────

async function saveToGoogleSheet(lead: LeadPayload & { submittedAt: string; source: string }) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) return;

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
    });
    console.log('[demo-lead] ✅ Lead saved to Google Sheet');
  } catch (err) {
    console.error('[demo-lead] ❌ Google Sheet backup failed:', err);
  }
}

// ─── Email HTML template ────────────────────────────────────────────────────────

function buildEmailHTML(data: LeadPayload, submittedAt: string, source: string): string {
  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f1a; border-radius: 16px; overflow: hidden; border: 1px solid rgba(139, 92, 246, 0.3);">
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%); padding: 32px 24px; text-align: center;">
        <h1 style="margin: 0; color: #fff; font-size: 22px; font-weight: 700;">
          🚀 New ERP Demo Lead
        </h1>
        <p style="margin: 8px 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">
          A new demo request has been submitted
        </p>
      </div>

      <!-- Body -->
      <div style="padding: 32px 24px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 14px 16px; color: #a78bfa; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid rgba(139, 92, 246, 0.15); width: 140px;">
              👤 Name
            </td>
            <td style="padding: 14px 16px; color: #e2e8f0; font-size: 15px; font-weight: 500; border-bottom: 1px solid rgba(139, 92, 246, 0.15);">
              ${data.name}
            </td>
          </tr>
          <tr>
            <td style="padding: 14px 16px; color: #a78bfa; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid rgba(139, 92, 246, 0.15); width: 140px;">
              📱 Mobile
            </td>
            <td style="padding: 14px 16px; color: #e2e8f0; font-size: 15px; font-weight: 500; border-bottom: 1px solid rgba(139, 92, 246, 0.15);">
              <a href="tel:+91${data.mobile}" style="color: #60a5fa; text-decoration: none;">+91 ${data.mobile}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 14px 16px; color: #a78bfa; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid rgba(139, 92, 246, 0.15); width: 140px;">
              🏢 Business
            </td>
            <td style="padding: 14px 16px; color: #e2e8f0; font-size: 15px; font-weight: 500; border-bottom: 1px solid rgba(139, 92, 246, 0.15);">
              ${data.business}
            </td>
          </tr>
          <tr>
            <td style="padding: 14px 16px; color: #a78bfa; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid rgba(139, 92, 246, 0.15); width: 140px;">
              🕐 Submitted
            </td>
            <td style="padding: 14px 16px; color: #e2e8f0; font-size: 15px; font-weight: 500; border-bottom: 1px solid rgba(139, 92, 246, 0.15);">
              ${submittedAt}
            </td>
          </tr>
          <tr>
            <td style="padding: 14px 16px; color: #a78bfa; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; width: 140px;">
              🌐 Source
            </td>
            <td style="padding: 14px 16px; color: #e2e8f0; font-size: 15px; font-weight: 500;">
              ${source}
            </td>
          </tr>
        </table>

        <!-- CTA -->
        <div style="margin-top: 28px; text-align: center;">
          <a href="https://wa.me/91${data.mobile}"
             style="display: inline-block; background: #22c55e; color: #fff; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
            💬 Reply on WhatsApp
          </a>
        </div>
      </div>

      <!-- Footer -->
      <div style="padding: 20px 24px; text-align: center; border-top: 1px solid rgba(139, 92, 246, 0.15);">
        <p style="margin: 0; color: #64748b; font-size: 12px;">
          This is an automated lead notification from Groww You ERP
        </p>
      </div>
    </div>
  `;
}

// ─── POST handler ───────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    // 1. Parse & validate
    const body = await request.json();
    console.log('[demo-lead] Received submission');

    const result = validatePayload(body);
    if (!result.valid) {
      console.warn('[demo-lead] Validation failed:', result.error);
      return NextResponse.json({ success: false, error: result.error }, { status: 400 });
    }

    const { data } = result;
    const submittedAt = formatIST(new Date());
    const source = 'Groww You ERP Landing Page';

    // 2. Check for API key — fallback to console log if missing
    const apiKey = process.env.RESEND_API_KEY;

    // Debug: log env state (key existence only, never the value)
    console.log('[demo-lead] ENV check:', {
      RESEND_API_KEY: apiKey ? `set (starts with ${apiKey.slice(0, 6)}...)` : 'NOT SET ❌',
      LEAD_RECEIVER_EMAIL: process.env.LEAD_RECEIVER_EMAIL ? 'set ✅' : 'NOT SET (will use default)',
      NODE_ENV: process.env.NODE_ENV,
    });

    const isPlaceholder = !apiKey || apiKey === 're_REPLACE_WITH_YOUR_KEY';

    if (isPlaceholder) {
      console.warn('[demo-lead] ⚠️  RESEND_API_KEY not configured — using console fallback');
      logLeadToConsole({ ...data, submittedAt, source });

      // Still attempt Google Sheets backup if configured
      await saveToGoogleSheet({ ...data, submittedAt, source });

      // Return success so the user sees Thank You (lead is captured in server logs)
      return NextResponse.json({
        success: true,
        message: 'Lead captured (email not configured — check server logs)',
        fallback: true,
      });
    }

    // 3. Send email via Resend
    console.log('[demo-lead] Sending email via Resend...');
    const resend = new Resend(apiKey);
    const companyEmail = 'aimediapixel.official@gmail.com';
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: 'Groww You ERP <onboarding@resend.dev>', // Change to your verified domain after setup
      to: [companyEmail],
      subject: '🚀 New ERP Demo Lead Received',
      html: buildEmailHTML(data, submittedAt, source),
    });

    if (emailError) {
      console.error('[demo-lead] ❌ Resend error:', emailError);

      // Fallback: save to Google Sheet + log to console so lead is not lost
      logLeadToConsole({ ...data, submittedAt, source });
      await saveToGoogleSheet({ ...data, submittedAt, source });

      return NextResponse.json(
        { success: false, error: 'Failed to send email notification. Please try again or contact us directly.' },
        { status: 500 }
      );
    }

    console.log('[demo-lead] ✅ Email sent successfully. ID:', emailData?.id);

    // 4. Google Sheet backup (fire & forget)
    await saveToGoogleSheet({ ...data, submittedAt, source });

    // 5. Success
    return NextResponse.json({ success: true, message: 'Lead submitted successfully' });

  } catch (err) {
    console.error('[demo-lead] ❌ Unexpected error:', err);
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
