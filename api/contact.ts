import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;

  // Handle case where body might be a string
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: 'Invalid JSON body' });
    }
  }

  if (!body) {
    return res.status(400).json({ error: 'Request body is empty' });
  }

  const { orgName, type, region, expertise } = body;

  if (!orgName || !expertise) {
    return res.status(400).json({ error: 'Organisation name and expertise are required.' });
  }

  try {
    const sql = neon(process.env.DATABASE_URL!);

    await sql`
      CREATE TABLE IF NOT EXISTS submissions (
        id SERIAL PRIMARY KEY,
        org_name TEXT NOT NULL,
        org_type TEXT,
        region TEXT,
        expertise TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `;

    await sql`
      INSERT INTO submissions (org_name, org_type, region, expertise)
      VALUES (${orgName}, ${type}, ${region}, ${expertise})
    `;

    // Send email notification (non-blocking)
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'Tesseract Gov <onboarding@resend.dev>',
          to: 'fabio@thetesseractacademy.com',
          subject: `Partnership Interest: ${orgName}`,
          html: `
            <h2>New Partnership Enquiry</h2>
            <table style="border-collapse:collapse;width:100%;max-width:500px;">
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">Organisation</td><td style="padding:8px;border-bottom:1px solid #ddd;">${escapeHtml(orgName)}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">Type</td><td style="padding:8px;border-bottom:1px solid #ddd;">${escapeHtml(type || '')}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">Region</td><td style="padding:8px;border-bottom:1px solid #ddd;">${escapeHtml(region || '')}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #ddd;">Expertise</td><td style="padding:8px;border-bottom:1px solid #ddd;">${escapeHtml(expertise)}</td></tr>
            </table>
          `,
        });
      } catch (emailError) {
        console.error('Email failed:', emailError);
      }
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ error: 'Failed to submit enquiry. Please try again later.' });
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
