export function toWhatsAppLink({ phone, message }) {
  const digitsOnly = String(phone || "").replace(/[^\d]/g, "");
  const text = encodeURIComponent(message || "");
  // wa.me supports optional text query param
  return `https://wa.me/${digitsOnly}${text ? `?text=${text}` : ""}`;
}

export function buildMessage(template, variables = {}) {
  return String(template).replace(/\[([^\]]+)\]/g, (_, key) => {
    const v = variables[key];
    return v === undefined || v === null || v === "" ? `[${key}]` : String(v);
  });
}

