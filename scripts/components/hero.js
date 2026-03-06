export function createHero(hjemmeside) {
  // Hero Section
  const hero = document.createElement("section");
  hero.className =
    "relative w-full h-[200vh] md:h-screen flex items-center justify-center text-white overflow-hidden";

  // Image Wrapper
  const imageWrapper = document.createElement("div");
  imageWrapper.className = "relative flex items-center w-full h-full";

  // Hero Image
  const heroImg = document.createElement("img");
  heroImg.src = "images/hero.jpg";
  heroImg.alt = "Hero Image";
  heroImg.className = "w-full h-full object-cover";

  // Tail Image (centered overlay)
  const tailImg = document.createElement("img");
  tailImg.src = "images/tail.png";
  tailImg.alt = "Tail Image";
  tailImg.className =
    "absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 w-80";

  // Dark overlay
  const overlay = document.createElement("div");
  overlay.className = "absolute inset-0 bg-black/40 z-10";

  // Assemble images
  imageWrapper.appendChild(heroImg);
  imageWrapper.appendChild(overlay);
  imageWrapper.appendChild(tailImg);
  hero.appendChild(imageWrapper);

  // Hero Content (text)
  const heroContent = document.createElement("div");
  heroContent.className =
    "absolute inset-0 flex flex-col items-center justify-center text-center z-30";

  const bigTitle = document.createElement("h2");
  bigTitle.textContent = "";
  bigTitle.className = "text-7xl md:text-9xl font-black tracking-widest";

  const subTitle = document.createElement("p");
  subTitle.textContent = "– ET BEDRE VALG";

  heroContent.appendChild(bigTitle);
  heroContent.appendChild(subTitle);
  hero.appendChild(heroContent);

  // Add hero to page
  hjemmeside.appendChild(hero);
}