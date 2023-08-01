var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");

var colorAdd1 = color1.addEventListener("input", addColor);
var colorAdd2 = color2.addEventListener("input", addColor);

function addColor(){
    body.style.background = "linear-gradient(to right," 
    + color1.value 
    + ", " 
    +color2.value
    + ")";

    css.innerHTML = body.style.background + ";";

    css.style.color = "linear-gradient(to left," 
    + color1.value 
    + ", " 
    +color2.value
    + ")";

}