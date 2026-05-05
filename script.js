window.addEventListener("scroll", function() {
document.querySelectorAll('.fade').forEach(el => {
if (el.getBoundingClientRect().top < window.innerHeight - 50) {
el.classList.add('show');
}
});
});

function zoomImg(img) {
document.getElementById("modal").style.display = "flex";
document.getElementById("imgZoom").src = img.src;
}

function fecharZoom() {
document.getElementById("modal").style.display = "none";
}

function animateValue(id, end) {
let start = 0;
let interval = setInterval(() => {
start += 1;
document.getElementById(id).innerText = start + "%";
if (start >= end) clearInterval(interval);
}, 20);
}

window.onload = () => {
animateValue("num1", 90);
animateValue("num2", 85);
animateValue("num3", 95);
};
