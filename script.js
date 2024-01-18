function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// update footer with current year
const current_year = new Date().getFullYear();
document.getElementById("year").innerText = current_year
