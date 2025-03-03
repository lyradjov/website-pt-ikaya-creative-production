// Muncul dari bawah
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-in-bottom");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.9;

        elements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); 
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-in-bottom");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.9;

        elements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Jalankan saat halaman dimuat
});
