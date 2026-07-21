// ============================================================
// SHOP CONFIG.
// No daily edits required — customers pick their own pickup
// date at Stripe checkout. Touch this file only when something
// actually changes (flavor swap, sold out, capacity full, etc.).
// ============================================================
//
// The shop runs on a rolling schedule:
//   Order by 6 PM today -> 48-hour fermentation ->
//   pickup any time after 1 PM, two days later.
//
// Tips:
// - `headline` / `subhead` are the persistent shop description.
// - `isOpen: true` shows a green "Open" dot in the upper-right.
//   Set to false to show a red "Closed for the day" dot.
//   Optionally set `closedLabel` to override the closed text
//   (e.g. "On vacation — back Monday").
// - `note` is an optional banner above the loaves, e.g. "May 17
//   is fully booked — earliest available is May 18."
// - Set `soldOut: true` on a loaf when ingredients run out.
// - Set `hidden: true` to remove a flavor without deleting it.
// - `stripeUrl` is the Stripe Payment Link for that loaf.
//   (See README.md → "Wiring Stripe" for how to create them.)
//
window.MENU = {
  headline: "Now baking.",
  subhead: "Order by 6 PM, ready any time after 1 PM, two days later.",
  isOpen: false, // false = red "Closed for the day" dot
  closedLabel: "",
  note: "", // Optional banner above the loaves.

  loaves: [
    {
      name: "Classic Country Loaf",
      description:
        "A long-ferment country loaf with a crackly crust and an open, tangy crumb. The everyday everything.",
      price: "$8",
      image: "images/classic-country.jpg",
      stripeUrl: "https://buy.stripe.com/aFacMY36YcvV2FX3QcbjW00",
      soldOut: false,
      hidden: false,
    },
    {
      name: "Jalapeño Cheddar",
      description:
        "Sharp aged cheddar folded into the dough with fresh jalapeño. Spicy, melty, very make-a-sandwich-able.",
      price: "$10",
      image: "images/jalapeno-cheddar.jpg",
      stripeUrl: "https://buy.stripe.com/eVq7sE4b2gMb80hcmIbjW01",
      soldOut: false,
      hidden: false,
    },
    {
      name: "Rosemary Parmesan",
      description:
        "Garden rosemary and a generous shower of Parmigiano-Reggiano. Smells like a Sunday dinner.",
      price: "$10",
      image: "images/rosemary-parmesan.jpg",
      stripeUrl: "https://buy.stripe.com/cNi6oAdLCanN5S9fyUbjW02",
      soldOut: false,
      hidden: false,
    },
  ],
};
