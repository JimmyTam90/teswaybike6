"use client";
import { useEffect, useState } from "react";
import CTAButton from "./CTAButton";

export default function ExitPopup() {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Kích hoạt 1: Re con trỏ chuột lên đỉnh màn hình (Desktop)
    const handleMouseLeave = (e) => {
      if (e.clientY <= 10 && !sessionStorage.getItem("exit_popup_shown")) {
        setShow(true);
        sessionStorage.setItem("exit_popup_shown", "true");
      }
    };

    // Kích hoạt 2: Cuộn quá 40% trang trên Mobile
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      if (scrollPosition / totalHeight > 0.4 && !sessionStorage.getItem("exit_popup_shown")) {
        setShow(true);
        sessionStorage.setItem("exit_popup_shown", "true");
      }
    };

    // Kích hoạt 3: Tự động bật sau 12 giây nếu người dùng dừng lướt (Timer Fallback)
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("exit_popup_shown")) {
        setShow(true);
        sessionStorage.setItem("exit_popup_shown", "true");
      }
    }, 12000);

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("PRIME100");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-sm sm:max-w-md rounded-2xl bg-slate-900 border border-slate-700 p-5 sm:p-6 text-white shadow-2xl text-center">
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-3 right-3 text-slate-400 hover:text-white text-lg font-bold p-1 cursor-pointer"
          aria-label="Close"
        >
          ✕
        </button>
        <span className="text-3xl sm:text-4xl">🎁</span>
        <h3 className="mt-2 text-xl sm:text-2xl font-black">Wait! Don&apos;t miss out!</h3>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-300">
          Claim an extra <span className="font-bold text-brand">$100 OFF</span> on select TESWAY e-bikes!
        </p>
        <div className="mt-4 flex items-center justify-between gap-2 rounded-xl bg-slate-950 p-2.5 border border-slate-800">
          <span className="text-xs uppercase text-slate-400 font-semibold pl-1">Code:</span>
          <code className="text-base sm:text-lg font-black tracking-wider text-brand">PRIME100</code>
          <button
            type="button"
            onClick={handleCopy}
            className="rounded-lg bg-brand px-3 py-1.5 text-xs font-bold text-white hover:bg-blue-600 transition-all active:scale-95 cursor-pointer shrink-0"
          >
            {copied ? "Copied! ✓" : "Copy Code"}
          </button>
        </div>
        <div className="mt-4">
          <CTAButton type="collection" k="black-friday" ctaId="exit-popup-btn" className="w-full text-sm py-2.5">
            Shop Deals & Save $100
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
