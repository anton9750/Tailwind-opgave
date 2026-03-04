// ===== IMPORT COMPONENTS =====
import { createHeader } from "./components/header.js";
import { createHero } from "./components/hero.js";
import { createProdukter } from "./components/produkter.js";
import { createOmSection } from "./components/om.js";
import { createKontaktSection } from "./components/kontakt.js";
import { createFooter } from "./components/footer.js";

// ===== GET ROOT ELEMENT =====
const hjemmeside = document.getElementById("hjemmeside");

// Safety check (prevents errors if element is missing)
if (!hjemmeside) {
  console.error("Element with id 'hjemmeside' not found.");
} else {
  // ===== BUILD PAGE IN ORDER =====

  // Header (returns cartCount so products can update it)
  const { cartCount } = createHeader(hjemmeside);

  // Sections
  createHero(hjemmeside);
  createProdukter(hjemmeside, cartCount);
  createOmSection(hjemmeside);
  createKontaktSection(hjemmeside);
  createFooter(hjemmeside);
}