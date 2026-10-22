import CTAButton from "./CTAButton";
import RemoteImage from "./RemoteImage";

// Card DOM order: IMAGE -> TITLE -> SPECS -> CTA. The CTA is the last element on every breakpoint.
export default function ProductCard({ product }) {
  if (!product) return null;
  const s = product?.specs ?? {};
  const rows = [
    ["Peak power", s.peak],
    ["Battery", s.battery],
    ["Max speed", s.speed],
    ["Max range", s.range],
    ["Suspension", s.suspension],
    ["Max load", s.load],
  ];
  const shortName = (product?.name ?? "").replace("TESWAY ", "").split(" ").slice(0, 2).join(" ");
  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Phần chứa ảnh: Nền trắng sạch sẽ, đồng bộ màu ảnh gốc */}
      <div className="bg-white p-3 border-b border-slate-100">
        <RemoteImage
          src={product?.image}
          alt={product?.alt ?? product?.name ?? "TESWAY electric bike"}
          width={800}
          height={800}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="h-48 w-full object-contain sm:h-56"
        />
      </div>
      
      {/* Phần thông tin chữ & nút bấm: Tách biệt bằng nền xám nhạt (bg-slate-50) */}
      <div className="flex flex-1 flex-col bg-slate-50 p-5">
        <h3 className="text-xl font-bold text-slate-900">{product?.name ?? "TESWAY e-bike"}</h3>
        <div className="mt-2">
          <p className="text-xs font-bold uppercase tracking-wider text-brand">{product?.tag ?? ""}</p>
          <p className="mt-2">
            <span className="text-2xl font-extrabold text-slate-900">{product?.price ?? ""}</span>{" "}
            <span className="text-sm text-slate-500 line-through">{product?.regular ?? ""}</span>
          </p>
          <dl className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3 text-sm">
            {rows.map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs uppercase tracking-wide text-slate-500">{label}</dt>
                <dd className="font-semibold text-slate-800">{value ?? "—"}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-auto pt-5">
          <CTAButton type="product" k={product?.id} ctaId={`product-${product?.id ?? "unknown"}`} className="w-full">
            View {shortName}
          </CTAButton>
        </div>
      </div>
    </article>
  );
}
