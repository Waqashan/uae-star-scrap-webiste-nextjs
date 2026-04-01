"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { GiWaterTank } from "react-icons/gi";
import productsData from "@/data/products.json";

export function HomeProducts() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    },
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="products" className="bg-white py-24 border-b border-slate-100">
      <Container>
        <FadeIn className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-(--brand-orange)/10 px-4 py-2 text-sm font-bold text-(--brand-orange) mb-6">
                <GiWaterTank className="size-4" />
                PRODUCTS
              </div>
              <h2 className="text-4xl font-black tracking-tight text-(--brand-blue) sm:text-5xl mb-6">
                Products that can stand the test of time at <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">superior quality</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                UAE STAR SCRAP has a variety of water storage tanks at different capacities to meet different water storage problems. May it be for residential, commercial, or industrial, UAE STAR SCRAP has the right kind of water storage container that you need. All of our tanks are designed to meet the intended specifications and is thoroughly tested and approved according to different water regulating bodies. We offer different water storage solutions.
              </p>
            </div>

            {/* Carousel Navigation */}
            <div className="flex gap-4">
              <button
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
                className="flex items-center justify-center size-12 rounded-full border-2 border-slate-200 text-slate-500 hover:border-(--brand-teal) hover:text-(--brand-teal) hover:bg-teal-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="size-6" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
                className="flex items-center justify-center size-12 rounded-full border-2 border-slate-200 text-slate-500 hover:border-(--brand-teal) hover:text-(--brand-teal) hover:bg-teal-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="size-6" />
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Embla Carousel Viewport */}
        <FadeIn delay={0.2}>
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex gap-6 pb-8 pt-4">
              {productsData.map((product, idx) => (
                <Link
                  href={`/products/${product.slug}`}
                  key={idx}
                  className="flex-[0_0_85%] min-w-0 sm:flex-[0_0_45%] lg:flex-[0_0_31.33%]"
                >
                  <div className="group relative rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-[4/3] relative w-full">
                      <Image
                        src={product.image || "/assets/images/watertank.webp"}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <div className="w-10 h-1 bg-(--brand-orange) mb-3 transition-all duration-300 group-hover:w-16"></div>
                      <h3 className="text-xl font-black text-white drop-shadow-md">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
