"use client";
import { useState } from "react";
import { VIDEO } from "@/lib/config";

const THUMBS = (id) => [
  `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
];

// Click-to-load facade: no YouTube iframe (and no YouTube cookies) until the visitor presses play.
export default function VideoShowcase() {
  const id = VIDEO?.id;
  const [playing, setPlaying] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbFailed, setThumbFailed] = useState(false);
  if (!id) return null;

  const thumbs = THUMBS(id);
  const nextThumb = () => (thumbIndex < thumbs.length - 1 ? setThumbIndex(thumbIndex + 1) : setThumbFailed(true));

  return (
    <section id="video" className="mx-auto max-w-4xl scroll-mt-24 px-4 py-12" aria-labelledby="video-title">
      <h2 id="video-title" className="text-2xl font-extrabold sm:text-3xl">See TESWAY in everyday life</h2>
      <p className="mt-2 text-slate-600">
        A video from the merchant&apos;s own YouTube channel: &ldquo;{VIDEO.title}&rdquo;.
      </p>

      <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-[#1e293b] bg-slate-950">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={VIDEO.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${VIDEO.title}`}
            className="group absolute inset-0 flex h-full w-full items-center justify-center"
          >
            {!thumbFailed && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={thumbs[thumbIndex]}
                src={thumbs[thumbIndex]}
                alt=""
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover"
                onError={nextThumb}
                onLoad={(e) => {
                  // YouTube answers a missing maxresdefault with a tiny placeholder image, not an error.
                  if (e.currentTarget.naturalWidth <= 120) nextThumb();
                }}
              />
            )}
            <span className="absolute inset-0 bg-slate-950/40 transition-colors group-hover:bg-slate-950/25" aria-hidden="true" />
            <span className="relative flex flex-col items-center gap-4 px-4 text-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white shadow-xl transition-transform group-hover:scale-105 group-active:scale-95" aria-hidden="true">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-sm font-extrabold text-ink shadow-lg">{VIDEO.badge}</span>
            </span>
          </button>
        )}
      </div>
      <p className="mt-3 text-xs text-slate-500">The video loads from YouTube (privacy-enhanced mode) only after you press play.</p>
    </section>
  );
}
