export function formatAED(amount) {
  const n = Number(amount);
  if (!Number.isFinite(n)) return "AED —";
  return `AED ${n.toLocaleString("en-AE")}`;
}

