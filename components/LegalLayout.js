import Link from "next/link";
import Logo from "./Logo";
import Footer from "./Footer";

export default function LegalLayout({ children, title }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <header className="w-full border-b border-slate-800 bg-slate-950">
        <div className="mx-auto flex h-20 max-w-4xl items-center justify-between gap-4 px-4 sm:px-6">
          <Logo priority className="h-12 w-auto" />

          <Link
            href="/"
            className="shrink-0 text-sm font-semibold text-slate-300 transition-colors hover:text-amber-400"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
        {title ? (
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h1>
        ) : null}
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-slate-300 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_a]:text-amber-400 [&_a]:underline [&_a:hover]:text-amber-300">
          {children}
        </div>
      </main>

      {/* Footer tự do hiển thị full width và logo Footer co giãn tự nhiên không bị xén chữ */}
      <Footer />
    </div>
  );
}
