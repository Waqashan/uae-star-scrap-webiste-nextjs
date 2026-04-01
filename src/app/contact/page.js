import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { siteConfig } from "@/lib/site";
import { toWhatsAppLink } from "@/lib/whatsapp";
import { FadeIn } from "@/components/FadeIn";
import { 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaMapMarkerAlt,
  FaMapSigns
} from "react-icons/fa";

export const metadata = {
  title: "Contact Us | UAE STAR SCRAP",
  description:
    "Contact UAE STAR SCRAP via WhatsApp, phone, or email. View our location on Google Maps and get directions with nearby landmarks.",
};

export default function ContactPage() {
  const wa = toWhatsAppLink({
    phone: siteConfig.whatsappNumber,
    message: "Hello UAE STAR SCRAP, I’d like to get in touch.",
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Container */}
      <div className="bg-white border-b border-slate-100">
        <Container className="pt-16 pb-12">
          <FadeIn>
            <div className="max-w-2xl">
              <h1 className="text-4xl font-black tracking-tight text-(--brand-blue) sm:text-5xl">
                Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Touch</span>
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                For fastest replies, message us on WhatsApp. You can also call during
                working hours or visit our facility.
              </p>
            </div>
          </FadeIn>
        </Container>
      </div>

      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          
          {/* Contact Details */}
          <FadeIn delay={0.1}>
            <div className="rounded-[2.5rem] bg-white p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col gap-8 h-full">
              
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-(--brand-blue)">
                  <FaPhoneAlt className="size-5" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Phone</div>
                  <a className="text-lg font-bold text-slate-900 hover:text-(--brand-orange) transition-colors" href={`tel:${siteConfig.phoneTel}`}>
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-50 text-(--brand-teal)">
                  <FaEnvelope className="size-5" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Email</div>
                  <a className="text-lg font-bold text-slate-900 hover:text-(--brand-teal) transition-colors" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50 text-(--brand-orange)">
                  <FaClock className="size-5" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Working Hours</div>
                  <ul className="text-slate-700 space-y-1">
                    {siteConfig.workingHours.map((x) => (
                      <li key={x.label} className="flex justify-between md:justify-start gap-4 border-b border-slate-50 pb-1 last:border-0">
                        <span className="font-semibold">{x.label}:</span> 
                        <span>{x.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                  <FaMapMarkerAlt className="size-5" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Address</div>
                  <div className="text-slate-700 font-medium">
                    {siteConfig.addressLines.map((l, i) => (
                      <div key={i}>{l}</div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                  <FaMapSigns className="size-5" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Nearby Landmarks</div>
                  <ul className="text-slate-700">
                    {siteConfig.landmarks.map((l, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-(--brand-teal)"></span>{l}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-auto grid gap-4 sm:grid-cols-2">
                <ButtonLink href={wa} className="flex justify-center items-center gap-2 bg-[#25D366] text-white hover:bg-[#128C7E] rounded-xl px-6 py-4 font-bold transition-all shadow-md">
                  <FaWhatsapp className="size-6" /> WhatsApp
                </ButtonLink>
                <ButtonLink href="/services" className="flex justify-center items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 rounded-xl px-6 py-4 font-bold transition-all shadow-md">
                  View Services
                </ButtonLink>
              </div>

            </div>
          </FadeIn>

          {/* Map */}
          <FadeIn delay={0.2} className="h-full">
            <div className="overflow-hidden rounded-[2.5rem] border-8 border-white shadow-xl h-full min-h-[500px] flex flex-col bg-white">
              <iframe
                title="Google Maps location"
                src={siteConfig.googleMapsEmbedUrl}
                className="w-full flex-grow"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="bg-slate-50 p-6 text-sm text-slate-600 border-t border-slate-100">
                <div className="font-bold text-slate-900 mb-1">Visit our facility</div>
                Tap the map to get direct navigation instructions from your location.
              </div>
            </div>
          </FadeIn>

        </div>
      </Container>
    </div>
  );
}
