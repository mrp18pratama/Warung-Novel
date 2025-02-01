// Toggle class active
const navbarnav = document.querySelector(".navbar-nav");
// ketika document menu di klik
document.querySelector("#kopi-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

// klik di luar sidebar untuk mehilangkan nav
const kopiMenu = document.querySelector("#kopi-menu");

document.addEventListener("click", function (e) {
  if (!kopiMenu.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});
