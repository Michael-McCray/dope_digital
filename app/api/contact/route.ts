import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { isEnvConfigured, requireEnv } from '@/lib/env'

const resend = isEnvConfigured('RESEND_API_KEY')
  ? new Resend(process.env.RESEND_API_KEY)
  : null

export async function POST(request: NextRequest) {
  if (!process.env.RESEND_API_KEY || !resend) {
    console.error('RESEND_API_KEY is not configured')
    return NextResponse.json(
      { error: 'Email service is not configured. Please set RESEND_API_KEY environment variable.' },
      { status: 500 }
    )
  }

  try {
    const body = await request.json()
    const {
      fullName,
      email,
      phone,
      company,
      services,
      budget,
      timeline,
      description,
      recaptchaToken,
    } = body

    // Validate required fields
    if (!fullName || !email || !services?.length || !budget || !timeline || !description) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification is required.' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format.' }, { status: 400 })
    }

    // Verify reCAPTCHA
    const recaptchaSecretKey = requireEnv('RECAPTCHA_SECRET_KEY')

    const recaptchaVerification = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${recaptchaSecretKey}&response=${recaptchaToken}`,
    })

    const recaptchaData = await recaptchaVerification.json()
    if (!recaptchaData.success) {
      console.error('reCAPTCHA verification failed:', recaptchaData)
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed. Please try again.' },
        { status: 400 }
      )
    }

    const servicesList = (services as string[]).map((s) => `• ${s}`).join('\n')
    const submittedAt = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    })

    const { data, error } = await resend.emails.send({
      from: 'Dope Digital <onboarding@resend.dev>',
      to: ['macoovae@gmail.com'],
      subject: `New Quote Request from ${fullName}${company ? ` – ${company}` : ''}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; max-width: 640px; margin: 0 auto; background: #ffffff;">

          <!-- Header -->
          <div style="background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%); padding: 36px 40px; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">
              New Quote Request
            </h1>
            <p style="margin: 6px 0 0; color: rgba(255,255,255,0.8); font-size: 13px;">
              Submitted on ${submittedAt}
            </p>
          </div>

          <!-- Body -->
          <div style="padding: 32px 40px; background: #f8fafc; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">

            <!-- Contact Details -->
            <div style="margin-bottom: 28px;">
              <h2 style="margin: 0 0 16px; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b;">
                Contact Details
              </h2>
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden;">
                ${[
                  ['Full Name', fullName],
                  ['Email', `<a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a>`],
                  ...(phone ? [['Phone', phone]] : []),
                  ...(company ? [['Company', company]] : []),
                ]
                  .map(
                    ([label, value], i, arr) => `
                  <div style="display: flex; padding: 13px 18px; ${i < arr.length - 1 ? 'border-bottom: 1px solid #f1f5f9;' : ''}">
                    <span style="min-width: 140px; font-size: 13px; font-weight: 600; color: #64748b;">${label}</span>
                    <span style="font-size: 13px; color: #0f172a;">${value}</span>
                  </div>`
                  )
                  .join('')}
              </div>
            </div>

            <!-- Project Details -->
            <div style="margin-bottom: 28px;">
              <h2 style="margin: 0 0 16px; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b;">
                Project Details
              </h2>
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden;">
                <div style="display: flex; padding: 13px 18px; border-bottom: 1px solid #f1f5f9;">
                  <span style="min-width: 140px; font-size: 13px; font-weight: 600; color: #64748b;">Services</span>
                  <span style="font-size: 13px; color: #0f172a;">${(services as string[]).join(', ')}</span>
                </div>
                <div style="display: flex; padding: 13px 18px; border-bottom: 1px solid #f1f5f9;">
                  <span style="min-width: 140px; font-size: 13px; font-weight: 600; color: #64748b;">Budget</span>
                  <span style="font-size: 13px; color: #0f172a;">${budget}</span>
                </div>
                <div style="display: flex; padding: 13px 18px;">
                  <span style="min-width: 140px; font-size: 13px; font-weight: 600; color: #64748b;">Timeline</span>
                  <span style="font-size: 13px; color: #0f172a;">${timeline}</span>
                </div>
              </div>
            </div>

            <!-- Project Description -->
            <div style="margin-bottom: 28px;">
              <h2 style="margin: 0 0 16px; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b;">
                Project Description
              </h2>
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px;">
                <p style="margin: 0; font-size: 14px; color: #334155; line-height: 1.7; white-space: pre-wrap;">${description}</p>
              </div>
            </div>

            <!-- CTA -->
            <div style="text-align: center; padding-top: 8px;">
              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #0284c7, #0ea5e9); color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; padding: 12px 28px; border-radius: 8px;">
                Reply to ${fullName}
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding: 20px 40px; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #94a3b8;">
              This quote request was submitted via the Dope Digital website.
            </p>
          </div>
        </div>
      `,
      text: `
NEW QUOTE REQUEST — Dope Digital
Submitted: ${submittedAt}

─── CONTACT DETAILS ───────────────────
Name:     ${fullName}
Email:    ${email}${phone ? `\nPhone:    ${phone}` : ''}${company ? `\nCompany:  ${company}` : ''}

─── PROJECT DETAILS ────────────────────
Services: ${(services as string[]).join(', ')}
Budget:   ${budget}
Timeline: ${timeline}

─── PROJECT DESCRIPTION ────────────────
${description}

────────────────────────────────────────
Reply directly to: ${email}
`,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'Quote request sent successfully', data }, { status: 200 })
  } catch (error) {
    console.error('API error:', error)
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: 'Invalid request data.' }, { status: 400 })
    }
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API is working', configured: !!process.env.RESEND_API_KEY },
    { status: 200 }
  )
}
