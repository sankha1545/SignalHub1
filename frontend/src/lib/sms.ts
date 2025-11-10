// lib/sms.ts
import twilio from "twilio";

const twilioSid = process.env.TWILIO_ACCOUNT_SID!;
const twilioAuth = process.env.TWILIO_AUTH_TOKEN!;
const twilioFrom = process.env.TWILIO_PHONE_NUMBER; // optional
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID; // recommended

let client: twilio.Twilio | null = null;

if (twilioSid && twilioAuth) {
  client = twilio(twilioSid, twilioAuth);
}

export async function sendSms(to: string, body: string) {
  if (!client) {
    console.warn("[SMS] Twilio not configured. Message:", body);
    return { ok: false, error: "Twilio not configured" };
  }

  try {
    const msg = await client.messages.create({
      to,
      body,
      ...(messagingServiceSid
        ? { messagingServiceSid }
        : { from: twilioFrom || "+11234567890" }) // fallback number if missing
    });

    console.log(`[SMS] Sent to ${to}: ${msg.sid}`);
    return { ok: true, sid: msg.sid };
  } catch (error: any) {
    console.error("[SMS] Error sending:", error.message);
    return { ok: false, error: error.code || "send_failed", details: error.message };
  }
}
