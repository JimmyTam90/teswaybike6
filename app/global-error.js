"use client";

export default function GlobalError({ reset }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", textAlign: "center", padding: "4rem 1rem" }}>
        <h1>Something went wrong</h1>
        <p>Please try again.</p>
        <button type="button" onClick={() => reset()} style={{ padding: "0.75rem 1.5rem", borderRadius: 12, border: 0, background: "#2563eb", color: "#fff", fontWeight: 700 }}>
          Reload
        </button>
      </body>
    </html>
  );
}
