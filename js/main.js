document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dark-toggle");
  const body = document.body;

  if (!toggle) return;

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem(
      "theme",
      body.classList.contains("dark-mode") ? "dark" : "light"
    );
  });
});
