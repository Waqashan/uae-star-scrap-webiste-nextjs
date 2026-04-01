import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { ButtonLink } from "@/components/ButtonLink";
import { siteConfig } from "@/lib/site";
import { toWhatsAppLink } from "@/lib/whatsapp";
import { GiPriceTag, GiCheckMark } from "react-icons/gi";
import { FaWrench, FaTools, FaAward } from "react-icons/fa";

export function HomePricing() {
  const waRepair = toWhatsAppLink({
    phone: siteConfig.whatsappNumber,
    message: "Hello UAE STAR SCRAP, I need water tank repair. Tank type/material: [details]. Location: [area]. Please share process, price range, and warranty.",
  });

  return (
    <section className="bg-white py-24">
      <Container>
        <FadeIn className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-(--brand-orange)/10 px-4 py-2 text-xs font-bold text-(--brand-orange)">
            <GiPriceTag className="size-4" />
            Transparent Pricing
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-(--brand-blue) sm:text-4xl">
            Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Packages</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-md text-slate-500 font-medium leading-relaxed">
            Affordable rates with no hidden charges. Get a free quote today.
          </p>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-3 mx-auto">
          {[
            {
              name: "Basic Repair",
              price: "AED 150+",
              features: ["Leak Detection", "Minor Crack Repair", "3 Months Warranty"],
              icon: FaWrench,
              popular: false
            },
            {
              name: "Standard Service",
              price: "AED 350+",
              features: ["Major Crack Repair", "Full Cleaning", "6 Months Warranty"],
              icon: FaTools,
              popular: true
            },
            {
              name: "Premium Package",
              price: "AED 550+",
              features: ["Full Restoration", "Anti-Leak Coating", "12 Months Warranty"],
              icon: FaAward,
              popular: false
            }
          ].map((pkg, idx) => (
            <FadeIn key={pkg.name} delay={idx * 0.1} className={`relative rounded-3xl bg-white p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${pkg.popular ? 'ring-2 ring-orange-500 shadow-xl shadow-orange-500/10 scale-105 z-10' : 'shadow-sm border border-slate-100 hover:border-slate-300'}`}>
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-orange-500/30">
                  Most Popular
                </div>
              )}
              <div className="mb-5 inline-flex rounded-2xl bg-gradient-to-br from-orange-400 to-yellow-600 p-4 shadow-md group-hover:scale-110 transition-transform">
                <pkg.icon className="size-6 text-white" />
              </div>
              <h3 className="text-xl font-black text-slate-800">{pkg.name}</h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-600">{pkg.price}</span>
                <span className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">Starting</span>
              </div>
              <div className="mt-6 space-y-3">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-slate-600 font-bold">
                    <div className="rounded-full bg-teal-50 p-1">
                      <GiCheckMark className="size-2 text-(--brand-teal)" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>
              <ButtonLink
                variant="custom"
                href={waRepair}
                className={`mt-8 w-full text-center block rounded-xl px-4 py-3.5 text-sm font-black transition-all ${pkg.popular ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg' : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-100'}`}
              >
                Get Quote
              </ButtonLink>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
