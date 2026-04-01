import Image from "next/image";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { siteConfig } from "@/lib/site";
import { toWhatsAppLink } from "@/lib/whatsapp";
import { FadeIn } from "@/components/FadeIn";
import {
  FaHistory,
  FaBullseye,
  FaLightbulb,
  FaHandshake,
  FaTools,
  FaShieldAlt,
  FaCheckCircle,
  FaWhatsapp,
  FaQuoteLeft
} from "react-icons/fa";

export const metadata = {
  title: "About Us | UAE STAR SCRAP",
  description:
    "Discover the story behind UAE STAR SCRAP. We are the UAE's trusted experts in water tank repair, refurbishing, warranty-backed resale, and scrap trading.",
};

export default function AboutPage() {
  const wa = toWhatsAppLink({
    phone: siteConfig.whatsappNumber,
    message:
      "Hello UAE STAR SCRAP, I’d like to know more about your workshop, repair standards, and warranty process.",
  });

  return (
    <div className="bg-white">
      <Container className="pt-16 pb-8">
        <FadeIn>
          <h1 className="text-4xl font-black tracking-tight text-(--brand-blue) sm:text-5xl">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">UAE STAR SCRAP</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
            We are a UAE-based specialist in the water tank industry. Our focus is simple: repairing damaged tanks to restore function, reselling refurbished tanks with a rock-solid warranty, and trading all types of water tank scrap and parts.
          </p>
        </FadeIn>
      </Container>

      {/* Main Content & Story */}
      <section className="py-12">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <h2 className="text-3xl font-black text-(--brand-blue) sm:text-4xl">
                Built on Trust & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Reliability</span>
              </h2>
              <div className="mt-6 space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  UAE STAR SCRAP was founded with a singular vision: to address the growing need for sustainable, cost-effective water storage solutions in the United Arab Emirates. We recognized that countless workable water tanks were being discarded prematurely, contributing to environmental waste and unnecessary expenses for homeowners and businesses alike.
                </p>
                <p>
                  Our workshop in the UAE has since evolved into a premier destination for tank refurbishment and scrap trading. We don't just patch leaks—we comprehensively restore water tanks using industrial-grade materials and rigorous testing protocols, ensuring every tank that leaves our facility meets strict safety and performance standards.
                </p>
                <p>
                  By championing a circular economy, we help our clients save up to 50% compared to buying new, while drastically reducing plastic and metal waste across the region.
                </p>
              </div>

              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-(--brand-teal)/10 p-3 text-(--brand-teal)">
                    <FaShieldAlt className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-(--brand-blue)">Certified Quality</h3>
                    <p className="text-sm text-slate-600 mt-1">Every tank is pressure-tested.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-(--brand-orange)/10 p-3 text-(--brand-orange)">
                    <FaTools className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-(--brand-blue)">Expert Technicians</h3>
                    <p className="text-sm text-slate-600 mt-1">Decades of combined experience.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-(--brand-blue) to-(--brand-teal) opacity-20 blur-xl"></div>
              <div className="relative aspect-square md:aspect-auto md:h-[600px] overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl">
                <Image
                  src="/assets/images/about-hero-watertank.webp.jpeg"
                  alt="UAE STAR SCRAP Workshop"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority={true}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-black">Our State-of-the-Art Workshop</h3>
                  <p className="mt-2 text-white/80">Where damaged tanks are given a second life.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="bg-slate-50 py-24">
        <Container>
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-(--brand-blue) sm:text-4xl">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Principles</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We operate on a foundation of transparency, environmental responsibility, and uncompromising quality.
            </p>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Mission",
                icon: FaBullseye,
                desc: "To provide the UAE market with top-tier water tank repairs and refurbished options at fair pricing, ensuring access to safe and reliable water storage.",
                color: "from-(--brand-blue) to-[#052b57]"
              },
              {
                title: "Vision",
                icon: FaLightbulb,
                desc: "To pioneer a robust circular economy model within the UAE’s industrial sector—where every repair, resale, and recycle actively reduces environmental impact.",
                color: "from-(--brand-teal) to-[#0a4bbd]"
              },
              {
                title: "UAE Expertise",
                icon: FaHandshake,
                desc: "We intimately understand local usage patterns, the effects of the harsh climate on different materials, and the fast turnaround expectations of villas and sites.",
                color: "from-(--brand-orange) to-orange-600"
              }
            ].map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.15} className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-slate-100">
                <div className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${item.color} p-4 shadow-lg`}>
                  <item.icon className="size-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-(--brand-blue)">{item.title}</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Quality Commitment & CTA */}
      <section className="py-24 relative">
        <Container>
          <div className="rounded-[3rem] bg-gradient-to-r from-(--brand-blue) via-[#052b57] to-(--brand-teal) p-8 md:p-16 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

            <FadeIn className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-black text-white sm:text-4xl">
                  The UAE STAR SCRAP Guarantee
                </h2>
                <p className="mt-6 text-lg text-blue-100 leading-relaxed">
                  Every tank process involves rigorous inspection, deep structural repair, pressure testing for leaks, and comprehensive sanitation. We are so confident in our process that we proudly sell our refurbished tanks with clear, legally binding warranty terms.
                </p>

                <ul className="mt-8 space-y-4">
                  {[
                    "Multi-point structural inspection",
                    "Industrial-grade sealant and welding",
                    "High-pressure leak testing",
                    "Up to 12 months comprehensive warranty"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white font-medium">
                      <FaCheckCircle className="size-5 text-(--brand-orange)" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-2xl lg:ml-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <FaQuoteLeft className="text-4xl text-(--brand-teal)/20 mb-6" />
                <p className="text-xl font-bold text-slate-800 leading-snug">
                  "Our goal isn't just to fix a tank; it's to provide you with peace of mind knowing your water storage is secure, safe, and backed by experts."
                </p>
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className="font-black text-(--brand-blue)">UAE STAR SCRAP Team</div>
                  <div className="text-(--brand-orange) font-medium text-sm">Management</div>
                </div>
                <div className="mt-8 grid gap-4">
                  <ButtonLink href="/services" className="w-full bg-(--brand-blue) text-white hover:bg-[#052b57] text-center block rounded-xl px-4 py-4 font-bold transition-all shadow-md">
                    Explore Our Services
                  </ButtonLink>
                  <ButtonLink href={wa} className="w-full border-2 border-(--brand-teal) text-(--brand-teal) hover:bg-(--brand-teal) hover:text-white text-center block rounded-xl px-4 py-4 font-bold transition-all">
                    <span className="flex items-center justify-center gap-2">
                      <FaWhatsapp className="size-5" /> Let's Chat
                    </span>
                  </ButtonLink>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  );
}
