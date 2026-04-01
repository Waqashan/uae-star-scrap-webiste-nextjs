"use client";

import Image from "next/image";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { ButtonLink } from "@/components/ButtonLink";
import { toWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site";
import { FaTruck, FaMapMarkerAlt, FaShieldAlt, FaClock, FaCheckCircle, FaWhatsapp } from "react-icons/fa";

export default function TransportPage() {
  const wa = toWhatsAppLink({
    phone: siteConfig.whatsappNumber,
    message: "Hello UAE STAR SCRAP, I need transport/pickup services for my water tank.",
  });

  const features = [
    {
      title: "UAE-Wide Coverage",
      description: "From Dubai and Abu Dhabi to Sharjah, Ajman, and Fujairah—we cover all seven emirates.",
      icon: FaMapMarkerAlt,
    },
    {
      title: "Safe & Secure Handling",
      description: "Our specialized fleet and expert handlers ensure your tank is transported without any structural damage.",
      icon: FaShieldAlt,
    },
    {
      title: "Fast Turnaround",
      description: "We understand urgency. Our logistics team ensures timely pickups and deliveries across the UAE.",
      icon: FaClock,
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Header Container */}
      <div className="bg-white">
        <Container className="pt-20 pb-12">
          <FadeIn>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-black tracking-tight text-(--brand-blue) sm:text-5xl uppercase">
                  Transport <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Services</span>
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-slate-600 font-medium">
                  Professional water tank pickup and delivery across the UAE. We handle the logistics so you don't have to.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href={wa} className="bg-(--brand-blue) text-white hover:bg-[#052b57] rounded-xl px-6 py-3 font-bold transition-all shadow-md">
                  Book a Pickup
                </ButtonLink>
                <ButtonLink href="/contact" className="border-2 border-slate-200 text-slate-600 hover:border-(--brand-blue) hover:text-(--brand-blue) rounded-xl px-6 py-3 font-bold transition-all">
                  Contact Us
                </ButtonLink>
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <h2 className="text-3xl font-black text-(--brand-blue) mb-6">
                Hassle-Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Logistics</span> Solutions
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Whether you are moving houses and need to transfer your tank or you've sold your old tank to us, UAE STAR SCRAP provides a complete, in-house transport solution. We don't rely on third-party movers; we use our own specialized vehicles designed for the dimensions and safety requirements of water tanks.
                </p>
                <p>
                  Our team manages the entire process—including safe disconnection, professional loading, secure transit, and offloading at your new location or our workshop.
                </p>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4 p-6 bg-white rounded-3xl border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-orange-200">
                    <div className="shrink-0 size-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500">
                      <feature.icon className="size-6" />
                    </div>
                    <div>
                      <h3 className="font-black text-(--brand-blue) text-lg">{feature.title}</h3>
                      <p className="text-slate-500 text-sm mt-1">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
              <Image
                src="/assets/images/transport.jpeg"
                alt="UAE Tank Transport Service"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="bg-orange-500/90 backdrop-blur-md px-4 py-1 rounded-full text-xs font-black uppercase inline-block mb-3">Professional Pickup</div>
                <h3 className="text-2xl font-black">Emirates-Wide Delivery</h3>
                <p className="text-white/80 text-sm mt-2">Serving Dubai, Abu Dhabi, Sharjah, and beyond.</p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* City Coverage Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl font-black text-(--brand-blue) sm:text-4xl">
                Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Connectivity</span> Across the UAE
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We provide professional tank transfer services between all major cities and industrial hubs. No matter the distance, we bridge the gap.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: "Dubai", route: "Inter-City & Local" },
              { name: "Abu Dhabi", route: "Capital Transfers" },
              { name: "Al Ain", route: "Garden City Routes" },
              { name: "Sharjah", route: "Industrial Gateways" },
              { name: "Ajman", route: "Coastal Deliveries" },
              { name: "Ras Al Khaimah", route: "Northern Transfers" },
              { name: "Fujairah", route: "East Coast Logistics" },
              { name: "Umm Al Quwain", route: "Northern Routes" }
            ].map((city, idx) => (
              <FadeIn key={city.name} delay={idx * 0.05} className="group p-6 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-orange-200 hover:bg-white hover:shadow-xl transition-all text-center">
                <div className="size-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt className="size-5" />
                </div>
                <h3 className="font-black text-(--brand-blue) text-lg">{city.name}</h3>
                <p className="text-slate-400 text-xs font-bold mt-1 uppercase tracking-wider">{city.route}</p>
              </FadeIn>
            ))}
          </div>

          <div className="mt-16 bg-slate-900 rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/grid.svg')] opacity-10"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div>
                <h4 className="text-2xl font-black text-white">Browse our Transport Routes</h4>
                <p className="text-slate-400 mt-2">Connecting homeowner and businesses across all seven emirates with professional logistics.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-sm">Dubai ↔ Abu Dhabi</div>
                <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-sm">Sharjah ↔ Al Ain</div>
                <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-sm">RAK ↔ Fujairah</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Image Gallery Row */}
      <section className="py-24">
        <Container>
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-black text-(--brand-blue) sm:text-4xl">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Fleet</span> in Action
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              From residential poly tanks to industrial GRP panels, we have the right transport setup for every job.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: "/assets/images/grp-loading.jpeg", title: "Industrial GRP Loading" },
              { src: "/assets/images/pannel-tank.jpeg", title: "Panel Tank Logistics" },
              { src: "/assets/images/residentail-delivery.jpeg", title: "Residential Delivery" }
            ].map((img, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="group relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                  <div className="text-white font-black text-xl">{img.title}</div>
                  <div className="text-orange-400 font-bold text-sm mt-1">UAE STAR LOGISTICS</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/assets/images/grid.svg')] bg-center opacity-10"></div>
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-4xl font-black text-white sm:text-5xl leading-tight">
                Need to Move <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Your Tank?</span>
              </h2>
              <p className="mt-6 text-xl text-slate-400 leading-relaxed max-w-xl">
                Don't risk structural damage by using ordinary movers. Trust the specialists who know how to handle water storage safely.
              </p>
              <ul className="mt-10 space-y-4">
                {["UAE Nationwide Pickup", "Own Transport Fleet", "Expert Disconnection Service", "24/7 Availability"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white font-medium">
                    <FaCheckCircle className="size-5 text-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] shadow-2xl">
              <h3 className="text-2xl font-black text-white mb-6">Instant Price Quote</h3>
              <p className="text-slate-400 mb-10">Tell us your location and tank type on WhatsApp for a quick estimate.</p>

              <div className="grid gap-4">
                <ButtonLink href={wa} className="w-full bg-gradient-to-r from-orange-400 to-yellow-500 text-white text-center block rounded-2xl px-4 py-5 font-black transition-all shadow-xl shadow-orange-500/20 active:scale-95 text-lg">
                  <span className="flex items-center justify-center gap-2">
                    <FaWhatsapp className="size-6" /> Chat on WhatsApp
                  </span>
                </ButtonLink>
                <ButtonLink href="/contact" className="w-full border-2 border-white/20 text-white hover:bg-white/5 text-center block rounded-2xl px-4 py-5 font-black transition-all">
                  Contact Form
                </ButtonLink>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </main>
  );
}
