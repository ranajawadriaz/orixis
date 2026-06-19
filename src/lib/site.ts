/**
 * Single source of truth for company contact details, links and helpers.
 * Update values here and they propagate across the whole site + chatbot.
 */

export const SITE = {
  name: 'Orixis',
  tagline: 'Engineering the Future with AI, Web & Mobile',
  description:
    'Orixis is a technology studio building AI agents, custom web platforms and mobile apps that help businesses automate, scale and grow.',
  email: 'ranajawadriaz.work@gmail.com',
  phoneDisplay: '+92 301 1119707',
  phoneTel: '+923011119707',
  /** Digits only, international format, used for wa.me links. */
  whatsapp: '923011119707',
  address: {
    line1: '123 Innovation Drive',
    line2: 'Tech City, TC 12345',
    maps: 'https://maps.google.com/?q=123+Innovation+Drive',
  },
  hours: 'Mon to Sat, 9:00 AM to 7:00 PM',
} as const;

/**
 * Social links. WhatsApp and Email are fully wired; swap the platform URLs for
 * real profile handles whenever they exist.
 */
export const SOCIAL = {
  whatsapp: `https://wa.me/${SITE.whatsapp}`,
  email: `mailto:${SITE.email}`,
  linkedin: 'https://www.linkedin.com/',
  instagram: 'https://www.instagram.com/',
} as const;

/** Build a WhatsApp deep-link with an optional pre-filled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Build a mailto link with optional subject/body. */
export function mailtoLink(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const qs = params.toString();
  return `mailto:${SITE.email}${qs ? `?${qs}` : ''}`;
}

/** Pre-filled WhatsApp message for a job application. */
export function applyOnWhatsApp(job: {
  title: string;
  department?: string;
  location?: string;
}): string {
  const lines = [
    `Hi Orixis team! 👋`,
    ``,
    `I'd like to apply for the *${job.title}* position.`,
    job.department ? `Department: ${job.department}` : '',
    job.location ? `Location: ${job.location}` : '',
    ``,
    `Here are my details:`,
    `• Name: `,
    `• Years of experience: `,
    `• Portfolio / CV link: `,
    ``,
    `Looking forward to hearing from you!`,
  ].filter(Boolean);
  return whatsappLink(lines.join('\n'));
}

/** Pre-filled WhatsApp message generated from the contact form. */
export function contactOnWhatsApp(form: {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  budget?: string;
  message?: string;
}): string {
  const lines = [
    `New enquiry from the Orixis website 🚀`,
    ``,
    form.name ? `*Name:* ${form.name}` : '',
    form.email ? `*Email:* ${form.email}` : '',
    form.company ? `*Company:* ${form.company}` : '',
    form.service ? `*Service:* ${form.service}` : '',
    form.budget ? `*Budget:* ${form.budget}` : '',
    form.message ? `\n*Message:*\n${form.message}` : '',
  ].filter(Boolean);
  return whatsappLink(lines.join('\n'));
}
