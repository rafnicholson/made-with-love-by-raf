// ============================================================
// EDIT THIS FILE EACH BAKE CYCLE.
// This is the only file you need to touch to update the menu.
// ============================================================
//
// The bakery runs on a 24–36 hour cycle:
//   Order by 8 PM (orderBy) -> leaven that night ->
//   mix at dawn -> 12hr bulk ferment -> bake next morning ->
//   pickup after noon on the bakeDate.
//
// Tips:
// - Update `bakeDate` to the day loaves are ready for pickup.
// - Update `orderBy` to the cutoff for accepting orders.
// - Set `soldOut: true` on a loaf when it's gone.
// - Set `hidden: true` on a loaf to keep it in the file but not show this cycle.
// - `stripeUrl` is the Stripe Payment Link for that loaf.
//   (See README.md → "Wiring Stripe" for how to create them.)
// - You can have 1, 2, or 3 loaves visible. Keep it simple.
//
window.MENU = {
  bakeDate: "Thursday, May 14",
  orderBy: "Tuesday, May 12 at 8 PM",
  pickupWindow: "Pickup after 12 PM",
  note: "", // Optional message at the top, e.g. "First bake of the week!"

  loaves: [
    {
      name: "Classic Country Loaf",
      description:
        "A long-ferment country loaf with a crackly crust and an open, tangy crumb. The everyday everything.",
      price: "$8",
      image: "images/coverphoto.png", // Replace with a per-loaf photo when you have one
      stripeUrl: "https://buy.stripe.com/aFacMY36YcvV2FX3QcbjW00",
      soldOut: false,
      hidden: false,
    },
    {
      name: "Jalapeño Cheddar",
      description:
        "Sharp aged cheddar folded into the dough with fresh jalapeño. Spicy, melty, very make-a-sandwich-able.",
      price: "$10",
      image: "images/coverphoto.png",
      stripeUrl: "https://buy.stripe.com/eVq7sE4b2gMb80hcmIbjW01",
      soldOut: false,
      hidden: false,
    },
    {
      name: "Rosemary Parmesan",
      description:
        "Garden rosemary and a generous shower of Parmigiano-Reggiano. Smells like a Sunday dinner.",
      price: "$10",
      image: "images/coverphoto.png",
      stripeUrl: "https://buy.stripe.com/cNi6oAdLCanN5S9fyUbjW02",
      soldOut: false,
      hidden: false,
    },
  ],
};
