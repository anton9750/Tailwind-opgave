export function createOpskrifterSection(hjemmeside) {
  const section = document.createElement("section");
  section.className = "py-24 bg-gray-100";

  const container = document.createElement("div");
  container.className = "max-w-7xl mx-auto px-6";

  const title = document.createElement("h3");
  title.textContent = "OPSKRIFTER";
  title.className = "text-3xl font-bold text-center mb-16";

  container.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "grid grid-cols-1 md:grid-cols-3 gap-10";


const opskrifter = [
  {
    title: "Orme Muffins",
    desc: "lorem.",
    img: "/images/Uploads/Recipe-01.jpg",
  },
  {
    title: "Orme Gremolate",
    desc: "lorem.",
    img: "/images/Uploads/Recipe-02.jpg",
  },
  {
    title: "Orme Skiver",
    desc: "lorem ipsum",
    img: "/images/Uploads/Recipe-03.jpg",
  },
];

  opskrifter.forEach((opskrift) => {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300";

    const image = document.createElement("img");
    image.src = opskrift.img;
    image.className = "w-full h-56 object-cover";

    const content = document.createElement("div");
    content.className = "p-6";

    const cardTitle = document.createElement("h4");
    cardTitle.textContent = opskrift.title;
    cardTitle.className = "text-lg font-semibold mb-2";

    const cardDesc = document.createElement("p");
    cardDesc.textContent = opskrift.desc;
    cardDesc.className = "text-gray-600 text-sm";

    content.appendChild(cardTitle);
    content.appendChild(cardDesc);

    card.appendChild(image);
    card.appendChild(content);

    grid.appendChild(card);
  });

  container.appendChild(grid);
  section.appendChild(container);
  hjemmeside.appendChild(section);
}