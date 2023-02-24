function hide() {
    var toggle = document.getElementById("hide");
    var element = document.getElementById("show");

    if (toggle.style.display !== "none") {
        toggle.style.display = "none";
        element.style.display = "block";
    } else {
        toggle.style.display = "block";
        element.style.display = "none";
    }
}
