import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { FaBuilding, FaGlobe, FaCity } from "react-icons/fa";
import { GiWaterTank } from "react-icons/gi";

export function HomePartners() {
  return (
    <section className="bg-slate-50 py-16 border-y border-slate-100">
      <Container>
        <FadeIn className="text-center">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-8">Trusted by renowned clients and manufacturers across UAE</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 text-xl font-black text-slate-700"><FaBuilding className="size-6 text-slate-400" /> EMAAR Properties</div>
            <div className="flex items-center gap-2 text-xl font-black text-slate-700"><FaGlobe className="size-6 text-slate-400" /> Polycon UAE</div>
            <div className="flex items-center gap-2 text-xl font-black text-slate-700"><FaCity className="size-6 text-slate-400" /> Nakheel</div>
            <div className="flex items-center gap-2 text-xl font-black text-slate-700"><GiWaterTank className="size-6 text-slate-400" /> Cosmoplast Plastics</div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
