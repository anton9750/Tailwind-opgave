export function createKontaktSection(hjemmeside) {
  const kontakt = document.createElement("section");
  kontakt.className = "py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6";

  const kontaktText = document.createElement("div");

  const kontaktTitle = document.createElement("h3");
  kontaktTitle.textContent = "KONTAKT KRYB";
  kontaktTitle.className = "text-3xl font-bold mb-6";

  const kontaktDesc = document.createElement("p");
  kontaktDesc.textContent =
    "Har du spørgsmål? Kontakt os og hør mere om vores produkter.";
  kontaktDesc.className = "text-gray-600";

  kontaktText.appendChild(kontaktTitle);
  kontaktText.appendChild(kontaktDesc);

  const form = document.createElement("form");
  form.className = "space-y-4";

  const nameInput = document.createElement("input");
  nameInput.placeholder = "Navn";
  nameInput.className =
    "w-full border p-3 focus:outline-none focus:ring-2 focus:ring-black";

  const emailInput = document.createElement("input");
  emailInput.placeholder = "Email";
  emailInput.className =
    "w-full border p-3 focus:outline-none focus:ring-2 focus:ring-black";

  const messageInput = document.createElement("textarea");
  messageInput.placeholder = "Besked";
  messageInput.className =
    "w-full border p-3 focus:outline-none focus:ring-2 focus:ring-black";

  form.appendChild(nameInput);
  form.appendChild(emailInput);
  form.appendChild(messageInput);

  const button = document.createElement("button");
  button.textContent = "SEND";
  button.type = "submit";
  button.className =
    "bg-black text-white px-6 py-3 hover:bg-gray-800 transition";

  form.appendChild(button);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();

    const nameRegex = /^[A-Za-zÆØÅæøå]{2,}/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(nameValue)) {
      alert("Navn skal indeholde mindst 2 bogstaver.");
      return;
    }

    if (!emailRegex.test(emailValue)) {
      alert("Indtast en gyldig email.");
      return;
    }

    alert("tak for din besked!!");
    form.reset();
  });

  kontakt.appendChild(kontaktText);
  kontakt.appendChild(form);

  hjemmeside.appendChild(kontakt);
}