"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { ButtonLink } from "@/components/ButtonLink";
import { toWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site";
import galleryData from "@/data/gallery.json";
import { FaPlay, FaImage, FaVideo, FaExpandAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("images");
  const [selectedImage, setSelectedImage] = useState(null);

  const wa = toWhatsAppLink({
    phone: siteConfig.whatsappNumber,
    message: "Hello, I saw your work in the gallery and I have an inquiry.",
  });

  return (
    <main className="bg-white min-h-screen">
      {/* Header Container */}
      <div className="bg-white">
        <Container className="pt-20 pb-12">
          <FadeIn>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-black tracking-tight text-(--brand-blue) sm:text-5xl uppercase">
                  Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Gallery</span>
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-slate-600 font-medium">
                  Explore our portfolio of successful tank repairs, waterproofings, and industrial installations across the UAE.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/contact" className="bg-(--brand-blue) text-white hover:bg-[#052b57] rounded-xl px-6 py-3 font-bold transition-all shadow-md">
                  Book Inspection
                </ButtonLink>
                <ButtonLink href={wa} className="border-2 border-slate-200 text-slate-600 hover:border-orange-400 hover:text-orange-500 rounded-xl px-6 py-3 font-bold transition-all">
                  Inquire Now
                </ButtonLink>
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>

      {/* Tabs Selection - Removed sticky as requested */}
      <section className="bg-white/80 backdrop-blur-md border-b border-slate-100 py-6">
        <Container>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab("images")}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-black transition-all ${activeTab === "images"
                ? "bg-slate-900 text-white shadow-xl scale-105"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
            >
              <FaImage className="size-4 text-orange-400" />
              Images
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-black transition-all ${activeTab === "videos"
                ? "bg-slate-900 text-white shadow-xl scale-105"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
            >
              <FaVideo className="size-4 text-yellow-500" />
              Videos
            </button>
          </div>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <Container>
          <AnimatePresence mode="wait">
            {activeTab === "images" ? (
              <motion.div
                key="images"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {galleryData.images.map((img, idx) => (
                  <div
                    key={img.id}
                    onClick={() => setSelectedImage(img)}
                    className="group relative rounded-3xl overflow-hidden bg-slate-100 aspect-square shadow-sm hover:shadow-2xl transition-all border border-slate-200 cursor-zoom-in"
                  >
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority={idx < 4}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                      <div className="text-white font-black text-xl mb-1">{img.title}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-orange-400 font-bold text-sm">{img.location}</span>
                        <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold">{img.category}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="videos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {galleryData.videos.map((vid) => (
                  <div key={vid.id} className="relative group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-200 hover:border-orange-200 transition-all shadow-sm">
                    <div className="relative aspect-video bg-slate-200 flex items-center justify-center">
                      <video
                        className="w-full h-full object-cover"
                        poster={vid.thumbnail}
                        controls
                      >
                        <source src={vid.videoUrl || "#"} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      {!vid.videoUrl && (
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-all">
                          <div className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-2xl scale-90 group-hover:scale-100 transition-all">
                            <FaPlay className="size-6 text-orange-500 ml-1" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-lg p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="100vw"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-4 rounded-full transition-all border border-white/10"
              >
                <div className="relative size-6">
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white rotate-45"></div>
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white -rotate-45"></div>
                </div>
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900 to-transparent">
                <div className="text-white font-black text-3xl">{selectedImage.title}</div>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-orange-400 font-bold">{selectedImage.location}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-300 font-medium">{selectedImage.category}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <Container>
          <div className="rounded-[3rem] bg-slate-900 p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-black text-white sm:text-4xl">
                Ready to Start Your Project?
              </h2>
              <p className="mt-4 text-slate-400 max-w-xl mx-auto">
                Join our gallery of successful projects. Contact us today for a professional inspection and free quotation.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <ButtonLink variant="custom" href={wa} className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white px-10 py-4 font-black rounded-2xl shadow-xl shadow-orange-500/20 active:scale-95 transition-all text-lg">
                  Get Free Quotation
                </ButtonLink>
                <ButtonLink variant="outline" href="/services" className="text-black border-white/20 px-10 py-4 font-black rounded-2xl">
                  Explore Services
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
