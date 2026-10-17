// Become AI Native — page behaviour.
(function () {
  // The application form is a Tally embed (iframe). When Tally reports a submit, set the
  // bain_lead flag (lets /thanks/ fire the GA4 generate_lead event once) and go to /thanks/.
  var frame = document.querySelector(".tally-embed");
  if (!frame) return;
  window.addEventListener("message", function (e) {
    if (e.origin !== "https://tally.so") return;
    var data = e.data;
    if (typeof data === "string") {
      try { data = JSON.parse(data); } catch (err) { return; }
    }
    if (!data || typeof data.event !== "string") return;
    if (data.event === "Tally.FormSubmitted") {
      try { sessionStorage.setItem("bain_lead", "1"); } catch (err) {}
      window.location.href = "/thanks/";
    }
  });
})();
