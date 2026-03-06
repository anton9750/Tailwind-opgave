export function createHeader(hjemmeside) {
  const header = document.createElement("header");
  header.className = "w-full fixed top-0 left-0 bg-white shadow-md z-50";

  const topBar = document.createElement("div");
  topBar.className =
    "max-w-7xl mx-auto flex items-center justify-between px-4 py-3";


  const burger = document.createElement("button");
  burger.className = "text-2xl md:hidden";
  burger.textContent = "☰";


  const searchContainer = document.createElement("div");
  searchContainer.className =
    "flex items-center border border-gray-300 rounded-md px-2 py-1 mx-3 flex-1 max-w-xs";

  const searchIcon = document.createElement("span");
  searchIcon.textContent = "🔍";
  searchIcon.className = "mr-2 text-gray-500";

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search...";
  searchInput.className = "outline-none text-sm bg-transparent w-full";

  searchContainer.appendChild(searchIcon);
  searchContainer.appendChild(searchInput);


  const cart = document.createElement("div");
  cart.className = "flex items-center space-x-2 cursor-pointer";

  const cartIcon = document.createElement("span");
  cartIcon.textContent = "🛒";
  cartIcon.className = "text-lg";

  const cartCount = document.createElement("span");
  cartCount.textContent = "(0)";
  cartCount.className = "text-sm";

  let cartItems = 0;

  cart.appendChild(cartIcon);
  cart.appendChild(cartCount);

  // DESKTOP NAV
  const nav = document.createElement("nav");
  nav.className =
    "hidden md:flex space-x-8 text-sm font-medium absolute left-1/2 -translate-x-1/2";

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


  topBar.appendChild(burger);
  topBar.appendChild(searchContainer);
  topBar.appendChild(cart);
  topBar.appendChild(nav);

  header.appendChild(topBar);
  header.appendChild(mobileNav);
  hjemmeside.appendChild(header);

  burger.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
  });

  return { cartCount };
}