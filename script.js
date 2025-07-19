// Toggle accordion
const accordions = document.querySelectorAll(".accordion");
accordions.forEach(acc => {
  acc.addEventListener("click", () => {
    acc.classList.toggle("active");
  });
});

// Tab switch
const tabs = document.querySelectorAll(".tab");
const containers = document.querySelectorAll(".accordion-container");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    containers.forEach(container => {
      container.classList.remove("active");
      if (container.id === tab.dataset.target) {
        container.classList.add("active");
      }
    });
  });
});
