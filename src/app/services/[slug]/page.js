import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import servicesData from "@/data/services.json";
import { FaCheckCircle, FaArrowLeft, FaWhatsapp, FaTools, FaShieldAlt } from "react-icons/fa";
import { toWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | UAE STAR SCRAP`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const waInquiry = toWhatsAppLink({
    phone: siteConfig.whatsappNumber,
    message: `Hello UAE STAR SCRAP, I'm interested in your "${service.title}" service. Please share details, pricing, and availability.`,
  });

  return (
    <main className="bg-white min-h-screen pb-24">
      {/* Service Header */}
      <div className="bg-slate-50 border-b border-slate-100 pt-20 pb-16">
        <Container className="max-w-5xl">
          <FadeIn>
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-(--brand-blue) mb-8 transition-colors"
            >
              <FaArrowLeft className="size-3" />
              All Services
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--brand-blue) text-white shadow-lg shadow-blue-500/20">
                <FaTools className="size-6" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-slate-400">
                Professional Service
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight max-w-3xl">
              {service.title}
            </h1>
            
            <p className="mt-8 text-xl leading-relaxed text-slate-600 max-w-3xl font-medium">
              {service.description}
            </p>
          </FadeIn>
        </Container>
      </div>

      <Container className="max-w-5xl mt-16">
        <FadeIn>
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              {/* Featured Image */}
              <div className="mb-12 relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority={true}
                  loading="eager"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Service Overview */}
              <section className="mb-16">
                <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                  <span className="h-8 w-1.5 rounded-full bg-(--brand-blue)" />
                  About This Service
                </h2>
                <div className="prose prose-slate max-w-none text-lg text-slate-600 leading-relaxed space-y-6 font-medium">
                  <p>{service.description}</p>
                  {service.extendedDescription && (
                    <p>{service.extendedDescription}</p>
                  )}
                </div>
              </section>

              {/* Features Section */}
              <section className="mb-16">
                <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                  <span className="h-8 w-1.5 rounded-full bg-(--brand-orange)" />
                  Key Features
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm group hover:shadow-md transition-shadow">
                      <FaCheckCircle className="size-5 text-(--brand-teal) shrink-0 mt-0.5" />
                      <span className="text-sm font-bold text-slate-700 leading-snug group-hover:text-(--brand-blue) transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Process Section (if available) */}
              {service.process && (
                <section>
                  <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                    <span className="h-8 w-1.5 rounded-full bg-(--brand-teal)" />
                    Our Process
                  </h2>
                  <div className="space-y-6">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="flex gap-6 relative group">
                        {idx !== service.process.length - 1 && (
                          <div className="absolute left-6 top-10 bottom-[-24px] w-0.5 bg-slate-100 group-hover:bg-(--brand-teal)/20 transition-colors" />
                        )}
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 text-(--brand-blue) font-black text-lg transition-transform group-hover:scale-110">
                          {idx + 1}
                        </div>
                        <div className="pt-2">
                          <p className="text-lg font-bold text-slate-800 leading-snug">
                            {step}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 h-fit">
              <div className="rounded-[2.5rem] bg-[#021a36] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 h-40 w-40 bg-(--brand-teal)/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <FaShieldAlt className="size-12 text-orange-400 mb-6" />
                <h3 className="text-3xl font-black mb-4 leading-tight">Ready to get started?</h3>
                <p className="text-blue-100/80 mb-8 font-medium">
                  Contact our Dubai-based experts for a free assessment and transparent pricing.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href={waInquiry}
                    className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white hover:bg-[#128C7E] px-6 py-5 rounded-2xl font-black transition-all shadow-xl shadow-green-500/20 text-lg"
                  >
                    <FaWhatsapp className="size-6" />
                    Inquiry on WhatsApp
                  </a>
                  <Link 
                    href="/contact" 
                    className="flex items-center justify-center w-full bg-white/10 hover:bg-white/20 text-white px-6 py-5 rounded-2xl font-black transition-all border border-white/10 text-lg"
                  >
                    Contact Form
                  </Link>
                </div>
                
                <div className="mt-10 pt-8 border-t border-white/10 text-center">
                  <p className="text-xs font-black uppercase tracking-widest text-blue-100/40">Guaranteed Quality Since 2012</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </main>
  );
}
