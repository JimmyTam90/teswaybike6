'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function FloatingChat() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  // Mount on the client only. (?nochat=1 still hides the widget, handy for debugging.)
  useEffect(() => {
    setMounted(!new URLSearchParams(window.location.search).has('nochat'));
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const handleVipClick = (e) => {
    e.preventDefault();
    setOpen(false);
    const target = document.getElementById('vip');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'vip';
    }
  };

  if (!mounted) return null;

  return (
    // Khung ngoài chỉ neo dưới/phải, khai báo rõ top/left = auto. Không portal, không z-index khổng lồ.
    <div className="fixed bottom-[88px] right-4 top-auto left-auto z-[60] flex flex-col items-end gap-3 md:bottom-6 md:right-6">
      {open && (
        <div
          id="tesway-support-card"
          role="dialog"
          aria-label="TESWAY Support Hub"
          className="w-80 max-w-[calc(100vw-2rem)] rounded-2xl border border-amber-400/30 bg-black p-5 text-left shadow-2xl sm:w-96"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-green-500" aria-hidden="true" />
              <h2 className="text-base font-extrabold text-white">TESWAY Support Hub</h2>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="cursor-pointer px-2 py-1 text-sm font-bold text-gray-400 hover:text-white"
              aria-label="Close support menu"
            >
              ✕
            </button>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-gray-300">
            👋 Need assistance with TESWAY e-bike fitment, specs, or VIP discount codes?
          </p>

          <div className="mt-4 flex flex-col gap-2.5">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex min-h-[44px] w-full items-center justify-center rounded-xl bg-amber-400 px-4 py-2.5 text-center text-sm font-extrabold text-black transition-colors hover:bg-amber-300"
            >
              📩 Contact Support &amp; Help Desk
            </Link>
            <a
              href="#vip"
              onClick={handleVipClick}
              className="flex min-h-[44px] w-full items-center justify-center rounded-xl border border-white/20 px-4 py-2.5 text-center text-sm font-semibold text-gray-200 transition-colors hover:border-amber-400/60 hover:text-amber-300"
            >
              🎁 Claim VIP Price-Drop &amp; Deals
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="tesway-support-card"
        aria-label={open ? 'Close support chat' : 'Open support chat'}
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-amber-400/40 bg-[#222] text-amber-400 shadow-xl transition-colors hover:border-amber-400 sm:h-14 sm:w-14"
      >
        {open ? (
          <span className="text-xl font-bold leading-none" aria-hidden="true">✕</span>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.4 8.4 0 0 1-9 8.3 8.7 8.7 0 0 1-3.6-.8L3 20l1.1-4.6A8.3 8.3 0 0 1 3 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5z" />
          </svg>
        )}
      </button>
    </div>
  );
}
