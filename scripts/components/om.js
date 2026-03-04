export function createOmSection(hjemmeside) {
  const omSection = document.createElement("section");
  omSection.className = "py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center";

  const omText = document.createElement("div");

  const omTitle = document.createElement("h3");
  omTitle.textContent = "OM KRYB";
  omTitle.className = "text-3xl font-bold mb-6";

  const omParagraph = document.createElement("p");
  omParagraph.textContent =
    "KRYB arbejder for en mere bæredygtig fremtid gennem alternative proteinkilder. Insekter er klimavenlige, næringsrige og fremtidens fødevare.";
  omParagraph.className = "text-gray-600 leading-relaxed";

  omText.appendChild(omTitle);
  omText.appendChild(omParagraph);

  const omImage = document.createElement("img");
  omImage.src = "https://images.unsplash.com/photo-1504674900247-0877df9cc836";
  omImage.className = "w-full h-96 object-cover shadow";

  omSection.appendChild(omText);
  omSection.appendChild(omImage);

  hjemmeside.appendChild(omSection);
}