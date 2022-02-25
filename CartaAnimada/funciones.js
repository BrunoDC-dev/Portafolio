var productoCaja = document.getElementById("productoCaja");
var imgFrente = document.getElementById("imgFrente");
var imgReverso = document.getElementById("imgReverso")

function flipRight() {
    productoCaja.style.transform = "rotateY(180deg)";
    imgFrente.style.left = "650px";
    imgReverso.style.left = "20px";
    imgFrente.style.transform = "rotate(-30deg)"
    imgReverso.style.transform = "rotate(0deg)"
}

function flipLeft() {
    productoCaja.style.transform = "rotateY(0deg)"
    imgFrente.style.left = "20px";
    imgReverso.style.left = "-650px";
    imgFrente.style.transform = "rotate(0deg)"
    imgReverso.style.transform = "rotate(-30deg)"
}