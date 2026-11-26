// Become AI Native - page behaviour.
(function () {
  var params = new URLSearchParams(location.search);

  // Current cohort. Fixed values: there is no monthly cohort (decision of 1 Nov 2026).
  // The HTML holds the same values for visitors without JavaScript.
  var COHORT = 4;
  var COHORT_CODE = "BAIN-04";
  var COHORT_START = "Mon 11 Jan 2027";

  function fill(selector, text) {
    var els = document.querySelectorAll(selector);
    for (var i = 0; i < els.length; i++) els[i].textContent = text;
  }
  fill("[data-cohort]", String(COHORT));
  fill("[data-cohort-start]", COHORT_START);
  fill("[data-cohort-code]", COHORT_CODE);
  document.title = document.title.replace(/Cohort \d+/, "Cohort " + COHORT);

  // ---------- Black Friday 2026 (remove on Sun 13 Dec 2026) ----------
  // The HTML shows the Black Friday parts ([data-bf]) by default: <html class="bf">.
  // Safety net: after Sat 12 Dec 2026, 23:59 CET the class goes away, CSS hides [data-bf]
  // and shows [data-bf-off] (the €2,500 price). Test the switch with ?now=2026-12-13.
  var BF_END = Date.parse("2026-12-12T23:00:00Z"); // 13 Dec 2026, 00:00 CET
  var now = Date.now();
  var testNow = params.get("now");
  if (testNow && !isNaN(Date.parse(testNow))) now = Date.parse(testNow);
  var bfActive = now < BF_END;
  if (!bfActive) document.documentElement.classList.remove("bf");

  // ---------- Pass linkedin-id and source to the quiz and the research page ----------
  var passLinks = document.querySelectorAll("[data-pass-params]");
  for (var j = 0; j < passLinks.length; j++) {
    var url = new URL(passLinks[j].getAttribute("href"), location.href);
    if (params.get("linkedin-id")) url.searchParams.set("linkedin-id", params.get("linkedin-id"));
    if (params.get("source")) url.searchParams.set("source", params.get("source"));
    passLinks[j].setAttribute("href", url.origin === location.origin ? url.pathname + url.search + url.hash : url.toString());
  }

  // ---------- Letter page: copy buttons (above and below the letter) ----------
  var copyBtns = document.querySelectorAll("[data-copy-letter]");
  for (var b = 0; b < copyBtns.length; b++) {
    copyBtns[b].addEventListener("click", function () {
      var btn = this;
      var parts = document.querySelectorAll("[data-letter-part]");
      var chunks = [];
      for (var i = 0; i < parts.length; i++) {
        if (parts[i].offsetParent === null) continue; // skip hidden variants
        chunks.push(parts[i].innerText.trim());
      }
      var text = chunks.join("\n\n");
      var status = btn.parentNode.querySelector("[data-copy-status]");
      function done(msg) { if (status) status.textContent = msg; }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(
          function () { done("Copied. Paste it into your email."); },
          function () { done("Copy did not work. Select the text and copy it."); }
        );
      } else {
        done("Copy did not work. Select the text and copy it.");
      }
    });
  }

  // ---------- Tally form ----------
  // Pass cohort, linkedin-id and source from the page address to Tally.
  // Its confirmation stays inside the iframe.
  // Tally's embed.js fits the iframe height to the form (dynamicHeight=1).
  var frame = document.querySelector(".tally-embed");
  if (!frame) return;
  var src = new URL(frame.getAttribute("data-tally-src"));
  src.searchParams.set("cohort", String(COHORT));
  src.searchParams.set("source", params.get("source") || "website");
  if (params.get("linkedin-id")) src.searchParams.set("linkedin-id", params.get("linkedin-id"));
  frame.setAttribute("data-tally-src", src.toString());
  function loadTally() {
    if (typeof window.Tally !== "undefined") window.Tally.loadEmbeds();
    else if (!frame.src) frame.src = frame.getAttribute("data-tally-src"); // fallback: fixed height from CSS
  }
  var tallyScript = document.createElement("script");
  tallyScript.src = "https://tally.so/widgets/embed.js";
  tallyScript.onload = loadTally;
  tallyScript.onerror = loadTally;
  document.body.appendChild(tallyScript);

  var leadRecorded = false;
  window.addEventListener("message", function (e) {
    if (e.origin !== "https://tally.so" || e.source !== frame.contentWindow) return;
    var data = e.data;
    if (typeof data === "string") {
      try { data = JSON.parse(data); } catch (err) { return; }
    }
    if (!data || data.event !== "Tally.FormSubmitted" || leadRecorded) return;
    leadRecorded = true;
    if (typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", { form_name: bfActive ? "black_friday" : "application" });
    }
  });
})();
