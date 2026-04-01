import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variants = {
  primary:
    "bg-[color:var(--brand-blue)] text-white hover:bg-[#082e57] focus-visible:ring-[color:var(--brand-blue)] ring-offset-white",
  secondary:
    "bg-[color:var(--brand-teal)] text-white hover:bg-[#ea6a12] focus-visible:ring-[color:var(--brand-teal)] ring-offset-white",
  outline:
    "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 focus-visible:ring-slate-300 ring-offset-white",
  ghost:
    "bg-transparent text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-300 ring-offset-white",
  custom: "",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const cls = `${base} ${variants[variant] || ""} ${className}`.trim();
  const isExternal = typeof href === "string" && /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...props}>
      {children}
    </Link>
  );
}

