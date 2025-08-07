const progressBars = document.querySelectorAll(".progress-bar");
progressBars.forEach((bar) => {
  const progress = bar.getAttribute("data-progress");
  const fill = bar.querySelector(".progress-fill");
  fill.style.width = `${progress}%`;
});