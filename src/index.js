import { pageLoad } from "./pageLoad";
import { Menu } from "./Menu";
import { Home } from "./Home";
import { Contact } from "./Contact";

const homeBtn = document.getElementById("Home");
homeBtn.addEventListener("click", function () {
  event.preventDefault();
  const content = document.getElementById("content");
  content.innerHTML = "";
  Home();
});
const menuBtn = document.getElementById("Menu");
menuBtn.addEventListener("click", function () {
  event.preventDefault();
  const content = document.getElementById("content");
  content.innerHTML = "";
  Menu();
});
const contactBtn = document.getElementById("Contact");
contactBtn.addEventListener("click", function () {
  event.preventDefault();
  const content = document.getElementById("content");
  content.innerHTML = "";
  Contact();
});

pageLoad();
