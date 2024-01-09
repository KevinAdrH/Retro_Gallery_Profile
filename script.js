// NAVBAR ANIMATION
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
// END OF NAVBAR ANIMATION

// GALLERY ANIMATION
function playAnimation(imageNumber) {
  if (imageNumber === 1) {
    document.getElementById("animation1").src = "img/1.gif";
  } else if (imageNumber === 2) {
    document.getElementById("animation2").src = "img/2.gif";
  } else if (imageNumber === 3) {
    document.getElementById("animation3").src = "img/3.gif";
  } else if (imageNumber === 4) {
    document.getElementById("animation4").src = "img/4.gif";
  } else if (imageNumber === 5) {
    document.getElementById("animation5").src = "img/5.gif";
  } else if (imageNumber === 6) {
    document.getElementById("animation6").src = "img/6.gif";
  } else if (imageNumber === 7) {
    document.getElementById("animation7").src = "img/7.gif";
  } else if (imageNumber === 8) {
    document.getElementById("animation8").src = "img/8.gif";
  }
}

function showStatic(imageNumber) {
  if (imageNumber === 1) {
    document.getElementById("animation1").src = "img/1s.jpg";
  } else if (imageNumber === 2) {
    document.getElementById("animation2").src = "img/2s.jpg";
  } else if (imageNumber === 3) {
    document.getElementById("animation3").src = "img/3s.jpg";
  } else if (imageNumber === 4) {
    document.getElementById("animation4").src = "img/4s.jpg";
  } else if (imageNumber === 5) {
    document.getElementById("animation5").src = "img/5s.jpg";
  } else if (imageNumber === 6) {
    document.getElementById("animation6").src = "img/6s.jpg";
  } else if (imageNumber === 7) {
    document.getElementById("animation7").src = "img/7s.jpg";
  } else if (imageNumber === 8) {
    document.getElementById("animation8").src = "img/8s.jpg";
  }
}
// END OF GALLERY ANIMATION

// Smooth scroll function
function smoothScroll(targetId) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-list a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      smoothScroll(targetId);
    });
  });
});
// END OF SMOOTH SCROLLING
