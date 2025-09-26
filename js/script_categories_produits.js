document.querySelectorAll(".category-card").forEach(card => {
  card.addEventListener("click", () => {
    let category = card.querySelector("p").innerText;
    alert("You clicked on: " + category);
  });
});
