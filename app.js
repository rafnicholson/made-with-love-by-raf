document.addEventListener("DOMContentLoaded", () => {
  const menu = window.MENU;
  if (!menu) return;

  document.getElementById("today-title").textContent = menu.headline || "";

  const statusEl = document.getElementById("pickup-window");
  statusEl.innerHTML = "";
  const dot = document.createElement("span");
  dot.className = "status__dot";
  const label = document.createElement("span");
  if (menu.isOpen) {
    statusEl.className = "today__pickup status status--open";
    label.textContent = "Open";
  } else {
    statusEl.className = "today__pickup status status--closed";
    label.textContent =
      (menu.closedLabel && menu.closedLabel.trim()) || "Closed for the day";
  }
  statusEl.append(dot, label);

  const leadtimeEl = document.getElementById("leadtime");
  if (menu.subhead && menu.subhead.trim()) {
    leadtimeEl.textContent = menu.subhead;
    leadtimeEl.hidden = false;
  }

  const noteEl = document.getElementById("today-note");
  if (menu.note && menu.note.trim()) {
    noteEl.textContent = menu.note;
    noteEl.hidden = false;
  }

  const grid = document.getElementById("loaf-grid");
  grid.innerHTML = "";

  menu.loaves.filter((loaf) => !loaf.hidden).forEach((loaf) => {
    const card = document.createElement("article");
    card.className = "loaf" + (loaf.soldOut ? " loaf--sold-out" : "");

    const img = document.createElement("img");
    img.src = loaf.image;
    img.alt = loaf.name;
    img.className = "loaf__img";

    const body = document.createElement("div");
    body.className = "loaf__body";

    const name = document.createElement("h3");
    name.className = "loaf__name";
    name.textContent = loaf.name;

    const desc = document.createElement("p");
    desc.className = "loaf__desc";
    desc.textContent = loaf.description;

    const footer = document.createElement("div");
    footer.className = "loaf__footer";

    const price = document.createElement("span");
    price.className = "loaf__price";
    price.textContent = loaf.price;

    const button = document.createElement("a");
    button.className = "btn";
    if (loaf.soldOut) {
      button.textContent = "Sold out";
      button.setAttribute("aria-disabled", "true");
      button.classList.add("btn--disabled");
      button.removeAttribute("href");
    } else {
      button.textContent = "Reserve";
      button.href = loaf.stripeUrl;
      button.target = "_blank";
      button.rel = "noopener";
    }

    footer.append(price, button);
    body.append(name, desc, footer);
    card.append(img, body);
    grid.append(card);
  });

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();
});
