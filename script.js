window.addEventListener("scroll", function() {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 50) {
    nav.style.background = "#1b5e20";
  } else {
    nav.style.background = "#2e7d32";
  }
});

document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
