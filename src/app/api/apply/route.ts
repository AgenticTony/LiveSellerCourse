import { NextResponse } from "next/server";

// Types
interface ApplicationData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  reason: string;
  preferredDate?: string;
}

// Email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Phone validation
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s+()-]{10,}$/;
  return phoneRegex.test(phone);
}

export async function POST(request: Request) {
  try {
    const body: ApplicationData = await request.json();

    // Validate required fields
    if (!body.name || body.name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name is required and must be at least 2 characters" },
        { status: 400 }
      );
    }

    if (!body.email || !isValidEmail(body.email)) {
      return NextResponse.json(
        { error: "Valid email address is required" },
        { status: 400 }
      );
    }

    if (!body.phone || !isValidPhone(body.phone)) {
      return NextResponse.json(
        { error: "Valid phone number is required" },
        { status: 400 }
      );
    }

    if (!body.experience) {
      return NextResponse.json(
        { error: "Please select your experience level" },
        { status: 400 }
      );
    }

    if (!body.reason || body.reason.trim().length < 20) {
      return NextResponse.json(
        { error: "Please tell us why you want to join (at least 20 characters)" },
        { status: 400 }
      );
    }

    // In production, send email using Resend
    // Uncomment when you have Resend API key configured:
    // const { Resend } = await import('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'apply@livesellerbootcamp.co.uk',
    //   to: process.env.CONTACT_EMAIL!,
    //   subject: `New Application: ${body.name}`,
    //   html: `
    //     <h2>New Bootcamp Application</h2>
    //     <p><strong>Name:</strong> ${body.name}</p>
    //     <p><strong>Email:</strong> ${body.email}</p>
    //     <p><strong>Phone:</strong> ${body.phone}</p>
    //     <p><strong>Experience:</strong> ${body.experience}</p>
    //     <p><strong>Preferred Date:</strong> ${body.preferredDate || 'Not specified'}</p>
    //     <p><strong>Why they want to join:</strong></p>
    //     <p>${body.reason}</p>
    //   `
    // });

    // For now, just log and return success
    console.log("New application received:", {
      name: body.name,
      email: body.email,
      phone: body.phone,
      experience: body.experience,
      preferredDate: body.preferredDate,
      reason: body.reason,
    });

    return NextResponse.json({
      success: true,
      message: "Application received successfully",
    });
  } catch (error) {
    console.error("Application submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit application. Please try again." },
      { status: 500 }
    );
  }
}
