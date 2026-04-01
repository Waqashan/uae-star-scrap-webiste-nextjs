import Image from "next/image";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { siteConfig } from "@/lib/site";
import { FadeIn } from "@/components/FadeIn";
import { FaWrench, FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaPenNib } from "react-icons/fa";
import { GiWaterTank, GiReceiveMoney } from "react-icons/gi";
import { toWhatsAppLink } from "@/lib/whatsapp";

export function HomeHero() {
  const waRepair = toWhatsAppLink({
    phone: siteConfig.whatsappNumber,
    message: "Hello UAE STAR SCRAP, I need water tank repair. Tank type/material: [details]. Location: [area]. Please share process, price range, and warranty.",
  });
  const waSell = toWhatsAppLink({
    phone: siteConfig.whatsappNumber,
    message: "Hello UAE STAR SCRAP, I have scrap to sell: [item/material]. Quantity/weight: [details]. Location: [area]. Please share valuation and pickup options.",
  });

  return (
    <section className="relative overflow-hidden min-h-screen  flex items-center">
      <Container>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/0 z-10" />
          <Image
            src="/assets/images/watertank.webp"
            alt="Water tank repair background"
            fill
            className="object-cover object-center"
            priority={true}
            loading="eager"
            sizes="100vw"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />
        </div>

        <div className="relative  z-30 ">
          <FadeIn className="">
            <div className="flex flex-wrap items-center gap-4 ">

              <div className="h-4 w-px bg-white/20 mx-2 hidden sm:block" />
              <div className="flex gap-4">
                <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm border border-white/10 hover:border-white/30 hover:scale-110 active:scale-95"><FaFacebookF className="size-4" /></a>
                <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm border border-white/10 hover:border-white/30 hover:scale-110 active:scale-95"><FaInstagram className="size-4" /></a>
                <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm border border-white/10 hover:border-white/30 hover:scale-110 active:scale-95"><FaLinkedinIn className="size-4" /></a>
              </div>
            </div>
          </FadeIn>
          <FadeIn className="">
            <h1 className="text-5xl capitalize sm:text-6xl lg:text-6xl font-black leading-tight tracking-tight text-white mix-blend-plus-lighter">
              Repair Water tank &
              <br />
              <span className="capitalize text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">resale with warranty</span>
              <br />
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
              {siteConfig.name} refurbishes damaged tanks, sells tested used tanks
              with warranty, and buys/sells water tank scrap and spare parts across
              the UAE. Fast WhatsApp replies with fair valuation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink
                variant="custom"
                href={waRepair}
                className="group flex items-center gap-2 bg-white border-2 border-orange-200 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 hover:bg-slate-50 shadow-md rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 hover:scale-105"
              >
                <FaWrench className="size-5 transition-transform group-hover:rotate-12" />
                Repair My Tank
                <FaArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </ButtonLink>

              <ButtonLink
                href="/blog"
                className="group flex items-center gap-2 bg-(--brand-teal) text-white hover:bg-teal-600 shadow-lg shadow-teal-500/30 rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 hover:scale-105"
              >
                <FaPenNib className="size-4" />
                Read Our Blog
              </ButtonLink>

              <ButtonLink
                href={`tel:${siteConfig.phoneTel}`}
                className="group flex items-center gap-2 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/10 rounded-lg px-8 py-4 font-black text-lg transition-all duration-300 hover:scale-105"
              >
                <FaPhone className="size-4 text-orange-400" />
                {siteConfig.phoneDisplay}
              </ButtonLink>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
