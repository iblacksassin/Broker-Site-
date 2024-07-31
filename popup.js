//copy paste//
let copy = (textId) => {
    document.getElementById(textId).select();

    document.execCommand("copy");
}
document.getElementById("open-popup-btn1").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.add("active");
});
