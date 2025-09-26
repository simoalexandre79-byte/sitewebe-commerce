const btn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
});