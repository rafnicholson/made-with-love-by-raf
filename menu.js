// ============================================================
// EDIT THIS FILE EACH MORNING.
// This is the only file you need to touch to update the menu.
// ============================================================
//
// Tips:
// - Update `date` to today.
// - Set `soldOut: true` on a loaf when it's gone.
// - Set `hidden: true` on a loaf to keep it in the file but not show it today.
// - `stripeUrl` is the Stripe Payment Link for that loaf.
//   (See README.md → "Wiring Stripe" for how to create them.)
// - You can have 1, 2, or 3 loaves visible. Keep it simple.
//
window.MENU = {
  date: "Tuesday, May 12",
  pickupWindow: "Pickup window: 4–6 PM",
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
    },
    {
      name: "Jalapeño Cheddar",
      description:
        "Sharp aged cheddar folded into the dough with fresh jalapeño. Spicy, melty, very make-a-sandwich-able.",
      price: "$10",
      image: "images/coverphoto.png",
      stripeUrl: "https://buy.stripe.com/REPLACE_ME_JALAPENO",
      soldOut: false,
    },
    {
      name: "Rosemary Parmesan",
      description:
        "Garden rosemary and a generous shower of Parmigiano-Reggiano. Smells like a Sunday dinner.",
      price: "$10",
      image: "images/coverphoto.png",
      stripeUrl: "https://buy.stripe.com/REPLACE_ME_ROSEMARY",
      soldOut: false,
    },
  ],
};
