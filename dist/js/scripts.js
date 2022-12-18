// Navbar Fixed

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  // Bottom Top
  const bottomTop = document.querySelector("#bottom-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    bottomTop.classList.add("flex");
    bottomTop.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    bottomTop.classList.add("hidden");
    bottomTop.classList.remove("flex");
  }
};

window.onload=function () {
  const loader = document.getElementById('loader');
  const body = document.getElementById('body');
  setTimeout(() => {
    loader.classList.remove('flex');
    loader.classList.add('hidden');
    body.classList.remove('hidden')
  }, 5000);
  
}

window.addEventListener

// Nav Menu

function btnHamburger() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector("#nav-menu");
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
}

// Klik di luar hamburger
window.onclick = function (e) {
    
  if (e.target != hamburger && e.target != navMenu) {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector("#nav-menu");
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
};

// Dark mode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// Pindahkan posisi toggle sesuai mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  document.documentElement.classList.remove("dark");
  darkToggle.checked = false;
}

