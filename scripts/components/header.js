export function createHeader(hjemmeside) {
  const header = document.createElement("header");
  header.className = "w-full fixed top-0 left-0 bg-white shadow-md z-50";

  // Top Bar
  const topBar = document.createElement("div");
  topBar.className =
    "max-w-7xl mx-auto flex items-center justify-between px-6 py-4";

  // Navigation
  const nav = document.createElement("nav");
  nav.className = "hidden md:flex space-x-8 text-sm font-medium";

  const links = [
    "FORSIDE",
    "SHOP",
    "FORHANDLERE",
    "INSPIRATION",
    "OM KRYB",
    "KONTAKT",
  ];
  links.forEach((linkText) => {
    const link = document.createElement("a");
    link.textContent = linkText;
    link.href = "#";
    link.className = "hover:text-gray-500 transition";
    nav.appendChild(link);
  });

  const burger = document.createElement("button");
burger.className = "md:hidden text-2xl";
burger.textContent = "☰";

topBar.appendChild(burger);

  topBar.appendChild(nav);

  const mobileNav = document.createElement("nav");
mobileNav.className =
  "hidden flex-col space-y-4 px-6 pb-6 text-sm font-medium md:hidden bg-white";

links.forEach((linkText) => {
  const link = document.createElement("a");
  link.textContent = linkText;
  link.href = "#";
  link.className = "block hover:text-gray-500 transition";
  mobileNav.appendChild(link);
});



  // Cart
  const cart = document.createElement("div");
  cart.className = "flex items-center space-x-2 cursor-pointer";
  const cartIcon = document.createElement("span");
  cartIcon.textContent = "🛍";
  cartIcon.className = "text-lg";

  const cartCount = document.createElement("span");
  cartCount.textContent = "(0)";
  cartCount.className = "text-sm";
  let cartItems = 0;

  cart.appendChild(cartIcon);
  cart.appendChild(cartCount);
  topBar.appendChild(cart);

  header.appendChild(topBar);
  header.appendChild(mobileNav);
  hjemmeside.appendChild(header);

  burger.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
});

  return { cartCount };
}
