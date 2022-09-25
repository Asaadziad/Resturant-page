const pageLoad = () => {
  //creating elements
  const firstDiv = document.createElement("div");
  firstDiv.setAttribute("class", "main");

  //main div
  const content = document.getElementById("content");
  content.appendChild(firstDiv);
};

export { pageLoad };
