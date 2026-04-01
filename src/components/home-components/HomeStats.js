"use client";

import { useRef, useEffect } from "react";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { FaWrench, FaHandshake, FaWhatsapp } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const displayValue = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

export function HomeStats() {
  const stats = [
    { value: 500, suffix: "+", label: "Tanks Repaired", icon: FaWrench },
    { value: 1000, suffix: "+", label: "Happy Customers", icon: FaHandshake },
    { value: 6, suffix: "+", label: "Months Warranty", icon: IoShieldCheckmarkOutline },
    { value: 24, suffix: "/7", label: "WhatsApp Support", icon: FaWhatsapp },
  ];

  return (
    <section className="bg-white py-16 border-b border-slate-50 overflow-hidden">
      <Container>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 mx-auto">
          {stats.map((stat, idx) => (
            <FadeIn key={stat.label} delay={idx * 0.1} className="group text-center flex flex-col items-center">
              <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-yellow-600 shadow-lg shadow-orange-500/10 transition-transform group-hover:scale-110">
                <stat.icon className="size-6 text-white" />
              </div>
              <div className="text-3xl font-black text-slate-800 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1.5 leading-relaxed">
                {stat.label}
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
