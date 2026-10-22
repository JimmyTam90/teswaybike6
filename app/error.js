"use client";

export default function Error({ reset }) {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-2xl font-extrabold">Something went wrong</h1>
      <p className="text-slate-600">The page hit an unexpected problem. Please try again.</p>
      <button type="button" onClick={() => reset()} className="inline-flex min-h-12 items-center rounded-xl bg-brand px-6 font-bold text-white hover:bg-brand-dark">
        Reload this section
      </button>
    </main>
  );
}
