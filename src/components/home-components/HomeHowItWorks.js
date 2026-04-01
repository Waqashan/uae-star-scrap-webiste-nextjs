import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { FaTools, FaSearch, FaClipboardList } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";

export function HomeHowItWorks() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <FadeIn className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-(--brand-blue)/10 px-4 py-2 text-sm font-bold text-(--brand-blue)">
            <FaTools className="size-4" />
            Step-by-Step Process
          </div>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-(--brand-blue) sm:text-5xl">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">tank repair</span> works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            A step-by-step workflow that restores performance and makes warranty
            terms easy to understand.
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-500 via-orange-500 to-purple-500 opacity-20"></div>

          {[
            { step: "01", title: "Inspection", desc: "We assess leaks, cracks, and fittings.", icon: FaSearch, color: "from-orange-400 to-yellow-500" },
            { step: "02", title: "Repair & refurbish", desc: "Leak fixes, crack repairs, and replacements.", icon: FaTools, color: "from-orange-400 to-yellow-500" },
            { step: "03", title: "Testing", desc: "Leak test and functional checks for safe performance.", icon: GiWaterDrop, color: "from-orange-400 to-yellow-500" },
            { step: "04", title: "Warranty", desc: "Clear coverage duration shared via WhatsApp.", icon: FaClipboardList, color: "from-orange-400 to-yellow-500" },
          ].map((s, idx) => (
            <FadeIn
              key={s.step}
              delay={idx * 0.15}
              className="group relative rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-2xl z-10"
            >
              <div className="absolute right-4 top-4 text-6xl font-black text-slate-50 group-hover:text-slate-100 transition-colors">
                {s.step}
              </div>
              <div className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${s.color} p-4 shadow-xl ring-4 ring-white`}>
                <s.icon className="size-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{s.title}</h3>
              <p className="mt-3 text-slate-600 relative z-20">{s.desc}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
