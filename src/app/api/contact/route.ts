import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate input
    const validatedData = contactSchema.parse(body);

    // Optional: Send email via Resend (if API key is available)
    if (process.env.RESEND_API_KEY && process.env.RESEND_TO_EMAIL) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'noreply@your-domain.com',
            to: process.env.RESEND_TO_EMAIL,
            replyTo: validatedData.email,
            subject: `New Portfolio Contact: ${validatedData.subject}`,
            html: `
              <h2>New Message from Portfolio</h2>
              <p><strong>Name:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> ${validatedData.email}</p>
              <p><strong>Subject:</strong> ${validatedData.subject}</p>
              <p><strong>Message:</strong></p>
              <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
            `,
          }),
        });

        if (!response.ok) {
          console.error('Resend API error:', await response.text());
        }
      } catch (emailError) {
        console.error('Email sending failed, but form validation passed:', emailError);
        // Continue even if email fails - form is still valid
      }
    }

    return NextResponse.json(
      { success: true, message: 'Message received successfully!' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Validation error', issues: error.issues },
        { status: 400 }
      );
    }

    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
