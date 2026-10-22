# tesway-ebikes (PrimeGearLab spoke)

Next.js 14.2.35 (App Router, JavaScript) + Tailwind 3. Served publicly at https://primegearlab.com/tesway-ebike
through the Hub rewrite; deployed spoke: https://tesway-ebikes5.vercel.app/tesway-ebike

- `npm install && npm run build` to verify. `basePath` and `assetPrefix` are both `/tesway-ebike` (override with `NEXT_PUBLIC_BASE_PATH`; if that variable is set in Vercel it must also be `/tesway-ebike`).
- Hub: merge the two rewrites in `hub/vercel.json` into the Hub project's existing `vercel.json`. Do not overwrite other spokes.
- Affiliate URLs live only in `lib/affiliate.js`. Optional tracking IDs go in `.env` (see `.env.example`).

- Favicon: `public/favicon.png`, linked from `app/layout.js` (`?v=2` busts browser caches; bump it if you replace the file).
- Product images load straight from the merchant CDN through `components/RemoteImage.js`, which falls back to a labelled box if an image fails.
