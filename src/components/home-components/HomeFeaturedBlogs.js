import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { ButtonLink } from "@/components/ButtonLink";
import blogs from "@/data/blogs.json";
import { FaArrowRight, FaCalendarAlt, FaPenNib } from "react-icons/fa";

export function HomeFeaturedBlogs() {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-(--brand-teal)/5 to-transparent pointer-events-none blur-3xl"></div>
      <Container className="relative z-10">
        <FadeIn className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-(--brand-blue)">
              <FaPenNib className="size-3.5" />
              Expert Guides
            </div>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-(--brand-blue) sm:text-5xl">
              Latest from our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">blog</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 font-medium">
              Professional insights on water tank maintenance, repair techniques, and industry standards in the UAE.
            </p>
          </div>
          <ButtonLink href="/blog" className="inline-flex items-center gap-2 border-2 border-(--brand-blue) text-(--brand-blue) hover:bg-(--brand-blue) hover:text-white rounded-xl px-6 py-4 font-black transition-all whitespace-nowrap">
            View all posts
            <FaArrowRight className="size-4" />
          </ButtonLink>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3 relative z-10">
          {blogs.slice(0, 3).map((post, idx) => (
            <FadeIn key={post.id} delay={idx * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 mb-4 uppercase tracking-widest">
                    <div className="flex items-center gap-1.5">
                      <FaCalendarAlt className="size-3 text-(--brand-orange)" />
                      {post.date}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-black text-slate-800 leading-tight mb-4 group-hover:text-(--brand-blue) transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-2 font-medium">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs font-black text-(--brand-blue) group-hover:gap-3 transition-all uppercase tracking-widest">
                    Read More
                    <FaArrowRight className="size-3 text-(--brand-orange)" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
