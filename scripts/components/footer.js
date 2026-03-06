export function createFooter(hjemmeside) {
  const footer = document.createElement("footer");
  footer.className = "bg-yellow-100 text-yellow-900 pt-16 pb-12 mt-20";

  const container = document.createElement("div");
  container.className = "max-w-6xl mx-auto px-6 sm:px-10";

  // Social icons row
  const socialRow = document.createElement("div");
  socialRow.className = "flex justify-center gap-10 sm:gap-16 -mt-16 flex-wrap";

  const socials = [
    "../../images/svg/Sm-Linkedin.svg",
    "../../images/svg/Sm-Facebook.svg",
    "../../images/svg/Sm-Facebook.svg",
    "../../images/svg/Sm-Youtube.svg"
  ];

  socials.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "social icon";
    img.classList = "w-[30px] h-[30px]"
    socialRow.appendChild(img);
  });

  // Logo
  const logoWrap = document.createElement("div");
  logoWrap.classList = "flex justify-center my-10";

  const logo = document.createElement("img");
  logo.src = "../../images/svg/Kryb-Logo-Black.svg";
  logo.alt = "KRYB";
  logo.classList = "w-[30px] h-[30px]"

  logoWrap.appendChild(logo);


  const grid = document.createElement("div");
  grid.className =
    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-xs sm:text-sm text-center md:text-left";

  function column(title, items) {
    const div = document.createElement("div");

    const h = document.createElement("h4");
    h.textContent = title;
    h.className =
      "font-semibold mb-3 uppercase tracking-wide text-yellow-900";
    div.appendChild(h);

    items.forEach((text) => {
      if (text === "") {
        const spacer = document.createElement("div");
        spacer.className = "h-4";
        div.appendChild(spacer);
        return;
      }

      const p = document.createElement("p");
      p.textContent = text;
      p.className =
        "text-yellow-900 hover:text-yellow-800 cursor-pointer leading-6";
      div.appendChild(p);
    });

    return div;
  }

  const col1 = column("OM KRYB", [
    "Historien",
    "Virksomheder og afdelinger",
    "Job",
    "CSR",
    "Danmark mod Madspild",
    "Foreign suppliers"
  ]);

  const col2 = column("INSPIRATION", [
    "Vin & Mad",
    "Opskrifter",
    "Sociale medier",
    "Gaver Privat"
  ]);

  const col3 = column("OM HANDEL", [
    "Handelsbetingelser",
    "Beskyttelse af personlige oplysninger",
    "Levering",
    "Fødevarestyrelsens smiley-rapporter"
  ]);

  const col4 = column("KONTAKT", [
    "Telefon (+45) 12345678",
    "info@kryb.dk",
    "",
    "Butikker/Åbningstider"
  ]);

  grid.append(col1, col2, col3, col4);

  container.appendChild(socialRow);
  container.appendChild(logoWrap);
  container.appendChild(grid);

  footer.appendChild(container);
  hjemmeside.appendChild(footer);
}