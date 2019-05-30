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

const reviewButtons = document.querySelectorAll(".reviewButton");
let allReviews = Array.from(document.querySelectorAll(".review"));
let changeReviews = (pressType, indexToShow) => {
  allReviews.forEach((item, index) => {
    if (index === indexToShow) {
      item.style.visibility = "visible";
      item.style.opacity = 1;
    } else {
      item.style.visibility = "hidden";
      item.style.opacity = 0;
    }
  });
};

let changeIndexToShow = (pressType, indexToShow) => {
  if (pressType === "nextReview") {
    return (indexToShow + 1) % allReviews.length;
  }
  if (pressType === "prevReview") {
    return (indexToShow + allReviews.length - 1) % allReviews.length;
  }
};

let indexToShow = 0;
reviewButtons.forEach(
  item =>
    (item.onclick = () => {
      indexToShow = changeIndexToShow(item.id, indexToShow);
      changeReviews(item.id, indexToShow);
    })
);
