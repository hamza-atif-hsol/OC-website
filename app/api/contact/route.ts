import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Validate required fields
    const { fromName, replyTo, phoneNumber, message, marketingConsent, source, fromEmail } = body

    if (!fromName || !replyTo || !phoneNumber || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    if (!marketingConsent) {
      return NextResponse.json(
        { error: "Marketing consent is required" },
        { status: 400 }
      )
    }

    // Log the contact submission (in production, send email or save to database)
    console.log("📧 Contact Form Submission:", {
      timestamp: new Date().toISOString(),
      fromName,
      replyTo,
      phoneNumber,
      message,
      marketingConsent,
      source,
      fromEmail,
    })

    // Simulated delay for network visibility
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent successfully.",
        submissionId: `contact-${Date.now()}`,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    )
  }
}

// Allow only POST requests
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  )
}
