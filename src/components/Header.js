"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { siteConfig } from "@/lib/site";
import { toWhatsAppLink } from "@/lib/whatsapp";
import { FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/buy-sell", label: "Buy & Sell" },
  { href: "/transport", label: "Transport" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blogs" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const wa = toWhatsAppLink({
    phone: siteConfig.whatsappNumber,
    message: "Hello, I have a question about your services.",
  });

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
        {/* Top Info Bar — desktop only */}
        {/* <div className="hidden sm:flex items-center justify-between border-b border-slate-100 bg-slate-50/50 px-4 sm:px-6 lg:px-8 xl:px-12 py-2 text-[11px] font-bold tracking-wider text-slate-500 uppercase">
          <div className="flex items-center gap-6">
            <a href={`tel:${siteConfig.phoneTel}`} className="flex items-center gap-2 hover:text-(--brand-blue) transition-colors">
              <FaPhone className="size-3 text-(--brand-orange)" /> {siteConfig.phoneDisplay}
            </a>
            <a href={`tel:${siteConfig.phoneTelSecondary}`} className="flex items-center gap-2 hover:text-(--brand-blue) transition-colors">
              <FaPhone className="size-3 text-(--brand-orange)" /> {siteConfig.phoneDisplaySecondary}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-(--brand-blue) transition-colors">
              <FaEnvelope className="size-3 text-(--brand-teal)" /> {siteConfig.email}
            </a>
          </div>
          <div className="flex items-center gap-4 border-l border-slate-200 pl-4">
            <a href="#" className="hover:text-(--brand-blue) transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-(--brand-blue) transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-(--brand-blue) transition-colors"><FaLinkedinIn /></a>
          </div>
        </div> */}

        {/* Main Nav Bar */}
        <Container className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* Hamburger Button — left of logo, mobile only */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors gap-1.5"
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 w-5 bg-slate-700 rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-5 bg-slate-700 rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-slate-700 rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>

            <Link href="/" className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-(--brand-blue) text-white">
                <span className="text-xs font-black tracking-tight">UAE</span>
              </div>
              <div className="leading-tight">
                <div className="text-xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
                  {siteConfig.name}
                </div>
                <div className="text-xs text-slate-600 hidden sm:block">
                  Repair • Resale (Warranty) • Scrap Trading
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${isActive
                    ? "bg-slate-50 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 shadow-sm"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side: WhatsApp only on desktop */}
          <div className="flex items-center gap-3">
            <ButtonLink
              variant="custom"
              href={wa}
              className="hidden sm:inline-flex bg-white hover:bg-slate-50 border-2 border-orange-200 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 font-black shadow-sm transition-all rounded-xl px-4 py-2"
            >
              WhatsApp
            </ButtonLink>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 lg:hidden" onClick={() => setMobileOpen(false)}>
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        </div>
      )}

      {/* Mobile Slide-in Menu Panel — from LEFT */}
      <div className={`fixed top-0 left-0 z-50 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Panel Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <div className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
            {siteConfig.name}
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors text-slate-500 text-lg font-bold"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col p-4 gap-1">
          {nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${isActive
                  ? "bg-orange-50 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500"
                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Contact Info in Mobile Menu */}
        <div className="px-6 pt-4 border-t border-slate-100">
          <div className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-3">Contact</div>
          <div className="flex flex-col gap-3">
            <a href={`tel:${siteConfig.phoneTel}`} className="flex items-center gap-3 text-sm font-bold text-slate-700 hover:text-(--brand-blue) transition-colors">
              <div className="size-8 rounded-lg bg-orange-50 flex items-center justify-center text-(--brand-orange) shrink-0">
                <FaPhone className="size-3" />
              </div>
              {siteConfig.phoneDisplay}
            </a>
            <a href={`tel:${siteConfig.phoneTelSecondary}`} className="flex items-center gap-3 text-sm font-bold text-slate-700 hover:text-(--brand-blue) transition-colors">
              <div className="size-8 rounded-lg bg-orange-50 flex items-center justify-center text-(--brand-orange) shrink-0">
                <FaPhone className="size-3" />
              </div>
              {siteConfig.phoneDisplaySecondary}
            </a>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="px-6 pt-5">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white hover:bg-[#128C7E] rounded-xl px-4 py-3 font-black transition-all text-sm shadow-lg"
          >
            <FaWhatsapp className="size-5" /> WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}
