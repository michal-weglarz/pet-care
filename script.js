const navbar = document.querySelector("header").children[0];

let navbarHeight = navbar.getBoundingClientRect().height;

window.onscroll = () => {
  if (
    document.body.scrollTop >= navbarHeight ||
    document.documentElement.scrollTop >= navbarHeight
  ) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
};
