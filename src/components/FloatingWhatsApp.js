import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/site";
import { toWhatsAppLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  const href = toWhatsAppLink({
    phone: siteConfig.whatsappNumber,
    message: "Hello, I have a question about your services.",
  });

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 p-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-all duration-300 hover:scale-110 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      {/* <span className="hidden sm:inline font-semibold text-sm">WhatsApp</span> */}
    </a>
  );
}