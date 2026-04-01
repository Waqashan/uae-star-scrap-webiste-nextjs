import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { ButtonLink } from "@/components/ButtonLink";
import { siteConfig } from "@/lib/site";
import { toWhatsAppLink } from "@/lib/whatsapp";
import { FaWrench } from "react-icons/fa";
import { GiWaterTank, GiReceiveMoney } from "react-icons/gi";

export function HomeCTA() {
  const waRepair = toWhatsAppLink({
    phone: siteConfig.whatsappNumber,
    message: "Hello UAE STAR SCRAP, I need water tank repair. Tank type/material: [details]. Location: [area]. Please share process, price range, and warranty.",
  });
  const waBuy = toWhatsAppLink({
    phone: siteConfig.whatsappNumber,
    message: "Hello UAE STAR SCRAP, I want to buy a refurbished water tank. Capacity: [500L/1000L/1500L/2000L+]. Material: [Plastic/Stainless/Galvanized]. Please share available options with price and warranty.",
  });
  const waSell = toWhatsAppLink({
    phone: siteConfig.whatsappNumber,
    message: "Hello UAE STAR SCRAP, I have scrap to sell: [item/material]. Quantity/weight: [details]. Location: [area]. Please share valuation and pickup options.",
  });

  return (
    <section className="relative py-24 bg-white border-t border-slate-100">
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto border border-slate-200 rounded-xl p-4 shadow-lg">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-black text-(--brand-blue) sm:text-4xl leading-tight tracking-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">get started?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600 leading-relaxed font-medium">
              Join thousands of happy clients across the UAE. Tap an option below to chat with our experts instantly.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {/* Primary Action - Repair */}
              <ButtonLink
                variant="custom"
                href={waRepair}
                className="group flex items-center gap-2 bg-white border-2 border-orange-100 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-600 hover:bg-orange-50/30 rounded-xl px-8 py-4 text-lg font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-95"
              >
                <FaWrench className="size-5 text-orange-500 transition-transform group-hover:rotate-12" />
                Repair Tank
              </ButtonLink>

              {/* Secondary Action - Buy */}
              <ButtonLink
                href={waBuy}
                className="group flex items-center gap-2 bg-(--brand-teal) text-white hover:bg-teal-600 rounded-xl px-8 py-4 text-lg font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-95"
              >
                <GiWaterTank className="size-5 transition-transform group-hover:scale-110" />
                Buy Tank
              </ButtonLink>




            </div>

            <FadeIn delay={0.2} className="mt-8 flex items-center justify-center gap-3 text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">
              <span className="h-px w-6 bg-slate-200"></span>
              Average response time: 2 mins
              <span className="h-px w-6 bg-slate-200"></span>
            </FadeIn>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
