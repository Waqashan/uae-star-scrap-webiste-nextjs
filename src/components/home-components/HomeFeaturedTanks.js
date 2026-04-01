import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { ButtonLink } from "@/components/ButtonLink";
import { TankCard } from "@/components/TankCard";
import { siteConfig } from "@/lib/site";
import { toWhatsAppLink } from "@/lib/whatsapp";
import { GiWaterTank } from "react-icons/gi";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import tanks from "@/data/tanks.json";
import { BiSupport } from "react-icons/bi";

export function HomeFeaturedTanks() {
  const waBuy = toWhatsAppLink({
    phone: siteConfig.whatsappNumber,
    message: "Hello UAE STAR SCRAP, I want to buy a refurbished water tank. Capacity: [500L/1000L/1500L/2000L+]. Material: [Plastic/Stainless/Galvanized]. Please share available options with price and warranty.",
  });

  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-(--brand-orange)/5 to-transparent pointer-events-none blur-3xl"></div>
      <Container className="relative z-10">
        <FadeIn className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-(--brand-orange)/10 px-4 py-2 text-sm font-bold text-(--brand-orange)">
              <GiWaterTank className="size-4" />
              Available Now
            </div>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-(--brand-blue) sm:text-5xl">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">tanks</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Quick preview of currently listed refurbished tanks. Tap "WhatsApp inquiry" for live availability and warranty terms.
            </p>
          </div>
          <ButtonLink href="/tanks" className="inline-flex items-center gap-2 border-2 border-(--brand-blue) text-(--brand-blue) hover:bg-(--brand-blue) hover:text-white rounded-xl px-6 py-4 font-bold transition-all whitespace-nowrap">
            View all inventory
            <FaArrowRight className="size-4" />
          </ButtonLink>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
          {tanks.slice(0, 4).map((tank, idx) => {
            return (
              <FadeIn key={tank.id} delay={idx * 0.1} className="h-full transform hover:-translate-y-2 transition-transform duration-300">
                <TankCard tank={tank} />
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="mt-16 rounded-[2rem] bg-gradient-to-r from-(--brand-blue) via-blue-800 to-(--brand-teal) p-1 shadow-2xl">
          <div className="rounded-[1.8rem] bg-white p-10 md:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-sm font-bold uppercase tracking-wide text-(--brand-blue) mb-4">
                  <BiSupport className="size-4" /> Custom Request
                </div>
                <h3 className="text-3xl font-black text-slate-900 leading-tight">
                  Need a specific tank capacity?
                </h3>
                <p className="mt-3 text-lg text-slate-600">
                  Message us your required size & material (e.g., Plastic 5000L).
                </p>
              </div>
              <ButtonLink variant="custom" href={waBuy} className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-white border-2 border-orange-200 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 hover:bg-slate-50 rounded-xl px-8 py-5 text-lg font-bold transition-all shadow-xl hover:scale-105">
                <FaWhatsapp className="size-6" />
                Chat With Experts
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
