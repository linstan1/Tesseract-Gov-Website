import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { orgName, type, region, expertise } = req.body;

  if (!orgName || !expertise) {
    return res.status(400).json({ error: 'Organisation name and expertise are required.' });
  }

  const sql = neon(process.env.DATABASE_URL!);

  try {
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

    // Send email notification
    if (process.env.RESEND_API_KEY) {
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
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error:', error);
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
