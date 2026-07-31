import emailjs from "@emailjs/browser";

export type FormType = "quote" | "career" | "contact";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const TO_EMAIL = import.meta.env.VITE_FORM_TO_EMAIL || "hr@rmt-pk.com";

/** EmailJS Variable Attachment parameter names (must match template Attachments tab). */
export const ATTACHMENT_PARAMS = [
  { content: "attachment", name: "attachment_name" },
  { content: "attachment_2", name: "attachment_2_name" },
  { content: "attachment_3", name: "attachment_3_name" },
] as const;

export const MAX_ATTACHMENTS = ATTACHMENT_PARAMS.length;
export const MAX_FILE_SIZE_BYTES = 500 * 1024; // 500 KB — EmailJS plan limit

export const ACCEPTED_FILE_TYPES =
  ".pdf,.doc,.docx,.txt,.rtf,.png,.jpg,.jpeg,.gif,.webp,.csv,.xls,.xlsx,.ppt,.pptx,.zip";

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
    throw new Error("FORM_NOT_CONFIGURED");
  }
  return templateId;
}

/** User-facing form error — never expose backend / config details. */
export function getFriendlyFormError(err: unknown): string {
  if (err instanceof Error) {
    // Keep clear validation messages for uploads
    if (
      err.message.includes("too large") ||
      err.message.includes("up to") ||
      err.message.startsWith('"')
    ) {
      return err.message;
    }
  }
  return "Something went wrong. Please try again.";
}

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") resolve(reader.result);
      else reject(new Error("Something went wrong. Please try again."));
    };
    reader.onerror = () => reject(new Error("Something went wrong. Please try again."));
    reader.readAsDataURL(file);
  });
}

export function validateAttachmentFiles(files: File[]): string | null {
  if (files.length > MAX_ATTACHMENTS) {
    return `You can upload up to ${MAX_ATTACHMENTS} files.`;
  }
  for (const file of files) {
    if (file.size > MAX_FILE_SIZE_BYTES) {
      return `"${file.name}" is too large. Max size is ${Math.round(MAX_FILE_SIZE_BYTES / 1024)} KB per file.`;
    }
  }
  return null;
}

async function buildAttachmentParams(files: File[]): Promise<Record<string, string>> {
  const params: Record<string, string> = {
    attachments_list:
      files.length > 0
        ? files.map((f) => f.name).join(", ")
        : "None",
  };

  const limited = files.slice(0, MAX_ATTACHMENTS);
  for (let i = 0; i < ATTACHMENT_PARAMS.length; i++) {
    const slot = ATTACHMENT_PARAMS[i];
    const file = limited[i];
    if (file) {
      params[slot.content] = await readFileAsDataUrl(file);
      params[slot.name] = file.name;
    } else {
      params[slot.content] = "";
      params[slot.name] = "";
    }
  }

  return params;
}

export interface SendFormEmailOptions {
  files?: File[];
}

/** Sends a website form submission to hr@rmt-pk.com via EmailJS (optional file attachments). */
export async function sendFormEmail(
  type: FormType,
  fields: Record<string, string>,
  options?: SendFormEmailOptions
): Promise<void> {
  const templateId = assertConfigured(type);
  const files = options?.files ?? [];

  const sizeError = validateAttachmentFiles(files);
  if (sizeError) throw new Error(sizeError);

  const attachmentParams = await buildAttachmentParams(files);

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
      ...attachmentParams,
    },
    { publicKey: PUBLIC_KEY }
  );
}

export { TO_EMAIL };
