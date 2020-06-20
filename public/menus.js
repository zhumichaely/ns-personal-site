const menuButton = document.getElementById("navbutton");
const menu = document.getElementById("navcontent");
const links = document.getElementById("links");
const image = menuButton.children[0];
let anim;

menuButton.addEventListener("click", () => {
  if (getComputedStyle(menu).display === "none") {
    anim = requestAnimationFrame(menuDown);
  } else {
    links.style.top = "100%";
    anim = requestAnimationFrame(menuUp);
  }
});

function menuDown() {
  const pos = parseFloat(getComputedStyle(links).top);
  const end = links.scrollHeight;
  if (pos <= end - 20) {
    links.style.top = (pos + 20) + "px";
    anim = requestAnimationFrame(menuDown);
  }
  else {
    links.style.top = "100%";
    image.setAttribute("src", "images/upArrow.png");
    menu.style.display = "block";
    cancelAnimationFrame(anim);
  }
}

function menuUp() {
  const pos = parseFloat(getComputedStyle(links).top);
  const end = menuButton.scrollHeight;
  if (pos >= end + 20) {
    links.style.top = (pos - 20) + "px";
    anim = requestAnimationFrame(menuUp);
  }
  else {
    links.style.top = "100%";
    menu.style.display = "none";
    image.setAttribute("src", "images/downArrow.png");
    cancelAnimationFrame(anim);
  }
}