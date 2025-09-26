// script.js

// ----------- Animation compteur ----------- //
function animateCounter(id, start, end, duration) {
  let obj = document.getElementById(id);
  let startTime = null;

  function step(currentTime) {
    if (!startTime) startTime = currentTime;
    let progress = Math.min((currentTime - startTime) / duration, 1);
    let value = Math.floor(progress * (end - start) + start);

    obj.innerText = value.toLocaleString() + " +"; // format avec +
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

// Lancer le compteur après chargement
window.addEventListener("DOMContentLoaded", () => {
  animateCounter("counter", 0, 500000, 2000);

  // ----------- Animation avatars ----------- //
  const avatars = document.querySelectorAll(".avatars img, .avatars .more");
  avatars.forEach((avatar, i) => {
    setTimeout(() => {
      avatar.style.transform = "scale(1.1)";
      avatar.style.transition = "transform 0.4s ease";
      setTimeout(() => {
        avatar.style.transform = "scale(1)";
      }, 400);
    }, i * 200); // décalage progressif
  });

  // ----------- Apparition bannière ----------- //
  const banner = document.querySelector(".banner-content");
  banner.style.opacity = 0;
  banner.style.transform = "translateY(30px)";
  banner.style.transition = "all 1s ease";

  setTimeout(() => {
    banner.style.opacity = 1;
    banner.style.transform = "translateY(0)";
  }, 300);
});
