# Made with Love by Raf

A tiny one-page site for a home sourdough bakery in San Francisco. Pre-order a few loaves each day, pickup or $1 SF delivery.

## Files (only 4 you'll ever touch)

| File | What it is |
|---|---|
| `menu.js` | **The one file you edit each morning.** Today's date, loaves, prices, Stripe links, sold-out flags. |
| `index.html` | Page structure. Rarely changes. |
| `styles.css` | Look and feel. Edit if you want a different color or vibe. |
| `app.js` | Glue that renders `menu.js` onto the page. Don't edit unless you're adding features. |

`images/coverphoto.png` is your hero photo. Drop new bread photos in `images/` and reference them in `menu.js` as `image: "images/your-photo.jpg"`.

## Daily routine (60 seconds)

1. Open `menu.js` in any text editor.
2. Update `date` (e.g. `"Wednesday, May 13"`).
3. Update the three loaves' names / descriptions / prices.
4. Paste in each loaf's Stripe Payment Link as `stripeUrl`.
5. Save. Refresh the site. Done.

When a loaf sells out during the day, flip its `soldOut: false` to `soldOut: true` and save.

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
3. **Limit the number of payments**: set to `3` (or whatever your daily cap is). Stripe will close the link once it hits the limit — built-in sold-out protection.
4. Add a **custom field** asking "Pickup or delivery?" (two options). Add another asking for "Phone number" so you can text them.
5. Copy the resulting `https://buy.stripe.com/...` URL into `menu.js`.

For $1 SF delivery: easiest to handle out-of-band — the success page / your follow-up text confirms whether they want pickup or delivery and you collect the $1 via Venmo / a separate $1 Stripe link. Later you can fold it into a single link with a shipping option.

## Deploying (free, ~5 minutes)

**Easiest — Netlify Drop**: go to <https://app.netlify.com/drop>, drag this folder onto the page. You get a `something-something-1234.netlify.app` URL instantly. Drop the folder again to update.

**Better long-term — Cloudflare Pages + GitHub**:

1. Create a new GitHub repo, push this folder to it.
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/), connect the repo, deploy (no build command, root directory `/`).
3. Now you can edit `menu.js` on github.com from your phone, and the site auto-updates in ~30 seconds.

Either way, point a custom domain at it once you're ready.

## Notes

- The `v0-backup/` folder is your January 2024 sketch. Safe to delete once you're happy with v1.
