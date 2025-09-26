const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slider = document.querySelector(".products-container");

prevBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -250, behavior: "smooth" });
});

nextBtn.addEventListener("click", () => {
  slider.scrollBy({ left: 250, behavior: "smooth" });
});

// Onglets
const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    alert("Filter applied: " + tab.innerText);
  });
});
