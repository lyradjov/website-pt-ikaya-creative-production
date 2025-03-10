document.addEventListener('DOMContentLoaded', function() {
    const services = document.querySelectorAll('.service');

    function checkSlide() {
        services.forEach(service => {
            const slideInAt = (window.scrollY + window.innerHeight) - service.offsetHeight / 2;
            const serviceBottom = service.offsetTop + service.offsetHeight;
            const isHalfShown = slideInAt > service.offsetTop;
            const isNotScrolledPast = window.scrollY < serviceBottom;

            if (isHalfShown && isNotScrolledPast) {
                service.classList.add('fade-in');
            } else {
                service.classList.remove('fade-in');
            }
        });
    }

    window.addEventListener('scroll', checkSlide);
    checkSlide(); // Panggil saat halaman dimuat
});