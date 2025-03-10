document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".slide-in-left, .slide-in-right");

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