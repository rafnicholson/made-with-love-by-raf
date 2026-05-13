# Made with Love by Raf

A tiny one-page site for a home sourdough bakery in San Francisco. Pre-order a few loaves each day, pickup or $2 SF delivery.

**Live at:** <https://madewithlovebyraf.com>
**Repo:** <https://github.com/rafnicholson/made-with-love-by-raf>
**Hosted on:** Cloudflare Workers (free), auto-deploys on every push to `main`.

## Files (only 4 you'll ever touch)

| File | What it is |
|---|---|
| `menu.js` | **The one file you edit each morning.** Today's date, loaves, prices, Stripe links, sold-out flags. |
| `index.html` | Page structure. Rarely changes. |
| `styles.css` | Look and feel. Edit if you want a different color or vibe. |
| `app.js` | Glue that renders `menu.js` onto the page. Don't edit unless you're adding features. |

`images/coverphoto.png` is your hero photo. Drop new bread photos in `images/` and reference them in `menu.js` as `image: "images/your-photo.jpg"`.

## Daily routine (60 seconds)

1. Open `menu.js` (locally in an editor, or on github.com from your phone).
2. Update `date` (e.g. `"Wednesday, May 13"`).
3. Update the three loaves' names / descriptions / prices.
4. Paste in each loaf's Stripe Payment Link as `stripeUrl`.
5. Save → commit → push. Cloudflare auto-deploys in ~30 seconds. Hard-refresh the live site to see it.

When a loaf sells out during the day, flip its `soldOut: false` to `soldOut: true`, commit, and push. (From your phone: edit on github.com → "Commit changes" → done.)

## Preview locally

Double-clicking `index.html` won't load the fonts properly because of how browsers handle local files. Instead:

```bash
cd "/Users/Raf/Made with Love by Raf"
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Wiring Stripe Payment Links

For each loaf:

1. Go to [dashboard.stripe.com → Payment Links](https://dashboard.stripe.com/payment-links).
2. Create a product (e.g. "Jalapeño Cheddar Loaf"), set price.
3. **Adjustable quantity**: turn on, set Min `1`, Max `2`. Lets one customer grab a pair but stops anyone clearing the whole bake.
4. Add a **custom field** asking "Pickup or delivery?" (two options). Add another asking for "Phone number" so you can text them.
5. Copy the resulting `https://buy.stripe.com/...` URL into `menu.js`.

**Do NOT use Stripe's "Limit number of payments" setting.** It counts checkouts, not loaves — so with adjustable quantity on, the math no longer reflects real inventory. Manage inventory through the `soldOut: true` flag in `menu.js` instead: when a flavor hits your daily cap, flip its flag and push. The card will gray out and the Reserve button becomes "Sold out."

For $2 SF delivery: easiest to handle out-of-band — the success page / your follow-up text confirms whether they want pickup or delivery and you collect the $2 via Venmo / a separate $2 Stripe link. Later you can fold it into a single link with a shipping option.

## Deploying

Already deployed. Here's how it's wired so future-you remembers:

- **Hosting:** Cloudflare Worker, connected to this GitHub repo. Every push to `main` triggers an auto-deploy (~30s).
- **Domain:** `madewithlovebyraf.com` registered through Cloudflare Registrar (~$10/year).
- **Custom domains** are configured under the Worker → Settings → Domains & Routes: both apex (`madewithlovebyraf.com`) and `www.madewithlovebyraf.com` point at the Worker.
- **Build command:** none. **Output directory:** repo root. Pure static HTML/CSS/JS.

If you ever need to redeploy manually, just push an empty commit:

```bash
git commit --allow-empty -m "redeploy"
git push
```

## Notes

- The `v0-backup/` folder is your January 2024 sketch. Safe to delete once you're happy with v1.
