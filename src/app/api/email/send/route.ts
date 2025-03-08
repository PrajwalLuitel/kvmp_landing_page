// src/app/api/email/send/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { user_email, message } = await req.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

      // Send email
      // TODO: update receiver and sender email address from the environment variable file which looks like this:
    
// EMAIL_HOST="smtp.gmail.com"
// EMAIL_PORT="587"
// EMAIL_SECURE="false"
// EMAIL_USER="email@gmail.com"
// EMAIL_PASS="pass"
// EMAIL_FROM="KVMP <noreply@KVMP.com>"
      

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'KVMP Website',
      to: process.env.EMAIL_FROM,
      subject: 'Reaching out',
        html: `
      This is email by: ${user_email}
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <p> ${message} </p>
        </div>
      `});

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' }, 
      { status: 500 }
    );
  }
}