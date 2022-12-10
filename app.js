//etting date dynamic
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//nav toggle part
const navToggle = document.querySelector(".nav-toggle");
const linkContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  const containerHeight = linkContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linkContainer.style.height = `${linksHeight}px`;
  } else {
    linkContainer.style.height = 0;
  }
});

const navBar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const windowHeight = window.pageYOffset;
  const navBarHeight = navBar.getBoundingClientRect().height;
  console.log(windowHeight, navBarHeight);
  if (windowHeight > navBarHeight) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }

  if (windowHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
//
