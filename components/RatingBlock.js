import { RATING, ratingIsValid } from "@/lib/config";

// Shows a third-party rating with its source. Renders nothing unless the flag is on and the data is valid.
export default function RatingBlock({ className = "" }) {
  if (!ratingIsValid()) return null;
  const r = RATING;

  const pct = Math.round((r.value / r.max) * 100);
  return (
    <a
      href={r.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-2 text-sm hover:bg-slate-800 ${className}`}
      aria-label={`${r.value} out of ${r.max} on ${r.source}, based on ${r.count} reviews. Opens ${r.source} in a new tab.`}
    >
      <span className="relative inline-block text-lg leading-none" aria-hidden="true">
        <span className="text-slate-600">★★★★★</span>
        <span className="absolute inset-y-0 left-0 overflow-hidden whitespace-nowrap text-amber-400" style={{ width: `${pct}%` }}>★★★★★</span>
      </span>
      <span className="font-bold text-white">{r.value} / {r.max}</span>
      <span className="text-slate-300">{r.source} · {r.count} reviews</span>
      <span className="w-full text-xs text-slate-400 sm:w-auto">As of {r.asOf}. Independent reviews, mixed feedback included.</span>
    </a>
  );
}
