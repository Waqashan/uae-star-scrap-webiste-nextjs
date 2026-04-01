"use client";

import { useMemo, useState } from "react";
import { TankCard } from "@/components/TankCard";
import { ButtonLink } from "@/components/ButtonLink";

function uniqueSorted(values) {
  return Array.from(new Set(values)).sort((a, b) => {
    if (typeof a === "number" && typeof b === "number") return a - b;
    return String(a).localeCompare(String(b));
  });
}

export function TanksFiltersClient({ tanks }) {
  const capacities = useMemo(
    () => uniqueSorted(tanks.map((t) => t.capacityLiters)),
    [tanks]
  );
  const materials = useMemo(
    () => uniqueSorted(tanks.map((t) => t.material)),
    [tanks]
  );

  const [capacity, setCapacity] = useState("");
  const [material, setMaterial] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filtered = useMemo(() => {
    return tanks.filter((t) => {
      if (capacity && String(t.capacityLiters) !== capacity) return false;
      if (material && String(t.material) !== material) return false;
      if (maxPrice && Number(t.priceAED) > Number(maxPrice)) return false;
      return true;
    });
  }, [tanks, capacity, material, maxPrice]);

  return (
    <div className="mt-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-4">
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Capacity
            <select
              className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-900"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            >
              <option value="">All</option>
              {capacities.map((c) => (
                <option key={c} value={String(c)}>
                  {c}L
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Material
            <select
              className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-900"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
            >
              <option value="">All</option>
              {materials.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Max price (AED)
            <input
              className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-900"
              placeholder="e.g. 1000"
              inputMode="numeric"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value.replace(/[^\d]/g, ""))}
            />
          </label>

          <div className="grid content-end gap-2">
            <ButtonLink
              href="/contact"
              variant="outline"
              className="h-11 w-full"
            >
              Need help choosing?
            </ButtonLink>
            <button
              type="button"
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 text-sm font-extrabold text-slate-900 hover:bg-slate-100"
              onClick={() => {
                setCapacity("");
                setMaterial("");
                setMaxPrice("");
              }}
            >
              Reset filters
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => (
          <TankCard key={t.id} tank={t} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
          No tanks match your filters right now. Try resetting filters or message us on
          WhatsApp for latest availability.
        </div>
      ) : null}
    </div>
  );
}

