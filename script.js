// Pastikan offcanvas dengan ID "offcanvasSearchMenu" ada
var offcanvasElement = document.getElementById("offcanvasSearchMenu");
if (offcanvasElement) {
  var cardElements = offcanvasElement.querySelectorAll(".offcanvas-body .card");

  offcanvasElement.addEventListener("shown.bs.offcanvas", function () {
    cardElements.forEach(function (card, index) {
      var delay = index * 100;
      card.style.animationDelay = delay + "ms";
      card.style.animationDuration = "0.5s";
      card.classList.add("animate__animated", "animate__fadeInRight");
      card.style.opacity = "1";
    });
  });

  offcanvasElement.addEventListener("hidden.bs.offcanvas", function () {
    cardElements.forEach(function (card) {
      card.classList.remove("animate__animated", "animate__fadeInRight");
      card.style.opacity = "0";
    });
  });
}

// Pastikan offcanvas dengan ID "offcanvasMenuNavbar" ada
var offcanvasElementNavbar = document.getElementById("offcanvasMenuNavbar");
if (offcanvasElementNavbar) {
  var cardElementsNavbar = offcanvasElementNavbar.querySelectorAll(
    ".offcanvas-navbar .card"
  );

  offcanvasElementNavbar.addEventListener("shown.bs.offcanvas", function () {
    cardElementsNavbar.forEach(function (card, index) {
      var delay = index * 100;
      card.style.animationDelay = delay + "ms";
      card.style.animationDuration = "0.5s";
      card.classList.add("animate__animated", "animate__fadeInRight");
      card.style.opacity = "1";
    });
  });

  offcanvasElementNavbar.addEventListener("hidden.bs.offcanvas", function () {
    cardElementsNavbar.forEach(function (card) {
      card.classList.remove("animate__animated", "animate__fadeInRight");
      card.style.opacity = "0";
    });
  });
}
