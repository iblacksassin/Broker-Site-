//Card Slider//
let slides = document.querySelectorAll('.reviews .flex .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
//sign up form
var Form1 = document.getElementById("Form1");
var Form2 = document.getElementById("Form2");

var Next1 = document.getElementById("Next1");
var Back1 = document.getElementById("Back1");

var progress = document.getElementById("progress");

Next1.onclick = function(){
    Form1.style.left = "-450px";
    Form2.style.left = "40px";
    progress.style.width ="240px";
}
Back1.onclick = function(){
    Form1.style.left = "40px";
    Form2.style.left = "450px";
    progress.style.width ="120px";
}
