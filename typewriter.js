let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const texts = [
    "Selamat datang di Website Kami",
    "Selamat datang di Website Kami",
    "Selamat datang di Website Kami"
];

function typeWriterEffect(element, text, speed = 100) {
    element.innerHTML = "";
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('hidden', i !== index);
    });

    const h1Element = slides[index].querySelector(".typewriter");
    typeWriterEffect(h1Element, texts[index]);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

document.getElementById('nextSlide').addEventListener('click', nextSlide);
document.getElementById('prevSlide').addEventListener('click', prevSlide);

// Auto-slide setiap 5 detik
setInterval(nextSlide, 5000);

// Menjalankan efek pertama kali
showSlide(currentSlide);