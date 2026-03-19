import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless';

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

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ error: 'Failed to submit enquiry. Please try again later.' });
  }
}
