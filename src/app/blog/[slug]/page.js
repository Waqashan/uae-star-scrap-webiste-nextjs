import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import blogs from "@/data/blogs.json";
import { FaCalendarAlt, FaUser, FaArrowLeft, FaWhatsapp } from "react-icons/fa";
import { toWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | UAE STAR SCRAP`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const waAsk = toWhatsAppLink({
    phone: siteConfig.whatsappNumber,
    message: `Hello, I just read your article "${post.title}" and I have a question about [details].`,
  });

  return (
    <main className="bg-white min-h-screen pb-24">
      {/* Article Header */}
      <div className="bg-slate-50 border-b border-slate-100 pt-20 pb-16">
        <Container className="max-w-4xl">
          <FadeIn>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-(--brand-blue) mb-8 transition-colors"
            >
              <FaArrowLeft className="size-3" />
              Back to Blog
            </Link>
            
            <div className="flex items-center gap-4 text-xs font-black text-slate-400 mb-6 uppercase tracking-widest">
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-(--brand-blue)">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5">
                <FaCalendarAlt className="size-3 text-(--brand-orange)" />
                {post.date}
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              {post.title}
            </h1>
            
            <div className="mt-8 flex items-center gap-3">
              <div className="size-10 rounded-full bg-gradient-to-br from-(--brand-blue) to-blue-600 flex items-center justify-center text-white text-xs font-black uppercase tracking-tight">
                UAE
              </div>
              <div className="text-sm font-bold text-slate-700">
                by {post.author}
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>

      <Container className="max-w-4xl mt-12">
        <FadeIn>
          {/* Featured Image */}
          <div className="relative h-[300px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1200px) 100vw, 800px"
            />
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="prose prose-slate prose-lg max-w-none">
                {post.content.split("\n\n").map((paragraph, i) => {
                  if (paragraph.startsWith("###")) {
                    return (
                      <h2 key={i} className="text-2xl font-black text-slate-800 mt-10 mb-6 flex items-center gap-3 border-l-4 border-(--brand-orange) pl-4">
                        {paragraph.replace("### ", "")}
                      </h2>
                    );
                  }
                  return <p key={i} className="text-slate-600 leading-relaxed mb-6 font-medium text-lg">{paragraph}</p>;
                })}
              </div>
              
              {/* Call to Action Box */}
              <div className="mt-16 p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-black text-slate-900">Have a Question?</h3>
                  <p className="text-sm text-slate-500 font-medium">Ask our experts directly on WhatsApp.</p>
                </div>
                <a 
                  href={waAsk}
                  className="flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#128C7E] px-8 py-4 rounded-xl font-black transition-all shadow-lg shadow-green-500/20"
                >
                  <FaWhatsapp className="size-5" />
                  Ask via WhatsApp
                </a>
              </div>
            </div>

            {/* Sidebar / Related */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
              <div className="p-8 rounded-[2rem] bg-(--brand-blue) text-white shadow-xl">
                <h3 className="text-lg font-black mb-4">Our Services</h3>
                <ul className="space-y-4">
                  {[
                    "Water Tank Repairing",
                    "GRP Lining",
                    "Tank Refurbishment",
                    "Leak Detection"
                  ].map(service => (
                    <li key={service} className="text-sm font-bold opacity-80 hover:opacity-100 transition-opacity">
                      <Link href="/services" className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-orange-400" />
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className="mt-8 block w-full text-center bg-white text-(--brand-blue) py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </main>
  );
}
