import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { FaTools } from "react-icons/fa";
import servicesData from "@/data/services.json";

export function HomeServices() {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-(--brand-blue)/5 to-transparent pointer-events-none"></div>

      <Container className="relative z-10">
        <FadeIn className="mb-20 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-(--brand-teal)/10 px-4 py-2 text-sm font-bold text-(--brand-teal) mb-6">
            <FaTools className="size-4" />
            SERVICES
          </div>
          <h2 className="text-4xl font-black capitalize tracking-tight text-(--brand-blue) sm:text-5xl mb-6">
            Services that <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">you can trust</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Being in the industry for about 14 years, we have already made a name for ourselves and we continue to provide our genuine and top-quality service to every client that we handle. We ensure that all that the client’s needs are addressed properly and we complement this with our expertise and experience in the field. We offer the water storage related services from water tank repairing, water tank refurbishment, water tank relining, fiberglass (GRP) lining, fiberglass (GRP) pipe lamination, fiberglass (GRP) waterproofing, chemical tank repairing, and roof leak repairing. Should there are other services of related to water storage and repair, contact us so that we could give our assessments.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {servicesData.map((service, idx) => (
            <FadeIn key={service.id} delay={idx * 0.1}>
              <Link href={`/services/${service.slug}`} className="group block">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-slate-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-(--brand-blue)/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="relative -mt-10 mx-auto w-10/12 bg-white rounded-xl shadow-xl p-5 text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl border-b-4 border-transparent group-hover:border-(--brand-orange)">
                  <h3 className="font-black text-slate-800 text-lg group-hover:text-transparent bg-clip-text group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-yellow-500">
                    {service.title}
                  </h3>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
