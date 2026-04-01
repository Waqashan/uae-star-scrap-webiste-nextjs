import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";
import { toWhatsAppLink } from "@/lib/whatsapp";
import { FadeIn } from "@/components/FadeIn";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

export const metadata = {
  title: "Contact Us | UAE STAR SCRAP",
  description:
    "Contact UAE STAR SCRAP via WhatsApp, phone, or email. We're located in Al Dhaid, Sharjah. Fast WhatsApp responses and 14+ years of service.",
};

export default function ContactPage() {
  const wa = toWhatsAppLink({
    phone: siteConfig.whatsappNumber,
    message: "Hello UAE STAR SCRAP, I'd like to get in touch.",
  });
  const wa2 = toWhatsAppLink({
    phone: siteConfig.whatsappNumberSecondary,
    message: "Hello UAE STAR SCRAP, I'd like to get in touch.",
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-100">
        <Container className="pt-12 pb-10 sm:pt-16 sm:pb-12">
          <FadeIn>
            <div className="max-w-2xl">
              <h1 className="text-3xl font-black tracking-tight text-(--brand-blue) sm:text-5xl">
                Get in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
                  Touch
                </span>
              </h1>
              <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
                For fastest replies, message us on WhatsApp. You can also call
                during working hours or visit our Sharjah facility.
              </p>
            </div>
          </FadeIn>
        </Container>
      </div>

      <Container className="py-10 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-2">

          {/* ─── Contact Details Card ─── */}
          <FadeIn delay={0.1}>
            <div className="rounded-3xl bg-white p-6 sm:p-10 shadow-sm border border-slate-100 flex flex-col gap-7">

              {/* Phone (Primary) */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-50 text-(--brand-orange)">
                  <FaPhoneAlt className="size-4" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Phone 1</div>
                  <a
                    className="text-base font-bold text-slate-900 hover:text-(--brand-orange) transition-colors"
                    href={`tel:${siteConfig.phoneTel}`}
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Phone (Secondary) */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-50 text-(--brand-orange)">
                  <FaPhoneAlt className="size-4" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Phone 2</div>
                  <a
                    className="text-base font-bold text-slate-900 hover:text-(--brand-orange) transition-colors"
                    href={`tel:${siteConfig.phoneTelSecondary}`}
                  >
                    {siteConfig.phoneDisplaySecondary}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-(--brand-teal)">
                  <FaEnvelope className="size-4" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email</div>
                  <a
                    className="text-base font-bold text-slate-900 hover:text-(--brand-teal) transition-colors break-all"
                    href={`mailto:${siteConfig.email}`}
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-(--brand-blue)">
                  <FaClock className="size-4" />
                </div>
                <div className="w-full">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Working Hours</div>
                  <ul className="space-y-1.5">
                    {siteConfig.workingHours.map((x) => (
                      <li
                        key={x.label}
                        className="flex flex-wrap justify-between gap-2 border-b border-slate-50 pb-1.5 last:border-0"
                      >
                        <span className="font-semibold text-slate-700 text-sm">{x.label}:</span>
                        <span className="text-slate-600 text-sm">{x.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                  <FaMapMarkerAlt className="size-4" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Address</div>
                  <div className="text-sm font-medium text-slate-700 leading-relaxed">
                    {siteConfig.addressLines[1]}
                  </div>
                  <a
                    href={siteConfig.googleMapsDirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold text-(--brand-blue) hover:underline uppercase tracking-widest"
                  >
                    <FaExternalLinkAlt className="size-2.5" /> Open in Google Maps
                  </a>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 border-t border-slate-100 mt-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2 bg-[#25D366] text-white hover:bg-[#128C7E] rounded-2xl px-5 py-4 font-bold transition-all shadow-md text-sm"
                >
                  <FaWhatsapp className="size-5" /> {siteConfig.phoneDisplay}
                </a>
                <a
                  href={wa2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2 bg-[#25D366] text-white hover:bg-[#128C7E] rounded-2xl px-5 py-4 font-bold transition-all shadow-md text-sm"
                >
                  <FaWhatsapp className="size-5" /> {siteConfig.phoneDisplaySecondary}
                </a>
              </div>
            </div>
          </FadeIn>

          {/* ─── Map ─── */}
          <FadeIn delay={0.2}>
            <div className="rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-white flex flex-col">
              {/* Embed */}
              <div className="relative w-full" style={{ paddingBottom: "60%" }}>
                <iframe
                  title="UAE STAR SCRAP Location - Al Dhaid, Sharjah"
                  src={siteConfig.googleMapsEmbedUrl}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Map Footer */}
              <div className="bg-slate-50 p-5 sm:p-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <div className="font-black text-slate-900 text-sm mb-0.5">Visit Our Facility</div>
                  <div className="text-xs text-slate-500 leading-relaxed">
                    Al Dhaid, Sharjah — 7VGH+2H9
                  </div>
                </div>
                <a
                  href={siteConfig.googleMapsDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 shrink-0 bg-(--brand-blue) text-white hover:bg-blue-800 rounded-xl px-5 py-3 text-xs font-black transition-all uppercase tracking-widest"
                >
                  <FaExternalLinkAlt className="size-3" /> Get Directions
                </a>
              </div>
            </div>
          </FadeIn>

        </div>
      </Container>
    </div>
  );
}
