import Image from "next/image";
import Link from "next/link";
import { formatAED } from "@/lib/format";
import { siteConfig } from "@/lib/site";
import { toWhatsAppLink } from "@/lib/whatsapp";
import { FaWhatsapp, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";

export function TankCard({ tank, priority = false }) {
  const img = tank?.images?.[0] || "/tanks/placeholder.svg";
  
  const waTank = toWhatsAppLink({
    phone: siteConfig.whatsappNumber,
    message: `Hello UAE STAR SCRAP, I'm interested in buying this refurbished tank:\n- Capacity: ${tank.capacityLiters}L\n- Material: ${tank.material}\n- Price: AED ${tank.priceAED}\n- Warranty: ${tank.warrantyMonths} months\n\nPlease share availability and delivery options.`,
  });

  return (
    <div className="group overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative">
      <Link href={`/tanks/${tank.id}`} className="block relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
        <Image
          src={img}
          alt={`${tank.capacityLiters}L ${tank.material} water tank`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={priority}
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider text-(--brand-blue) shadow-lg ring-1 ring-slate-200">
          {tank.condition}
        </div>
        
        {/* Capacity Badge */}
        <div className="absolute bottom-4 left-4 bg-(--brand-blue)/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-black text-white shadow-lg">
          {tank.capacityLiters}L
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4 gap-4">
          <Link href={`/tanks/${tank.id}`} className="hover:text-(--brand-teal) transition-colors flex-grow">
            <h3 className="text-xl font-black text-slate-800 leading-tight group-hover:text-(--brand-blue)">
              {tank.material} Tank
            </h3>
            <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">{tank.id.split('-')[0]} series</p>
          </Link>
          <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-600 whitespace-nowrap">
            AED {tank.priceAED}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-6 flex-grow">
          <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 text-[11px] font-bold text-slate-600">
            <FaCheckCircle className="text-(--brand-teal) size-3 shrink-0"/> {tank.warrantyMonths}m Warranty
          </div>
          <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 text-[11px] font-bold text-slate-600">
            <FaMapMarkerAlt className="text-(--brand-orange) size-3 shrink-0"/> {tank.location}
          </div>
        </div>
        
        <a href={waTank} target="_blank" rel="noopener noreferrer" className="mt-auto flex justify-center items-center gap-2 w-full bg-slate-900 text-white hover:bg-(--brand-teal) rounded-2xl px-4 py-4 font-black transition-all text-sm shadow-xl hover:-translate-y-1 active:scale-95">
          <FaWhatsapp className="size-5" /> Inquire WhatsApp
        </a>
      </div>
    </div>
  );
}
