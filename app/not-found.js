import Link from "next/link";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-4 px-4 text-center">
      <Logo className="h-28 w-auto" />
      <h1 className="text-3xl font-extrabold">Page not found</h1>
      <p className="text-slate-600">The page you were looking for does not exist or has moved.</p>
      <Link href="/" className="inline-flex min-h-12 items-center rounded-xl bg-brand px-6 font-bold text-white hover:bg-brand-dark">Back to home</Link>
    </main>
  );
}
