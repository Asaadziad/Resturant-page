const Menu = () => {
  const firstDiv = document.createElement("div");
  firstDiv.setAttribute("class", "main");

  // Setting the active tab
  const menu = document.getElementById("Menu");
  const home = document.getElementById("Home");
  const contact = document.getElementById("Contact");
  menu.setAttribute("class", "active");
  home.removeAttribute("class");
  contact.removeAttribute("class");

  //create
  const img = document.createElement("img");
  img.setAttribute("src", "./img/dish.jpg");
  img.setAttribute("class", "img");
  const h2img = document.createElement("h2");
  h2img.textContent += "Shakshuka Dish";
  const pimg = document.createElement("p");
  pimg.textContent += "$15";

  firstDiv.appendChild(img);
  firstDiv.appendChild(h2img);
  firstDiv.appendChild(pimg);

  const content = document.getElementById("content");
  content.appendChild(firstDiv);
};

export { Menu };
