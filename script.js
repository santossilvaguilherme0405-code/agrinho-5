window.addEventListener("scroll", function() {
document.querySelectorAll('.fade').forEach(el => {
if (el.getBoundingClientRect().top < window.innerHeight - 50) {
el.classList.add('show');
}
});
});

/* SCROLL BOTÃO */
function scrollToSection(id) {
document.getElementById(id).scrollIntoView({
behavior: "smooth"
});
}

/* ZOOM */
function zoomImg(img) {
document.getElementById("modal").style.display = "flex";
document.getElementById("imgZoom").src = img.src;
}

function fecharZoom() {
document.getElementById("modal").style.display = "none";
}

/* CONTADOR */
function animateValue(id, end) {
let start = 0;
let interval = setInterval(() => {
start++;
document.getElementById(id).innerText = start + "%";
if (start >= end) clearInterval(interval);
}, 15);
}

window.onload = () => {
animateValue("num1", 95);
animateValue("num2", 90);
animateValue("num3", 98);
};
