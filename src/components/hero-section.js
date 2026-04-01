import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { siteConfig } from "@/lib/site";
import Image from "next/image";
import { 
  FaWhatsapp, 
  FaWrench, 
  FaClock, 
  FaCheckCircle, 
  FaRocket,
  FaArrowRight
} from "react-icons/fa";
import { GiWaterTank, GiReceiveMoney } from "react-icons/gi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

export default function Hero({ waRepair, waBuy, waSell }) {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10" />
        <Image
          src="/assets/images/watertank.webp"
          alt="Water tank repair background"
          fill
          className="object-cover object-center"
          priority={true}
          loading="eager"
        />
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />
      </div>

      {/* Floating Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float-slow">
          <GiWaterTank className="size-20 text-(--brand-orange)/20" />
        </div>
        <div className="absolute bottom-32 right-20 animate-float-delay">
          <FaWrench className="size-16 text-(--brand-teal)/20" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-pulse-slow">
          <div className="size-32 rounded-full bg-(--brand-orange)/10 blur-3xl" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-pulse-slow delay-1000">
          <div className="size-40 rounded-full bg-(--brand-teal)/10 blur-3xl" />
        </div>
      </div>

      <Container className="relative z-30 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 ring-1 ring-white/30 animate-fade-in-up">
            <span className="relative flex size-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full size-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-semibold text-white">Trusted by 1000+ UAE Customers</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight animate-fade-in-up animation-delay-200">
            <span className="text-white">Water Tank</span>
            <br />
            <span className="bg-gradient-to-r from-(--brand-orange) via-(--brand-teal) to-(--brand-orange) bg-clip-text text-transparent animate-gradient">
              Repair, Resale & Scrap
            </span>
            <br />
            <span className="text-white">with Warranty</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            {siteConfig.name} refurbishes damaged tanks, sells tested used tanks
            with warranty, and buys/sells water tank scrap and spare parts across
            the UAE. Fast WhatsApp replies with fair valuation.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-600">
            <ButtonLink 
              href={waRepair} 
              className="group relative overflow-hidden bg-gradient-to-r from-(--brand-orange) to-orange-600 text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl px-8 py-4 font-bold text-lg"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">
                <FaWrench className="size-5 transition-transform group-hover:rotate-12" />
                Repair My Tank
                <FaArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </ButtonLink>
            
            <ButtonLink 
              href={waBuy} 
              className="group relative overflow-hidden bg-gradient-to-r from-(--brand-teal) to-teal-600 text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl px-8 py-4 font-bold text-lg"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">
                <GiWaterTank className="size-5" />
                Buy a Tank
              </span>
            </ButtonLink>
            
            <ButtonLink 
              href={waSell} 
              className="group relative overflow-hidden border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 rounded-xl px-8 py-4 font-bold text-lg backdrop-blur-sm"
            >
              <span className="relative flex items-center gap-2">
                <GiReceiveMoney className="size-5" />
                Sell Scrap
              </span>
            </ButtonLink>
          </div>

          {/* Features Grid */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up animation-delay-800">
            {[
              { icon: FaClock, text: "24/7 Support", color: "from-(--brand-orange) to-orange-600" },
              { icon: FaCheckCircle, text: "100% Tested", color: "from-(--brand-teal) to-teal-600" },
              { icon: IoShieldCheckmarkOutline, text: "6 Months Warranty", color: "from-blue-500 to-blue-600" },
              { icon: FaRocket, text: "Same Day Service", color: "from-purple-500 to-purple-600" },
            ].map((item, idx) => (
              <div 
                key={item.text} 
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className={`inline-flex rounded-xl bg-gradient-to-br ${item.color} p-3 mb-3 group-hover:scale-110 transition-transform`}>
                  <item.icon className="size-5 text-white" />
                </div>
                <div className="text-sm font-semibold text-white">{item.text}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white/70 rounded-full mt-2 animate-scroll" />
            </div>
          </div>
        </div>
      </Container>

      {/* Add required animations to global CSS */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-delay {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(8px);
            opacity: 0;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float-delay 5s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}