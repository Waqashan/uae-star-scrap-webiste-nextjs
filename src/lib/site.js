import contact from "@/data/contact.json";

export const siteConfig = {
  name: "UAE STAR SCRAP",
  description:
    "Water tank repair, refurbished tank resale with warranty, and water tank scrap trading across the UAE. Fast WhatsApp inquiries and fair pricing.",
  keywords: [
    "water tank repair UAE",
    "water tank repair Dubai",
    "used water tanks for sale Dubai",
    "refurbished water tanks",
    "tank scrap buyers UAE",
    "water tank scrap",
    "scrap dealers UAE",
    "tank warranty",
  ],
  // Replace with your real domain once deployed (Vercel/Netlify/custom domain).
  siteUrl: "https://uae-star-scrap.com",

  // Centralized Contact Data
  whatsappNumber: contact.primary.whatsapp,
  whatsappNumberSecondary: contact.secondary.whatsapp,

  phoneDisplay: contact.primary.display,
  phoneDisplaySecondary: contact.secondary.display,

  phoneTel: contact.primary.dialer,
  phoneTelSecondary: contact.secondary.dialer,

  email: contact.email,

  workingHours: [
    { label: "Saturday–Thursday", value: "8:00 AM – 8:00 PM" },
    { label: "Friday", value: "Closed / By appointment" },
  ],

  addressLines: [
    "UAE STAR SCRAP",
    contact.address.full
  ],
  landmarks: [contact.address.landmark],

  googleMapsEmbedUrl: contact.address.link,
};

