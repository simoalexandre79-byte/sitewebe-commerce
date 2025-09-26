// Gestion du bouton "like" (cœur)
document.querySelectorAll(".like-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
    btn.innerText = btn.classList.contains("liked") ? "♥" : "♡";
  });
});
