import { clinicConfig } from "../config/clinicConfig";

/**
 * Build a wa.me link prefilled with the given message.
 * Returns an absolute URL ready to use in <a href>.
 */
export function whatsappLink(message: string): string {
  const num = clinicConfig.contact.whatsappNumber.replace(/[^\d]/g, "");
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}

/** Generic greeting / hello message for floating button. */
export function whatsappHelloLink(): string {
  const msg = `Hello ${clinicConfig.clinicName}, I would like to know more about your consultation and timings.`;
  return whatsappLink(msg);
}

/**
 * Build a structured appointment request message from a form submission.
 */
export function appointmentWhatsappLink(data: {
  name: string;
  phone: string;
  date: string;
  time: string;
  reason: string;
}): string {
  const lines = [
    `*Appointment Request*`,
    `${clinicConfig.clinicName} — ${clinicConfig.doctor.name}`,
    ``,
    `*Name:* ${data.name}`,
    `*Phone:* ${data.phone}`,
    `*Preferred date:* ${data.date}`,
    `*Preferred time:* ${data.time}`,
    `*Reason for visit:* ${data.reason || "—"}`
  ];
  return whatsappLink(lines.join("\n"));
}

/** Format phone number into a tel: href. */
export function telLink(): string {
  return `tel:${clinicConfig.contact.phoneDial}`;
}
