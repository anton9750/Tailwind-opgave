import { produkterData } from "../data/produkterData.js";

export function createProdukter(hjemmeside, cartCount) {
  const produkter = document.createElement("section");
  produkter.className = "py-20 bg-gray-100 text-center";

  const produkterTitle = document.createElement("h3");
  produkterTitle.textContent = "PRODUKTER";
  produkterTitle.className = "text-4xl font-bold tracking-wide";

  produkter.appendChild(produkterTitle);

  const produktGrid = document.createElement("div");
  produktGrid.className = "max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6";

  produkterData.forEach(item => {
    const card = document.createElement("div");
    card.className = "bg-white p-6 shadow hover:shadow-lg transition text-center";

    const image = document.createElement("img");
    image.src = item.img;
    image.className = "w-full h-56 object-cover mb-4";

    const title = document.createElement("h4");
    title.textContent = item.name;
    title.className = "font-semibold tracking-wide";

    const price = document.createElement("p");
    price.textContent = item.price;
    price.className = "text-gray-500 mt-2";

    const addToCartBtn = document.createElement("button");
    addToCartBtn.textContent = "LÆG I KURV";
    addToCartBtn.className =
      "mt-4 bg-white text-red-500 px-4 py-2 border border-red-500 hover:bg-red-500 hover:text-white transition";

    let cartItems = parseInt(cartCount.textContent.replace(/\D/g, ""));
    addToCartBtn.addEventListener("click", () => {
      cartItems++;
      cartCount.textContent = `(${cartItems})`;
    });

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(addToCartBtn);
    produktGrid.appendChild(card);
  });

  produkter.appendChild(produktGrid);
  hjemmeside.appendChild(produkter);
}