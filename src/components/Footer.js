import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";
import { toWhatsAppLink } from "@/lib/whatsapp";
import { FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  const wa = toWhatsAppLink({
    phone: siteConfig.whatsappNumber,
    message: "Hello, I have a question about your services.",
  });

  return (
    <footer className="border-t border-slate-100 bg-white">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-(--brand-blue) text-white shadow-lg shadow-blue-500/10">
                <span className="text-xs font-black tracking-tight">UAE</span>
              </div>
              <div className="text-xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
                {siteConfig.name}
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-6 font-medium">
              We provide professional water tank repair, refurbished tank sales, and scrap trading across the UAE with 14+ years of expertise.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2.5 rounded-xl border border-slate-100 text-slate-400 hover:text-(--brand-blue) hover:border-(--brand-blue) hover:bg-slate-50 transition-all active:scale-95"><FaFacebookF className="size-4" /></a>
              <a href="#" className="p-2.5 rounded-full border border-slate-100 text-slate-400 hover:text-(--brand-blue) hover:border-(--brand-blue) hover:bg-slate-50 transition-all active:scale-95"><FaInstagram className="size-4" /></a>
              <a href="#" className="p-2.5 rounded-full border border-slate-100 text-slate-400 hover:text-(--brand-blue) hover:border-(--brand-blue) hover:bg-slate-50 transition-all active:scale-95"><FaLinkedinIn className="size-4" /></a>
            </div>
          </div>

          <div>
            <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Quick Links</div>
            <ul className="space-y-4">
              {[
                ["/about", "Our Story"],
                ["/services", "All Services"],
                ["/blog", "Our Blog"],
                ["/buy-sell", "Buy & Sell Scrap"],
                ["/contact", "Get in Touch"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link className="text-sm font-bold text-slate-600 hover:text-(--brand-blue) transition-colors" href={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Contact Us</div>
            <ul className="space-y-4">
              <li>
                <div className="flex flex-col gap-3">
                  <a className="flex items-center gap-3 text-sm font-bold text-slate-600 hover:text-(--brand-blue) transition-colors" href={`tel:${siteConfig.phoneTel}`}>
                    <div className="size-8 rounded-lg bg-orange-50 flex items-center justify-center text-(--brand-orange)">
                      <FaPhone className="size-3.5" />
                    </div>
                    {siteConfig.phoneDisplay}
                  </a>
                  <a className="flex items-center gap-3 text-sm font-bold text-slate-600 hover:text-(--brand-blue) transition-colors" href={`tel:${siteConfig.phoneTelSecondary}`}>
                    <div className="size-8 rounded-lg bg-orange-50 flex items-center justify-center text-(--brand-orange)">
                      <FaPhone className="size-3.5" />
                    </div>
                    {siteConfig.phoneDisplaySecondary}
                  </a>
                </div>
              </li>
              <li>
                <a className="flex items-center gap-3 text-sm font-bold text-slate-600 hover:text-(--brand-blue) transition-colors" href={`mailto:${siteConfig.email}`}>
                  <div className="size-8 rounded-lg bg-teal-50 flex items-center justify-center text-(--brand-teal)">
                    <FaEnvelope className="size-3.5" />
                  </div>
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold text-slate-500 leading-relaxed">
                <div className="size-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                  <span className="text-[10px] font-black">UAE</span>
                </div>
                <div>
                  <div className="mb-1 text-slate-900">{siteConfig.addressLines[0]}</div>
                  <div className="mb-1 text-slate-900">{siteConfig.addressLines[1]}</div>
                  <a href={siteConfig.googleMapsEmbedUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] text-(--brand-blue) hover:underline uppercase tracking-widest">View on Map →</a>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
            <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Fastest Support</div>
            <p className="text-xs text-slate-500 mb-6 font-medium">Send us a message on WhatsApp for instant replies and valuations.</p>
            <a href={wa} className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white hover:bg-[#128C7E] rounded-xl px-4 py-3 text-sm font-black transition-all shadow-lg shadow-green-500/10">
              <FaWhatsapp className="size-4" /> Message Us
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-slate-100 pt-8 text-[11px] font-bold text-slate-400 sm:flex-row sm:items-center sm:justify-between uppercase tracking-wider">
          <div>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link className="hover:text-(--brand-blue) transition-colors" href="/robots.txt">robots.txt</Link>
            <Link className="hover:text-(--brand-blue) transition-colors" href="/sitemap.xml">sitemap</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

