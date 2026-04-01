import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { FaMedal, FaThumbsUp, FaTruck, FaWhatsapp } from "react-icons/fa";

export function HomeTrustBadges() {
  return (
    <section className="w-full bg-white border-b border-slate-100">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0.2} className="grid grid-cols-2 gap-6 py-8 md:grid-cols-4 w-full">
          {[
            { icon: FaMedal, text: "Quality Guaranteed", subtext: "Certified Service" },
            { icon: FaThumbsUp, text: "1000+ Happy Clients", subtext: "Across UAE" },
            { icon: FaTruck, text: "Free Pickup", subtext: "For Scrap Above 500kg" },
            { icon: FaWhatsapp, text: "Instant Response", subtext: "Within 30 Minutes" },
          ].map((badge, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left group w-full">
              <div className="rounded-2xl bg-yellow-50 p-4 shadow-sm ring-1 ring-yellow-600/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-100 group-hover:shadow-md group-hover:ring-yellow-600/40">
                <badge.icon className="size-8 text-yellow-600 drop-shadow-sm" />
              </div>
              <div>
                <div className="text-base font-black text-slate-900 tracking-wide">{badge.text}</div>
                <div className="text-sm font-semibold text-slate-500">{badge.subtext}</div>
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
