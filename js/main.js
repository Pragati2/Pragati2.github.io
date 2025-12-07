// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {

  const toggleButton = document.getElementById("dark-toggle");
  const body = document.body;

  if (!toggleButton) return; // Exit if button not present

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggleButton.textContent = "🌞 Light Mode";
  } else {
    toggleButton.textContent = "🌙 Dark Mode";
  }

  // Toggle dark/light mode on button click
  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      toggleButton.textContent = "🌞 Light Mode";
    } else {
      localStorage.setItem("theme", "light");
      toggleButton.textContent = "🌙 Dark Mode";
    }
  });

});
