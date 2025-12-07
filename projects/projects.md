---
layout: page
title: Projects
permalink: /projects/
---

<!-- Dark/Light Mode Toggle Slider with Icons -->
<div style="text-align:right; margin-bottom:1rem;">
  <label class="switch">
    <input type="checkbox" id="dark-toggle">
    <span class="slider round">
      <span class="icon sun">🌞</span>
      <span class="icon moon">🌙</span>
    </span>
  </label>
</div>



<div class="skills-container">

  <!-- Project 1 -->
  <div class="skill-card">
    <h4>Machine Unlearning for Data Privacy</h4>
    <p>Implemented machine unlearning algorithms within a SISA architecture for privacy-preserving ML models. Achieved ~96% model accuracy and analyzed unlearning impact across multiple models.</p>
    <a href="https://github.com/Pragati2/Machine-Unlearning.git" class="btn-link">View on GitHub</a>
  </div>

  <!-- Project 2 -->
  <div class="skill-card">
    <h4>Black Friday Purchase Prediction</h4>
    <p>Built end-to-end ML pipeline for Black Friday purchase predictions using transactional store data. Conducted data cleaning, feature engineering, and trained neural networks and regression models, benchmarking via RMSE.</p>
    <a href="https://github.com/Pragati2/Black-Friday-Purchase-Prediction" class="btn-link">View on GitHub</a>
  </div>

  <!-- Project 3 -->
  <div class="skill-card">
    <h4>OpenMax Open Set Deep Networks</h4>
    <p>Implemented transfer learning-based computer vision model with OpenMax activation for open-set recognition. Trained base model on CIFAR-10 and transferred weights to MNIST, reducing false positives and improving reliability.</p>
    <a href="https://github.com/Pragati2/OpenMax" class="btn-link">View on GitHub</a>
  </div>

  <!-- Project 4 -->
  <div class="skill-card">
    <h4>Oral Cancer Detection using CNN (VGG-16)</h4>
    <p>Developed VGG-16 CNN model using 6,500+ X-ray images achieving ~91% accuracy. Applied transfer learning to reduce training time by ~40% while maintaining high performance.</p>
  </div>

  <!-- Project 5 -->
  <div class="skill-card">
    <h4>Data Analysis: Effect of Unemployment on Box Office</h4>
    <p>Combined four datasets to analyze macroeconomic sentiment vs box office performance. Performed data cleaning, bivariate analysis, and applied regression, classification, and K-means clustering in R.</p>
    <a href="https://github.com/Pragati2/Data-Analysis-for-Effect-of-Unemployment-on-Box-Office-Collection" class="btn-link">View on GitHub</a>
  </div>

  <!-- Project 6 -->
  <div class="skill-card">
    <h4>Airline-Flight Booking Application</h4>
    <p>Developed a Java-based airline booking web app with PostgreSQL backend. Designed database schemas and implemented backend logic for bookings and flight management.</p>
    <a href="https://github.com/Pragati2/Airline-Flight-Booking-Application" class="btn-link">View on GitHub</a>
  </div>

  <!-- Project 7 -->
  <div class="skill-card">
    <h4>Big Data AWS ML Analysis</h4>
    <p>Evaluated AWS services for large-scale ML workflows. Built and compared regression, decision tree, SVM, and gradient boosting models in AWS.</p>
    <a href="https://github.com/Pragati2/Analysis-Big-Data-Machine-learning-models-on-amazon-AWS" class="btn-link">View on GitHub</a>
  </div>

  <!-- Project 8 -->
  <div class="skill-card">
    <h4>KPI Dashboards for Pipeline Integrity – Atmos Energy</h4>
    <p>Led definition and monitoring of six core KPIs. Built executive Tableau dashboards with automated refreshes for proactive risk management.</p>
  </div>

</div>

---

# 🎓 Education

**Illinois Institute of Technology**  
Master’s in Data Science | Jan 2021 – Dec 2022 | Chicago, IL

<!-- Include JS for Dark/Light Mode -->
<script>
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("dark-toggle");
  const body = document.body;

  if (!toggleButton) return;

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggleButton.textContent = "🌞 Light Mode";
  } else {
    toggleButton.textContent = "🌙 Dark Mode";
  }

  // Toggle theme on click
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
</script>
