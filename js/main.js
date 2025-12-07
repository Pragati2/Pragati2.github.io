// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {

  const toggleSwitch = document.getElementById("dark-toggle");
  const body = document.body;

  if (!toggleSwitch) return; // Exit if slider not present

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggleSwitch.checked = true;
  } else {
    toggleSwitch.checked = false;
  }

  // Toggle dark/light mode when slider changes
  toggleSwitch.addEventListener("change", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

});
