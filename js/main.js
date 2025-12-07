// Dark mode toggle
document.addEventListener("DOMContentLoaded", () => {
 // Dark/Light Mode Toggle
const toggleButton = document.getElementById("dark-toggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if(document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleButton.textContent = "🌞 Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    toggleButton.textContent = "🌙 Dark Mode";
  }
});

// Load saved theme
if(localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleButton.textContent = "🌞 Light Mode";
} else {
  toggleButton.textContent = "🌙 Dark Mode";
}

});


