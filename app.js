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
