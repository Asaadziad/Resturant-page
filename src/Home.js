const Home = () => {
  //creating elements
  const firstDiv = document.createElement("div");
  firstDiv.setAttribute("class", "main");

  // Setting the active tab
  const menu = document.getElementById("Menu");
  const home = document.getElementById("Home");
  const contact = document.getElementById("Contact");
  menu.removeAttribute("class");
  home.setAttribute("class", "active");
  contact.removeAttribute("class");

  //opening hours
  const openingHours = document.createElement("div");
  openingHours.setAttribute("class", "container");
  const h2Open = document.createElement("h2");
  h2Open.textContent += "Working Hours";
  const pOpen = document.createElement("p");
  pOpen.textContent += "Sunday - Thursday, 10:00 AM - 00:00 AM";
  openingHours.appendChild(h2Open);
  openingHours.appendChild(pOpen);

  //Location Div
  const location = document.createElement("div");
  location.setAttribute("class", "container");
  const h2Loc = document.createElement("h2");
  h2Loc.textContent += "Location";
  const pLoc = document.createElement("p");
  pLoc.textContent += "Shefaa'mr, Northern Israel";
  location.appendChild(h2Loc);
  location.appendChild(pLoc);

  firstDiv.appendChild(openingHours);
  firstDiv.appendChild(location);

  //main div
  const content = document.getElementById("content");
  content.appendChild(firstDiv);
};

export { Home };
