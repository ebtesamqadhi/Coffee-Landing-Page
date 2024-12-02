//? Swiper Js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  // grabCursor: true,
  // spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//? nav open close

// const body = document.querySelector("body"),
const navMenu = document.querySelector(".menu-content"),
  navCloseBtn = document.querySelector(".navclose-btn"),
  navOpenBtn = document.querySelector(".navopen-btn");

if (navMenu && navOpenBtn) {
  navOpenBtn.addEventListener("click", () => {
    navMenu.classList.add("open");
    document.querySelector("body").style.overflowY = "hidden";
  });
  navCloseBtn.addEventListener("click", () => {
    navMenu.classList.remove("open");
    document.querySelector("body").style.overflowY = "scroll";
  });
}

const btnUp = document.querySelector(".scrollUp-btn");

btnUp.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", () => {
  // Scroll Up
  if (this.scrollY >= 400) {
    btnUp.classList.add("show");
  } else {
    btnUp.classList.remove("show");
  }

  // Change header bg color
  if (window.scrollY > 5) {
    document.querySelector("header").classList.add("header-active");
  } else {
    document.querySelector("header").classList.remove("header-active");
  }

  // nav link indicator
  const sections = document.querySelectorAll("section[id]");

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 60;

    let navId = document.querySelector(`.menu-content a[href*= ${section.id}]`);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navId.classList.add("active-navlink");
    } else {
      navId.classList.remove("active-navlink");
    }
    navId.addEventListener("click", () => {
      navMenu.classList.remove("open");
      document.querySelector("body").style.overflowY = "scroll";
    });
  });
});

// Scroll Reveal

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
});

sr.reveal(
  `.section-subtitle, .section-title, .section-description, .brand-img, .tesitmonial, .newslatter, .newslatter-input, .media-icon, .footer-content, .footer-links`,
  { interval: 100 }
);

sr.reveal(`.about-imgContent, .menu-items`, { origin: "left" });
sr.reveal(`.about-info,  .time-table`, { origin: "rigth" });
// sr.reveal(`.home-info`, { origin: "bottom" });
