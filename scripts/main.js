// responsive menu
const button = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu__item");

button.addEventListener("click", () => {
  menu.classList.toggle("menu--active");
});

document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && event.target !== button) {
    menu.classList.remove("menu--active");
  }
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("menu--active");
  });
});
