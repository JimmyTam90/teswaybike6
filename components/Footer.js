import Link from "next/link";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";
import { SITE } from "@/lib/site";
import { SOCIALS } from "@/lib/config";

const LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  { href: "/contact", label: "Contact Us" },
];

const focusRing = "rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500";

const ICONS = {
  facebook: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  pinterest: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.363-.053.225-.172.271-.399.165-1.495-.697-2.433-2.881-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.221 7.462-1.214 0-2.355-.63-2.744-1.379l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
    </svg>
  ),
};

export default function Footer() {
  const contactEmail = SITE?.email || "contact@primegearlab.com";

  return (
    // data-footer-version lets you confirm which build is live: view-source and search for "footer-v3".
    <footer data-footer-version="footer-v3" className="w-full border-t border-slate-800/80 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <NewsletterForm />

        {/* DOM order (mobile order): logo, legal links, text, social icons.
            Desktop: logo + text on the left, legal links top-right, social icons bottom-right. */}
        <div className="grid gap-8 pt-12 text-center md:grid-cols-[1fr_auto] md:gap-x-12 md:text-left items-start">
          
          {/* Logo bên trái */}
          <div className="flex items-start justify-center md:col-start-1 md:row-start-1 md:justify-start">
            <Logo className="h-24 w-auto md:h-28" />
          </div>

          {/* Menu pháp lý góc trên bên phải */}
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-300 md:col-start-2 md:row-start-1 md:flex-nowrap md:justify-end md:self-start md:whitespace-nowrap"
          >
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={`transition-colors hover:text-amber-500 ${focusRing}`}>
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Disclaimer & thông tin bản quyền */}
          <div className="space-y-3 text-xs md:col-start-1 md:row-start-2 md:max-w-3xl md:text-left md:text-sm text-slate-400/90 leading-relaxed">
            <p>{SITE.disclaimer}</p>
            <p>PrimeGearLab is an independent publisher and is not the merchant. Product names and trademarks belong to their owners.</p>
            <p>
              Contact:{" "}
              <a href={`mailto:${contactEmail}`} className={`text-slate-300 underline underline-offset-2 transition-colors hover:text-amber-500 ${focusRing}`}>
                {contactEmail}
              </a>
            </p>
            <p className="pt-2 text-xs text-slate-500">{SITE.copyright}</p>
          </div>

          {/* Mạng xã hội góc dưới bên phải */}
          <ul className="flex items-center justify-center gap-3 md:col-start-2 md:row-start-2 md:self-end md:justify-self-end" aria-label="Social media">
            {(SOCIALS ?? []).map((s) => {
              const IconComponent = ICONS[s.id];
              if (!IconComponent) return null; // An toàn nếu thiếu icon
              return (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 text-slate-300 transition-all hover:border-amber-500 hover:bg-slate-800 hover:text-amber-500 hover:scale-105 ${focusRing}`}
                  >
                    {IconComponent}
                  </a>
                </li>
              );
            })}
          </ul>

        </div>
      </div>
    </footer>
  );
}
