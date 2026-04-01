import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { siteConfig } from "@/lib/site";
import { toWhatsAppLink } from "@/lib/whatsapp";
import { FadeIn } from "@/components/FadeIn";
import { FaArrowRight } from "react-icons/fa";
import { HomeServices } from "@/components/home-components/HomeServices";

export const metadata = {
  title: "Services | UAE STAR SCRAP",
  description:
    "Expert services including water tank repair, GRP lining, refurbishment, and scrap trading across the UAE.",
};

export default function ServicesPage() {
  const waRepair = toWhatsAppLink({
    phone: siteConfig.whatsappNumber,
    message: "Hello UAE STAR SCRAP, I need tank repair. Please share more details and a free quote.",
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Header Container */}
      <div className="bg-white">
        <Container className="pt-20 pb-12">
          <FadeIn>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-black tracking-tight text-(--brand-blue) sm:text-5xl">
                  Our Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Solutions</span>
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-slate-600 font-medium">
                  Explore our full suite of professional services designed to protect your water storage systems and provide fair value for your industrial scrap.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/contact" className="bg-(--brand-blue) text-white hover:bg-[#052b57] rounded-xl px-6 py-3 font-bold transition-all shadow-md">
                  Get a Quote
                </ButtonLink>
                <ButtonLink href="/blog" className="border-2 border-slate-200 text-slate-600 hover:border-(--brand-blue) hover:text-(--brand-blue) rounded-xl px-6 py-3 font-bold transition-all">
                  Read Blog
                </ButtonLink>
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>

      {/* Main Services component (handles its own section tag and bg) */}
      <HomeServices />

      {/* Warranty Overview */}
      <section className="py-20 relative overflow-hidden bg-slate-50 border-t border-slate-100">
        <Container>
          <FadeIn className="rounded-[3rem] bg-gradient-to-br from-[#021a36] to-[#083b99] p-10 md:p-16 shadow-2xl relative overflow-hidden border border-white/5">
            <div className="absolute right-0 top-0 h-full w-1/2 bg-[url('/assets/images/pattern.svg')] opacity-5 pointer-events-none"></div>
            <div className="relative z-10 max-w-3xl">
              <h3 className="text-3xl font-black text-white sm:text-4xl leading-tight">
                Quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Guaranteed</span> on every project
              </h3>
              <p className="mt-6 text-lg leading-relaxed text-blue-100/80 font-medium">
                With over a decade of experience serving the UAE, we provide clear warranty terms, certified food-grade materials, and a process built on total transparency.
              </p>
              <div className="mt-8">
                <ButtonLink href={waRepair} className="group bg-orange-400 text-(--brand-blue) hover:border-white hover:text-white rounded-xl px-8 py-4 font-bold transition-all inline-flex items-center gap-2 shadow-lg">
                  Contact to our Team <FaArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </ButtonLink>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
