"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { siteConfig } from "@/lib/site";
import { toWhatsAppLink } from "@/lib/whatsapp";
import data from "@/data/buy-sell.json";
import tanksData from "@/data/tanks.json";
import { FadeIn } from "@/components/FadeIn";
import { TankCard } from "@/components/TankCard";
import { FaRecycle, FaBoxOpen, FaWhatsapp, FaCheckCircle, FaTools, FaMapMarkerAlt } from "react-icons/fa";
import { GiReceiveMoney, GiWaterTank } from "react-icons/gi";

export default function BuySellPage() {
  const [activeTab, setActiveTab] = useState("buy"); // 'buy' or 'sell'

  // Form State for Sell
  const [sellForm, setSellForm] = useState({
    itemType: "Water Tank",
    material: "Plastic",
    capacity: "",
    condition: "Good",
    location: "",
    hasPhotos: false
  });

  const handleSellSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello UAE STAR SCRAP, I want to sell scrap.\n- Item/Material: ${sellForm.itemType} (${sellForm.material})\n- Quantity/Capacity: ${sellForm.capacity}\n- Condition: ${sellForm.condition}\n- Photos available: ${sellForm.hasPhotos ? "Yes" : "No"}\n- Location: ${sellForm.location}\n\nPlease share valuation and pickup options.`;
    const waUrl = toWhatsAppLink({
      phone: siteConfig.whatsappNumber,
      message: msg,
    });
    window.open(waUrl, "_blank");
  };

  const handleSellChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setSellForm({ ...sellForm, [e.target.name]: value });
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header Container */}
      <div className="bg-white border-b border-slate-100">
        <Container className="pt-16 pb-12">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-black tracking-tight text-(--brand-blue) sm:text-5xl">
                Buy & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Sell</span> Scrap
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Source high-quality refurbished tanks and parts, or turn your unused scrap into cash with our rapid WhatsApp valuation.
              </p>
            </div>

            {/* Custom Tabs */}
            <div className="mt-10 flex justify-center">
              <div className="inline-flex rounded-full bg-slate-100 p-1.5 shadow-inner">
                <button
                  onClick={() => setActiveTab('buy')}
                  className={`flex items-center gap-2 rounded-full px-8 py-3 text-sm font-bold transition-all ${activeTab === 'buy' ? 'bg-white text-(--brand-blue) shadow-md' : 'text-slate-500 hover:text-(--brand-blue)'}`}
                >
                  <FaBoxOpen className={activeTab === 'buy' ? 'text-(--brand-orange)' : ''} />
                  Looking to Buy
                </button>
                <button
                  onClick={() => setActiveTab('sell')}
                  className={`flex items-center gap-2 rounded-full px-8 py-3 text-sm font-bold transition-all ${activeTab === 'sell' ? 'bg-(--brand-blue) text-white shadow-md' : 'text-slate-500 hover:text-(--brand-blue)'}`}
                >
                  <GiReceiveMoney className={activeTab === 'sell' ? 'text-(--brand-teal)' : ''} />
                  Looking to Sell
                </button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>

      <Container className="py-12 max-w-5xl mx-auto">

        {/* BUY TAB */}
        {activeTab === 'buy' && (
          <FadeIn>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-(--brand-orange)">
                  <GiWaterTank className="size-6" />
                </div>
                <h2 className="text-2xl font-black text-(--brand-blue)">Available Refurbished Tanks</h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {tanksData.slice(0, 6).map((tank, index) => (
                  <TankCard key={tank.id} tank={tank} priority={index < 3} />
                ))}
              </div>
              <div className="mt-6 text-center">
                <ButtonLink href="/contact" className="text-sm font-bold text-(--brand-blue) hover:text-(--brand-teal) transition-colors border-b-2 border-transparent hover:border-(--brand-teal)">Contact us for more options →</ButtonLink>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-(--brand-blue)">
                  <FaTools className="size-6" />
                </div>
                <h2 className="text-2xl font-black text-(--brand-blue)">Spare Parts & Fittings</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {data.weSellItems.map((cat) => {
                  const waParts = toWhatsAppLink({
                    phone: siteConfig.whatsappNumber,
                    message: `Hello UAE STAR SCRAP, I need to purchase parts from the "${cat.category}" category.\n\nPlease share options and pricing.`,
                  });
                  return (
                    <div key={cat.category} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="text-lg font-black text-slate-900 mb-3">{cat.category}</div>
                        <ul className="space-y-2 mb-6">
                          {cat.items.map(item => (
                            <li key={item} className="text-sm text-slate-600 flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-(--brand-orange)"></span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a href={waParts} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 w-full bg-slate-900 text-white hover:bg-slate-800 rounded-xl px-4 py-3 font-bold transition-all text-sm mt-auto">
                        <FaWhatsapp className="size-4" /> Request Quote
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        )}

        {/* SELL TAB */}
        {activeTab === 'sell' && (
          <FadeIn>
            <div className="grid lg:grid-cols-5 gap-10 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100">

              <div className="lg:col-span-2">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-yellow-500 shadow-lg text-white mb-6">
                  <GiReceiveMoney className="size-8" />
                </div>
                <h2 className="text-3xl font-black text-(--brand-blue)">Sell Us Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Scrap</span></h2>
                <p className="mt-4 text-slate-600 leading-relaxed mb-8">
                  Fill out this quick form to generate a structured request. It will open WhatsApp with all your details pre-filled for our team to review instantly.
                </p>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-(--brand-teal)/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="relative z-10">
                    <div className="text-xs font-black tracking-widest text-slate-400 uppercase mb-3 text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">What we accept</div>
                    <ul className="space-y-3 text-sm text-slate-700 font-bold">
                      {data.weBuyScrap.map(x => (
                        <li key={x} className="flex items-start gap-2 group">
                          <FaCheckCircle className="size-4 text-(--brand-teal) shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                          <span className="group-hover:text-(--brand-blue) transition-colors">{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 lg:pl-10 lg:border-l border-slate-100">
                <form onSubmit={handleSellSubmit} className="space-y-6">

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Item Type *</label>
                      <select name="itemType" value={sellForm.itemType} onChange={handleSellChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-(--brand-teal) focus:border-transparent font-medium">
                        <option value="Water Tank">Water Tank</option>
                        <option value="Water Pump / Motor">Water Pump / Motor</option>
                        <option value="Pipes / Fittings">Pipes / Fittings</option>
                        <option value="Mixed Scrap (Metal/Plastic)">Mixed Scrap (Metal/Plastic)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Material *</label>
                      <select name="material" value={sellForm.material} onChange={handleSellChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-(--brand-teal) focus:border-transparent font-medium">
                        <option value="PVC water Tank">PVC water Tank</option>
                        <option value="GRP water Tank">GRP water Tank</option>
                        <option value="Diesel Tank">Diesel Tank</option>
                        <option value="HDPE / Fiber">HDPE / Fiber</option>
                        <option value="Plastic (HDPE / Fiber)">Plastic (HDPE / Fiber)</option>
                        <option value="Stainless Steel">Stainless Steel</option>
                        <option value="Galvanized Iron (GI)">Galvanized Iron (GI)</option>
                        <option value="Copper / Brass">Copper / Brass</option>
                        <option value="Mixed / Unsure">Mixed / Unsure</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Quantity / Capacity *</label>
                      <input type="text" name="capacity" required placeholder="e.g. 1000L, or 50kg" value={sellForm.capacity} onChange={handleSellChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-(--brand-teal) focus:border-transparent font-medium" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Condition *</label>
                      <select name="condition" value={sellForm.condition} onChange={handleSellChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-(--brand-teal) focus:border-transparent font-medium">
                        <option value="Good (Functional)">Good (Functional)</option>
                        <option value="Minor Damage / Leaking">Minor Damage / Leaking</option>
                        <option value="Completely Broken / Scrap">Completely Broken / Scrap</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Location (Emirate & Area) *</label>
                    <input type="text" name="location" required placeholder="e.g. Dubai Marina, Dubai" value={sellForm.location} onChange={handleSellChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-(--brand-teal) focus:border-transparent font-medium" />
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer group p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                    <input type="checkbox" name="hasPhotos" checked={sellForm.hasPhotos} onChange={handleSellChange} className="h-5 w-5 text-(--brand-teal) focus:ring-(--brand-teal) border-gray-300 rounded cursor-pointer" />
                    <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">I have photos ready to send on WhatsApp</span>
                  </label>

                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#128C7E] rounded-xl px-6 py-4 font-bold transition-all shadow-lg shadow-green-500/20 text-lg">
                    <FaWhatsapp className="size-6" /> Generate WhatsApp Request
                  </button>
                  <p className="text-xs text-center text-slate-500 font-medium">Clicking this will construct your message and open WhatsApp securely.</p>
                </form>
              </div>

            </div>
          </FadeIn>
        )}

      </Container>
    </div>
  );
}
