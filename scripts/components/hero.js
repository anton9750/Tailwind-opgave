export function createHero(hjemmeside) {
  const hero = document.createElement("section");
  hero.className =
    "relative w-full h-screen flex items-center justify-center text-white";

  hero.style.backgroundImage = "url('images/tail.png'), url('images/hero.jpg')";
  hero.style.backgroundSize = "contain, cover";
  hero.style.backgroundPosition = "center, center";
  hero.style.backgroundRepeat = "no-repeat, no-repeat";

  const overlay = document.createElement("div");
  overlay.className = "absolute inset-0 bg-black/40";
  hero.appendChild(overlay);

  const heroContent = document.createElement("div");
  heroContent.className = "relative text-center";

  const bigTitle = document.createElement("h2");
  bigTitle.textContent = "";
  bigTitle.className = "text-7xl md:text-9xl font-black tracking-widest";

  const subTitle = document.createElement("p");
  subTitle.textContent = "– ET BEDRE VALG";
  subTitle.className = "mt-4 text-lg md:text-2xl font-light tracking-wide";

  heroContent.appendChild(bigTitle);
  heroContent.appendChild(subTitle);
  hero.appendChild(heroContent);

  hjemmeside.appendChild(hero);
}
