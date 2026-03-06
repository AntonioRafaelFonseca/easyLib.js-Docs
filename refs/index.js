function bigger(str, pxls, inner) {
  var tags = document.getElementsByTagName(str);
  for (var i = 0; i < tags.length; i++) {
    if (tags[i].innerHTML == inner) tags[i].style.fontSize = pxls + "px";
  }
}

function addAfter(targetString, addedString) {
  let tags = document.querySelectorAll("h1, h2");

  tags.forEach(tag => {
    if (tag.textContent.trim() === targetString) {
      tag.classList.add("after");
      tag.setAttribute("data-after", addedString);
    }
  });
}
addAfter("easyLib", ".js");
bigger("p", 32, "Example:");


const menu = document.querySelector(".menu");
const topBar = document.querySelector(".top");

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  let desiredTop = 60 - scrollY;
  if (desiredTop < 9) {
    desiredTop = 9;
  }
  menu.style.top = `${desiredTop}px`;
});
