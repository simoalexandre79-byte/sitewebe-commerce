document.addEventListener("DOMContentLoaded", () => {
  const notif = document.querySelector(".notification-box");

  function toggleNotification() {
    notif.style.display = "flex";
    setTimeout(() => {
      notif.style.display = "none";
    }, 4000);
  }

  // Affiche une notif toutes les 10 secondes
  setInterval(toggleNotification, 10000);
});
