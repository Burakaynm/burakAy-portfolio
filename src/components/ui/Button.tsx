import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export function Button({ children, href, variant = "primary" }: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition duration-200";

  const variantClasses =
    variant === "primary"
      ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/20 hover:scale-[1.02] hover:shadow-blue-500/30"
      : "border border-white/10 bg-white/5 text-slate-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10";

  const isExternalLink = href.startsWith("http");
  const isPdfLink = href.endsWith(".pdf");

  const shouldOpenInNewTab = isExternalLink || isPdfLink;

  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses}`}
      target={shouldOpenInNewTab ? "_blank" : undefined}
      rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
