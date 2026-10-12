// Become AI Native — page behaviour.
(function () {
  // Lets /thanks/ fire the GA4 generate_lead event once.
  var form = document.querySelector(".form");
  if (form) {
    form.addEventListener("submit", function () {
      try { sessionStorage.setItem("bain_lead", "1"); } catch (e) {}
    });
  }
})();
