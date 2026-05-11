import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Center City Bail Bonds <hello@centercitybailbonds.com>',
      to: ['greggiaffes@yahoo.com'],
      reply_to: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <title>New Contact Form Submission</title>
          </head>
          <body style="font-family: Arial, sans-serif; background-color: #0a0a0a; color: #e2e8f0; margin: 0; padding: 0;">
            <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
              
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #111 0%, #1a1a1a 100%); border: 1px solid #d4af37; padding: 32px; margin-bottom: 24px;">
                <p style="color: #d4af37; font-size: 10px; text-transform: uppercase; letter-spacing: 0.3em; font-weight: bold; margin: 0 0 8px 0;">Center City Bail Bonds</p>
                <h1 style="color: #ffffff; font-size: 28px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em; margin: 0;">New Message Received</h1>
              </div>

              <!-- Fields -->
              <div style="background: #111; border: 1px solid rgba(255,255,255,0.08); padding: 32px; margin-bottom: 16px;">
                
                <div style="margin-bottom: 24px;">
                  <p style="color: #d4af37; font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; font-weight: bold; margin: 0 0 6px 0;">Full Name</p>
                  <p style="color: #ffffff; font-size: 18px; font-weight: 700; margin: 0;">${name}</p>
                </div>

                <div style="margin-bottom: 24px;">
                  <p style="color: #d4af37; font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; font-weight: bold; margin: 0 0 6px 0;">Phone Number</p>
                  <p style="color: #ffffff; font-size: 18px; font-weight: 700; margin: 0;">${phone || 'Not provided'}</p>
                </div>

                <div style="margin-bottom: 24px;">
                  <p style="color: #d4af37; font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; font-weight: bold; margin: 0 0 6px 0;">Email Address</p>
                  <p style="color: #ffffff; font-size: 18px; font-weight: 700; margin: 0;">${email}</p>
                </div>

                <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 24px;">
                  <p style="color: #d4af37; font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; font-weight: bold; margin: 0 0 12px 0;">Message</p>
                  <p style="color: #cbd5e1; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
                </div>
              </div>

              <!-- Footer -->
              <div style="text-align: center; padding: 16px;">
                <p style="color: #475569; font-size: 11px; margin: 0;">Reply directly to this email to respond to ${name}.</p>
              </div>

            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email. Please try again.' });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: 'An unexpected error occurred.' });
  }
}
