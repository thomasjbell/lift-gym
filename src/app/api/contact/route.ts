import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Send email to gym owner
    await resend.emails.send({
      from: 'Lift Gym <thomas@thomasjbell.co.uk>', // Replace with your domain
      to: [process.env.CONTACT_EMAIL || 'leductaep@gmail.com'],
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Send auto-reply to user
    await resend.emails.send({
      from: 'Lift Gym <thomas@thomasjbell.co.uk>', // Replace with your domain
      to: [email],
      subject: 'Thank you for contacting Lift Gym',
      html: `
        <h2>Thank you for your message!</h2>
        <p>Hi ${name},</p>
        <p>Thank you for reaching out to Lift Gym. We've received your message and will get back to you within 24 hours.</p>
        <p><strong>Your message:</strong></p>
        <blockquote style="border-left: 4px solid #ccc; margin: 0; padding-left: 16px; color: #666;">
          ${message.replace(/\n/g, '<br>')}
        </blockquote>
        <p>Best regards,<br>The Lift Gym Team</p>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Error sending email' },
      { status: 500 }
    );
  }
}