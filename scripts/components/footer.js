export function createFooter(hjemmeside) {
  const footer = document.createElement("footer");
  footer.className = "bg-gray-900 text-white py-12 mt-20";

  const footerInner = document.createElement("div");
  footerInner.className = "max-w-7xl mx-auto px-6 text-center space-y-4";

  const footerLogo = document.createElement("h4");
  footerLogo.textContent = "KRYB";
  footerLogo.className = "text-xl font-bold tracking-widest";

  const footerText = document.createElement("p");
  footerText.textContent = "© 2026 KRYB – Alle rettigheder forbeholdes";
  footerText.className = "text-sm text-gray-400";

  footerInner.appendChild(footerLogo);
  footerInner.appendChild(footerText);
  footer.appendChild(footerInner);

  hjemmeside.appendChild(footer);
}