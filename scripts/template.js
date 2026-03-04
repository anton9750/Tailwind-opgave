const hjemmeside = document.getElementById("hjemmeside");

// ===== HEADER WRAPPER =====
const header = document.createElement("header");
header.className = "w-full fixed top-0 left-0 bg-white shadow-md z-50";

// ===== TOP BAR =====
const topBar = document.createElement("div");
topBar.className =
  "max-w-7xl mx-auto flex items-center justify-between px-6 py-4";
  "max-w-"

// Logo
const logo = document.createElement("h1");
logo.textContent = "KRYB";
logo.className = "text-3xl font-black tracking-widest";
topBar.appendChild(logo);

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

topBar.appendChild(nav);

// Cart
const cart = document.createElement("div");
cart.className = "flex items-center space-x-2 cursor-pointer";

const cartIcon = document.createElement("span");
cartIcon.textContent = "🛍";
cartIcon.className = "text-lg";

const cartCount = document.createElement("span");
cartCount.textContent = "(0)";
cartCount.className = "text-sm";

cart.appendChild(cartIcon);
cart.appendChild(cartCount);
topBar.appendChild(cart);

header.appendChild(topBar);
hjemmeside.appendChild(header);

