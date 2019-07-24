var element = document.getElementById("button");
function myfunction(event) {
    document.body.style.background = "red";
}
element.addEventListener("click", myfunction);