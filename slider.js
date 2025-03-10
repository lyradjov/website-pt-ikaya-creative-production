document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    let slides = document.querySelectorAll(".slide");

    function showSlide(index) {
        if (index >= slides.length) slideIndex = 0;
        if (index < 0) slideIndex = slides.length - 1;
        
        slides.forEach(slide => slide.style.display = "none");
        slides[slideIndex].style.display = "block";
    }

    function changeSlide(n) {
        slideIndex += n;
        showSlide(slideIndex);
    }

    function autoSlide() {
        slideIndex++;
        showSlide(slideIndex);
        setTimeout(autoSlide, 3000);
    }

    // Menampilkan slide pertama
    showSlide(slideIndex);

    document.querySelector(".prev").addEventListener("click", function() {
        changeSlide(-1);
    });

    document.querySelector(".next").addEventListener("click", function() {
        changeSlide(1);
    });

    setTimeout(autoSlide, 3000);
});


