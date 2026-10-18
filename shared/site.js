// Become AI Native - page behaviour.
(function () {
  // Current cohort, worked out from today's date. A new cohort opens every month and
  // starts on the 15th of the following month: October 2026 is Cohort 3 (starts 15 November),
  // November 2026 is Cohort 4 (starts 15 December), and so on. The HTML holds the October
  // 2026 values as a fallback for visitors without JavaScript.
  var BASE_YEAR = 2026, BASE_MONTH = 9, BASE_COHORT = 3; // month is 0-based: 9 = October
  var now = new Date();
  var monthsSince = (now.getFullYear() - BASE_YEAR) * 12 + (now.getMonth() - BASE_MONTH);
  var cohort = BASE_COHORT + Math.max(0, monthsSince);
  var start = new Date(now.getFullYear(), now.getMonth() + 1, 15);
  var startText = start.getDate() + " " + start.toLocaleString("en-GB", { month: "long" });
  var code = "BAI-" + (cohort < 10 ? "0" : "") + cohort;

  function fill(selector, text) {
    var els = document.querySelectorAll(selector);
    for (var i = 0; i < els.length; i++) els[i].textContent = text;
  }
  fill("[data-cohort]", String(cohort));
  fill("[data-cohort-start]", startText);
  fill("[data-cohort-code]", code);
  document.title = document.title.replace(/Cohort \d+/, "Cohort " + cohort);

  // Pass the cohort to Tally. Its confirmation stays inside the iframe.
  var frame = document.querySelector(".tally-embed");
  if (!frame) return;
  frame.src = frame.src.replace(/([?&])cohort=\d+/, "$1").replace(/&$/, "") + "&cohort=" + cohort;
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
      window.gtag("event", "generate_lead", { form_name: "application" });
    }
  });
})();
