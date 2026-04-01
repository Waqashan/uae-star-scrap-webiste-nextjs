import Image from "next/image";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { FaCameraRetro } from "react-icons/fa";

export function HomeGallery() {
  return (
    <section className="bg-slate-900 py-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-(--brand-teal)/10 to-transparent rotate-12 transform scale-150 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-t from-(--brand-orange)/10 to-transparent -rotate-12 transform scale-150 blur-3xl pointer-events-none"></div>

      <Container className="relative z-10">
        <FadeIn className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm font-bold text-white border border-slate-700">
            <FaCameraRetro className="size-4 text-(--brand-teal)" />
            Recent Work
          </div>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Project Gallery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            See the transformative difference our professional repair and refurbishing service makes on damaged tanks.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden aspect-square bg-slate-800 border border-slate-700">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 z-10 pointer-events-none"></div>
              <Image
                src={`/assets/images/watertank.webp`}
                alt={`Project ${i}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
              />
              <div className="absolute bottom-0 left-0 p-4 z-20">
                <div className="text-white font-bold text-lg">Industrial Repair {i}</div>
                <div className="text-(--brand-teal) text-sm font-semibold">Dubai Marina</div>
              </div>
            </div>
          ))}
        </FadeIn>
      </Container>
    </section>
  );
}
