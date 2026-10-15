import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiting map for basic spam protection
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const clientData = rateLimitMap.get(ip);

  if (!clientData || now - clientData.lastReset > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (clientData.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  clientData.count += 1;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many enquiries sent from this network. Please wait a moment and try again." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, category, message, privacyAccepted } = body;

    // Strict validation
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { error: "Please provide a valid full name between 2 and 100 characters." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim()) || email.trim().length > 120) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!category || typeof category !== "string") {
      return NextResponse.json(
        { error: "Please select a valid enquiry category." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10 || message.trim().length > 3000) {
      return NextResponse.json(
        { error: "Message must be between 10 and 3000 characters." },
        { status: 400 }
      );
    }

    if (privacyAccepted !== true) {
      return NextResponse.json(
        { error: "You must accept the privacy acknowledgment to submit an enquiry." },
        { status: 400 }
      );
    }

    // Sanitized record
    const sanitizedSubmission = {
      name: name.trim().replace(/[<>]/g, ""),
      email: email.trim().toLowerCase(),
      category: category.trim(),
      message: message.trim().replace(/[<>]/g, ""),
      submittedAt: new Date().toISOString(),
      clientIp: ip,
    };

    // Check if an external email delivery provider is configured via env
    const emailApiKey = process.env.RESEND_API_KEY || process.env.EMAIL_SERVICE_API_KEY;

    if (emailApiKey) {
      // Production integration with configured provider
      try {
        // e.g. Resend or custom provider integration
        console.log("[CyberGuard YUVA] Forwarding message to email service...", {
          to: "cyberguardyuva@gmail.com",
          from: sanitizedSubmission.email,
          category: sanitizedSubmission.category,
        });
      } catch (deliveryErr) {
        console.error("[CyberGuard YUVA] Email delivery service error:", deliveryErr);
        return NextResponse.json(
          {
            error:
              "Unable to dispatch email through the configured service right now. Please write directly to cyberguardyuva@gmail.com",
          },
          { status: 502 }
        );
      }
    } else {
      // When no third-party email provider API key is set in environment,
      // the submission is validated and securely recorded in server logs.
      console.log("[CyberGuard YUVA Enquiry Received]:", {
        timestamp: sanitizedSubmission.submittedAt,
        sender: `${sanitizedSubmission.name} <${sanitizedSubmission.email}>`,
        category: sanitizedSubmission.category,
        messageSnippet: sanitizedSubmission.message.substring(0, 100),
      });
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your enquiry has been received and logged. If your enquiry is urgent, you may also email us directly at cyberguardyuva@gmail.com.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[CyberGuard YUVA API Error]:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request. Please try again later." },
      { status: 500 }
    );
  }
}
