import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { ButtonLink } from "@/components/ButtonLink";
import { siteConfig } from "@/lib/site";
import { toWhatsAppLink } from "@/lib/whatsapp";
import { FaRecycle, FaTools, FaTachometerAlt, FaWrench, FaArrowRight } from "react-icons/fa";
import { GiWaterTank, GiReceiveMoney } from "react-icons/gi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

export function HomeMaterials() {
  const waSell = toWhatsAppLink({
    phone: siteConfig.whatsappNumber,
    message: "Hello UAE STAR SCRAP, I have scrap to sell: [item/material]. Quantity/weight: [details]. Location: [area]. Please share valuation and pickup options.",
  });

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Soft Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"></div>
      
      <Container className="relative z-10">
        <FadeIn className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-(--brand-teal)/10 px-4 py-2 text-sm font-bold text-(--brand-teal)">
            <FaRecycle className="size-4" />
            Scrap Materials
          </div>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-(--brand-blue) sm:text-5xl">
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Scrap</span> Do We Buy?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            We accept a wide range of water storage infrastructure materials at premium market rates.
          </p>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Plastic Tanks", icon: GiWaterTank, items: "HDPE, Polyethylene" },
            { name: "Stainless Steel", icon: FaTools, items: "304, 316 Grade" },
            { name: "Galvanized Iron", icon: IoShieldCheckmarkOutline, items: "GI Tanks & Fittings" },
            { name: "Pumps & Motors", icon: FaTachometerAlt, items: "Water Pumps, Motors" },
            { name: "Copper & Brass", icon: GiReceiveMoney, items: "Fittings, Valves" },
            { name: "Aluminum", icon: FaRecycle, items: "Frames, Covers" },
            { name: "PVC Pipes", icon: FaWrench, items: "All Sizes" },
            { name: "Tank Fittings", icon: FaTools, items: "Covers, Floats, Valves" },
          ].map((material, idx) => (
            <FadeIn
              key={material.name}
              delay={idx * 0.05}
              className="group flex flex-col items-center text-center gap-5 rounded-3xl bg-white p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(8,59,153,0.1)] hover:border-(--brand-teal)/20 hover:-translate-y-2 active:scale-95"
            >
              <div className="rounded-2xl bg-gradient-to-br from-orange-400 to-yellow-600 p-5 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <material.icon className="size-8 text-white" />
              </div>
              <div>
                <div className="text-lg font-black text-slate-800 transition-colors duration-300 group-hover:text-(--brand-blue)">{material.name}</div>
                <div className="text-sm font-semibold text-slate-400 mt-2">{material.items}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-16 text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-orange-400 to-yellow-600 shadow-xl shadow-orange-500/20">
            <ButtonLink 
              variant="custom"
              href={waSell} 
              className="inline-flex items-center gap-2 bg-white text-(--brand-blue) font-black hover:bg-slate-50 rounded-[0.9rem] px-10 py-5 text-xl transition-all"
            >
              Don't see your item? Ask us
              <FaArrowRight className="size-5 text-orange-500" />
            </ButtonLink>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
