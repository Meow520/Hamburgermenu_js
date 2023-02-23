window.onload = function () {
  const openButton = document.getElementById("open");
  const closeButton = document.getElementById("close");
  const nav = document.getElementById("navigation");

  openButton.addEventListener("click", () => {
    openButton.hidden = true;
    closeButton.hidden = false;
    nav.className = "open";
  });

  closeButton.addEventListener("click", () => {
    closeButton.hidden = true;
    openButton.hidden = false;
    nav.className = "close";
  });
};
