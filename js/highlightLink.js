let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".header .navbar-nav a");
let navbar = document.querySelector(".nav-link");

window.onscroll = () => {
  navbar.classList.remove("active");

  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".header .navbar-nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
