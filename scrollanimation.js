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


//kiri-kanan
    document.addEventListener("DOMContentLoaded", function () {
        const elements = document.querySelectorAll(".fade-in-left, .fade-in-right");

        function checkScroll() {
            elements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.12) {
                    el.classList.add("show");
                }
            });
        }

        window.addEventListener("scroll", checkScroll);
        checkScroll(); // Jalankan saat halaman dimuat
    });

   
    // Lightbox Functionality
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.querySelector('.lightbox img');
    const lightboxClose = document.querySelector('.lightbox-close');

    const imageLinks = document.querySelectorAll('a[data-lightbox]');

    imageLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const imageSrc = this.href;
            lightboxImage.src = imageSrc;
            lightbox.classList.remove('hidden');
        });
    });

    lightboxClose.addEventListener('click', function() {
        lightbox.classList.add('hidden');
    });

    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.classList.add('hidden');
        }
    });

    


