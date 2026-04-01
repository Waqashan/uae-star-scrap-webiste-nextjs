import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { FaStar, FaRecycle, FaMobileAlt } from "react-icons/fa";
import { GiWaterTank } from "react-icons/gi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

export function HomeWhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <Container>
        <FadeIn className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-(--brand-teal)/10 px-4 py-2 text-sm font-bold text-(--brand-teal)">
            <FaStar className="size-4" />
            Why Choose Us
          </div>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-(--brand-blue) sm:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">UAE STAR SCRAP</span> Difference
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            We keep it simple: repair, test, and warranty-backed resale—plus fast
            scrap valuation and WhatsApp-only communication.
          </p>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Warranty offered",
              desc: "Unlike typical scrap dealers, we provide warranty on all repaired tanks.",
              icon: IoShieldCheckmarkOutline,
              color: "from-(--brand-blue) to-blue-600",
            },
            {
              title: "Circular economy",
              desc: "Repair, resell, and recycle to reduce waste and save resources.",
              icon: FaRecycle,
              color: "from-(--brand-teal) to-teal-600",
            },
            {
              title: "One-stop solution",
              desc: "Repair, buy tanks, and sell scrap all in one place.",
              icon: GiWaterTank,
              color: "from-(--brand-orange) to-orange-600",
            },
            {
              title: "Mobile-first",
              desc: "WhatsApp templates for quick leads and instant communication.",
              icon: FaMobileAlt,
              color: "from-purple-500 to-purple-600",
            },
          ].map((x, idx) => (
            <FadeIn key={x.title} delay={idx * 0.1} className="group rounded-3xl bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-white border border-transparent hover:border-slate-100">
              <div className={`mb-6 inline-flex rounded-xl bg-gradient-to-br ${x.color} p-4 shadow-lg`}>
                <x.icon className="size-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-(--brand-teal) transition-colors">{x.title}</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{x.desc}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
