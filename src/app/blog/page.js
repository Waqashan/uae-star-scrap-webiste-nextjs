import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import blogs from "@/data/blogs.json";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";

export const metadata = {
  title: "Blog | UAE STAR SCRAP",
  description: "Expert advice and guides on water tank repair, maintenance, and cleaning in the UAE.",
};

export default function BlogListingPage() {
  return (
    <main className="bg-slate-50 min-h-screen pb-24">
      {/* Hero Header */}
      <div className="bg-white border-b border-slate-100">
        <Container className="pt-20 pb-16 text-center">
          <FadeIn>
            <h1 className="text-4xl font-black tracking-tight text-(--brand-blue) sm:text-5xl">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Expertise</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
              Stay informed with the latest guides, tips, and industry news on water tank maintenance and scrap trading in the UAE.
            </p>
          </FadeIn>
        </Container>
      </div>

      <Container className="mt-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
          {blogs.map((post, idx) => (
            <FadeIn key={post.id} delay={idx * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 rounded-full bg-(--brand-blue) text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">
                    <div className="flex items-center gap-1.5">
                      <FaCalendarAlt className="size-3 text-(--brand-orange)" />
                      {post.date}
                    </div>
                    <div className="h-3 w-px bg-slate-200" />
                    <div className="flex items-center gap-1.5">
                      <FaUser className="size-3 text-(--brand-teal)" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-black text-slate-800 leading-tight mb-4 group-hover:text-(--brand-blue) transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-black text-(--brand-blue) group-hover:gap-3 transition-all">
                    Read Full Article
                    <FaArrowRight className="size-3.5 text-(--brand-orange)" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </main>
  );
}
