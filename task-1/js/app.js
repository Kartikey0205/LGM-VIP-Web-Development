/* Smooth Scrolling Navbar */
window.onscroll = function () {
  scroll();
};

var navbar = document.getElementById("zippyNavbar");

function scroll() {
  if (window.pageYOffset <= 520) {
    navbar.classList.add("bg-dark-color");
  } else {
    navbar.classList.remove("bg-dark-color");
  }
}
