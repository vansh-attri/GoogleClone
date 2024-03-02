var element = document.getElementsByClassName("leftsearchbar");
var ww = document.body.clientWidth;
if (ww < 660) {
    element.innerHTML = '< i class="fa-solid fa-magnifying-glass searchlogo fa-xs" ></i >';
};