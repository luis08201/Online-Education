window.addEventListener('scroll', function(){
    const header = document.getElementById("header");
    header.classList.toggle("sticky", window.screenY > 0);
});


let enlace = document.querySelectorAll(".nav-link");

enlace.forEach((button) => {
  button.addEventListener("click", (_) => {
    enlace.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.toggle("active");
  });
});

/*  */
let enlaceOne = document.querySelectorAll(".nav-link");

enlaceOne.forEach((e) => {
  e.addEventListener("click", () => {
    let navbarSupportedContent = document.getElementById(
      "navbarSupportedContent");
      navbarSupportedContent.classList.remove("show");
  })
})












