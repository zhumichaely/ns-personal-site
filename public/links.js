const linkButton = document.getElementById("linkbutton");
const linkImage = linkButton.children[0];
const linkTable = document.getElementById("links");

linkButton.addEventListener("click", () => {
    if (getComputedStyle(linkTable).position === "absolute") {
        linkTable.style.position = "relative";
        linkImage.setAttribute("src", "images/upArrow.png");
    }
    else {
        linkTable.style.position = "absolute";
        linkImage.setAttribute("src", "images/downArrow.png");
    }
})