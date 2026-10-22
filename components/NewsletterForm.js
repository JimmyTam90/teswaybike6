'use client';
import Link from "next/link";

export default function NewsletterForm() {
  return (
    <div id="vip" className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-8 shadow-2xl">
      {/* Vệt sáng trang trí nền */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Tiêu đề & Lợi ích */}
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-400 border border-amber-500/20 mb-3">
            <span>🎁</span> VIP Exclusive Deals & Coupons
          </span>
          <h3 className="text-xl font-extrabold text-white sm:text-2xl tracking-tight">
            Unlock Secret TESWAY Discounts & E-Bike Guides
          </h3>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Subscribe to receive unlisted coupon codes, secret flash sale alerts, and expert comparison charts straight to your inbox.
          </p>
        </div>

        {/* Form nhập Email Brevo */}
        <form
          action="https://73138b25.sibforms.com/serve/MUIFA" // Đảm bảo đúng URL Brevo Form của anh
          method="POST"
          target="_blank"
          className="w-full lg:max-w-md"
        >
          <div className="flex flex-col sm:flex-row gap-2.5">
            <input
              type="email"
              name="EMAIL"
              required
              placeholder="Enter your email address..."
              className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3.5 text-sm text-white placeholder-slate-500 transition-all focus:border-amber-500 focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/25 active:scale-95"
            >
              Get VIP Access
            </button>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            🔒 Zero spam. Unsubscribe at any time. View our{" "}
            <Link href="/privacy" className="text-slate-300 underline underline-offset-2 hover:text-amber-400">
              Privacy Policy
            </Link>.
          </p>
        </form>
      </div>
    </div>
  );
}
