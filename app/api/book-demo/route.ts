import { NextResponse } from "next/server"

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const firstName = String(body?.firstName ?? "").trim()
    const lastName = String(body?.lastName ?? "").trim()
    const businessEmail = String(body?.businessEmail ?? "").trim()
    const marketSegment = String(body?.marketSegment ?? "").trim()
    const country = String(body?.country ?? "").trim()
    const dialCode = String(body?.dialCode ?? "").trim()
    const phoneNumber = String(body?.phoneNumber ?? "").trim()
    const marketingConsent = Boolean(body?.marketingConsent)

    // ✅ Server-side validation
    if (!firstName) return NextResponse.json({ error: "First name is required" }, { status: 400 })
    if (!lastName) return NextResponse.json({ error: "Last name is required" }, { status: 400 })

    if (!businessEmail) return NextResponse.json({ error: "Business email is required" }, { status: 400 })
    if (!emailRegex.test(businessEmail)) {
      return NextResponse.json({ error: "Please enter a valid email" }, { status: 400 })
    }

    if (!marketSegment) return NextResponse.json({ error: "Market segment is required" }, { status: 400 })
    if (!country) return NextResponse.json({ error: "Country is required" }, { status: 400 })

    if (!phoneNumber) return NextResponse.json({ error: "Phone number is required" }, { status: 400 })
    if (phoneNumber.replace(/\D/g, "").length < 7) {
      return NextResponse.json({ error: "Please enter a valid phone number" }, { status: 400 })
    }

    if (!marketingConsent) return NextResponse.json({ error: "Consent is required" }, { status: 400 })

    // ✅ Your requested meta fields
    const payload = {
      firstName,
      lastName,
      businessEmail,
      marketSegment,
      country,
      dialCode,
      phoneNumber,
      marketingConsent,
      fromEmail: "email@one-constellation.com",
      fromName: `${firstName} ${lastName}`, // user info
    }

    // TODO: Send to CRM / send email / save to DB
    // console.log("BOOK DEMO:", payload)

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }
}