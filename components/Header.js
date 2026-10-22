"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import CTAButton from "./CTAButton";

const NAV = [
  { href: "#promo", label: "Black Friday Deals" },
  { href: "#collections", label: "Collections" },
  { href: "#models", label: "Models" },
  { href: "#compare", label: "Compare" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("PRIME100");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    if (!open || typeof document === "undefined") return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="w-full relative z-50 bg-slate-950">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="w-full bg-brand py-2 px-3 text-center text-xs font-semibold text-white border-b border-blue-600">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-1.5 leading-tight">
          <span>🎉 Save $100 OFF with code</span>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1 rounded border border-dashed border-white/80 bg-white/20 px-2 py-0.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-white hover:text-ink transition-all active:scale-95 cursor-pointer shrink-0"
            title="Click to copy coupon code"
          >
            <span>PRIME100</span>
            <span className="rounded bg-white/30 px-1 py-0.2 text-[9px] uppercase font-bold text-white">
              {copied ? "Copied! ✓" : "Copy"}
            </span>
          </button>
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950 text-white">
        <div className="mx-auto flex h-16 sm:h-20 max-w-6xl items-center justify-between gap-2 px-4">
          {/* Logo Giữ nguyên hình ảnh */}
          <Logo priority className="h-11 w-auto sm:h-14" />

          {/* Desktop Navigation */}
          <div className="hidden items-center justify-end gap-6 md:flex">
            <nav aria-label="Primary" className="flex items-center gap-6 text-sm font-medium">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="hover:text-blue-300">
                  {n.label}
                </a>
              ))}
            </nav>
            <CTAButton type="collection" k="black-friday" ctaId="header-deals" className="min-h-11 px-5 py-2 text-sm">
              Shop the Deals
            </CTAButton>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 md:hidden shrink-0 bg-slate-900 text-white cursor-pointer active:scale-95"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {/* 3. MOBILE MENU DROPDOWN (Chống tràn & Định vị chính xác) */}
        {open && (
          <div 
            id="mobile-menu" 
            className="absolute left-0 right-0 top-full z-50 w-full border-b border-slate-800 bg-slate-950 px-5 pb-6 pt-3 md:hidden shadow-2xl transition-all"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col">
              <Link 
                href="/" 
                onClick={() => setOpen(false)} 
                className="border-b border-slate-800/80 py-3.5 text-base font-semibold text-white hover:text-blue-400 active:text-blue-300"
              >
                Home
              </Link>
              {NAV.map((n) => (
                <a 
                  key={n.href} 
                  href={n.href} 
                  onClick={() => setOpen(false)} 
                  className="border-b border-slate-800/80 py-3.5 text-base font-semibold text-white hover:text-blue-400 active:text-blue-300"
                >
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="mt-5">
              <CTAButton type="collection" k="black-friday" ctaId="mobile-menu-deals" className="w-full justify-center">
                Shop Black Friday Deals
              </CTAButton>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
