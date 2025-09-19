import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function main() {
  try {
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM,
      to: process.env.RESEND_TO,
      subject: "Test email from Resend",
      text: "If you see this, Resend is working correctly 🎉",
    });

    console.log("✅ Email sent successfully:", data);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
}

main();
