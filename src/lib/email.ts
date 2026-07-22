import emailjs from "@emailjs/browser";

export type FormType = "quote" | "career" | "contact";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const TO_EMAIL = import.meta.env.VITE_FORM_TO_EMAIL || "hr@rmt-pk.com";

const TEMPLATE_IDS: Record<FormType, string | undefined> = {
  quote: import.meta.env.VITE_EMAILJS_TEMPLATE_QUOTE,
  career: import.meta.env.VITE_EMAILJS_TEMPLATE_CAREER,
  contact:
    import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT ||
    import.meta.env.VITE_EMAILJS_TEMPLATE_QUOTE,
};

function assertConfigured(type: FormType) {
  const templateId = TEMPLATE_IDS[type];
  if (!SERVICE_ID || !PUBLIC_KEY || !templateId) {
    throw new Error(
      "Email service is not configured. Add EmailJS credentials to your .env file."
    );
  }
  return templateId;
}

/** Sends a website form submission to hr@rmt-pk.com via EmailJS. */
export async function sendFormEmail(
  type: FormType,
  fields: Record<string, string>
): Promise<void> {
  const templateId = assertConfigured(type);

  await emailjs.send(
    SERVICE_ID,
    templateId,
    {
      to_email: TO_EMAIL,
      form_type: type,
      subject:
        fields.subject ||
        (type === "quote"
          ? "New Quote Request — RMT Website"
          : type === "career"
            ? "New Career Application — RMT Website"
            : "New Contact Enquiry — RMT Website"),
      reply_to: fields.email || fields.from_email || "",
      ...fields,
    },
    { publicKey: PUBLIC_KEY }
  );
}

export { TO_EMAIL };
