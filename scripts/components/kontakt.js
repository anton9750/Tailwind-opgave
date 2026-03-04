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

  ["Navn", "Email", "Besked"].forEach((placeholder) => {
    const input = document.createElement(placeholder === "Besked" ? "textarea" : "input");
    input.placeholder = placeholder;
    input.className = "w-full border p-3 focus:outline-none focus:ring-2 focus:ring-black";
    form.appendChild(input);
  });

  const button = document.createElement("button");
  button.textContent = "SEND";
  button.type = "submit";
  button.className = "bg-black text-white px-6 py-3 hover:bg-gray-800 transition";

  form.appendChild(button);

  kontakt.appendChild(kontaktText);
  kontakt.appendChild(form);

  hjemmeside.appendChild(kontakt);
}