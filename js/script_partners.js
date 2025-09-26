document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const clone = track.innerHTML;
  track.innerHTML += clone; // double les éléments pour boucle fluide
});
