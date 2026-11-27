import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "filibertosanudo@gmail.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!name || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "validation" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json({ error: "not_configured" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  // Uses Resend's shared sandbox sender since no custom domain is verified
  // yet. In sandbox mode Resend only delivers to the account's own verified
  // address, which is fine here since that's CONTACT_EMAIL. Once a domain is
  // verified, swap `from` for an address on that domain.
  const { error } = await resend.emails.send({
    from: "Portafolio <onboarding@resend.dev>",
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `Nuevo mensaje de ${name}`,
    text: `${message}\n\n— ${name} (${email})`,
  });

  if (error) {
    console.error("Resend error", error);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
