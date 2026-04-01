import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: "Servicio de email no configurado." },
        { status: 503 }
      );
    }

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);
    const contactEmail = process.env.CONTACT_EMAIL || "rl3aiboutique@gmail.com";

    await resend.emails.send({
      from: "RL3 Web <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: email,
      subject: `Nuevo contacto RL3: ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Error al enviar el mensaje." },
      { status: 500 }
    );
  }
}
