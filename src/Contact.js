const Contact = () => {
  const firstDiv = document.createElement("div");
  firstDiv.setAttribute("class", "main");

  // Setting the active tab
  const menu = document.getElementById("Menu");
  const home = document.getElementById("Home");
  const contact = document.getElementById("Contact");
  menu.removeAttribute("class");
  home.removeAttribute("class");
  contact.setAttribute("class", "active");

  //create
  const h2Email = document.createElement("h2");
  h2Email.textContent += "Email";
  const h3Email = document.createElement("h3");
  h3Email.textContent += "Soos@gmail.com";
  const h2phone = document.createElement("h2");
  h2phone.textContent += "Phone";
  const h3phone = document.createElement("h3");
  h3phone.textContent += "+972 056687654";
  const h2address = document.createElement("h2");
  h2address.textContent += "Address";
  const h3address = document.createElement("h3");
  h3address.textContent += "202020 ,Haifa ,Israel";

  firstDiv.appendChild(h2Email);
  firstDiv.appendChild(h3Email);
  firstDiv.appendChild(h2phone);
  firstDiv.appendChild(h3phone);
  firstDiv.appendChild(h2address);
  firstDiv.appendChild(h3address);

  const content = document.getElementById("content");
  content.appendChild(firstDiv);
};

export { Contact };
