let uniqueSlideIndex = 0;
showUniqueSlides();

function showUniqueSlides() {
    let i;
    let slides = document.getElementsByClassName("unique-slide");
    let dots = document.getElementsByClassName("unique-dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    uniqueSlideIndex++;
    if (uniqueSlideIndex > slides.length) {uniqueSlideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[uniqueSlideIndex-1].style.display = "block";  
    dots[uniqueSlideIndex-1].className += " active";
    setTimeout(showUniqueSlides, 5000); // Change image every 5 seconds
}