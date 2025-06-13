import React from 'react';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { ContactFormEmail } from '../../../components/email/ContactFormEmail';
import { render } from '@react-email/render';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    const emailHtml = await render(
      <ContactFormEmail
        name={name}
        email={email}
        phone={phone}
        subject={subject}
        message={message}
      />
    );

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: process.env.EMAIL || '',
      subject: `New Contact Form Submission: ${subject}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 