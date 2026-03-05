
import { createHeader } from "./components/header.js";
import { createHero } from "./components/hero.js";
import { createProdukter } from "./components/produkter.js";
import { createOmSection } from "./components/om.js";
import { createOpskrifterSection } from "./components/opskrifter.js";
import { createKontaktSection } from "./components/kontakt.js";
import { createFooter } from "./components/footer.js";


const hjemmeside = document.getElementById("hjemmeside");




if (!hjemmeside) {
  console.error("Element with id 'hjemmeside' not found.");
} else {



  const { cartCount } = createHeader(hjemmeside);




  
  createHero(hjemmeside);
  createProdukter(hjemmeside, cartCount);
  createOmSection(hjemmeside);
  createOpskrifterSection(hjemmeside);
  createKontaktSection(hjemmeside);
  createFooter(hjemmeside);
}