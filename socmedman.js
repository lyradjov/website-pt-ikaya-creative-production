const photos = [
    { src: "gambar/socmedman/16.jpg", alt: "post " },
    { src: "gambar/socmedman/17.jpg", alt: "post " },
    { src: "gambar/socmedman/18.jpg", alt: "post " },
    { src: "gambar/socmedman/19.jpg", alt: "post " },
    
   
    
   
   
];

const container = document.getElementById('photoshoot-container');

photos.forEach(photo => {
    const anchor = document.createElement('a');
    anchor.href = photo.src;
    anchor.dataset.lightbox = "photoshoot";
    anchor.className = "relative group overflow-hidden instagram-post";

    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = photo.alt;
    img.className = "w-full h-full object-cover transform transition duration-300 hover:scale-105";

    anchor.appendChild(img);
    container.appendChild(anchor);
});

function openLightbox(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").classList.remove("hidden");
}

function closeLightbox() {
    document.getElementById("lightbox").classList.add("hidden");
}

document.querySelectorAll("a[data-lightbox]").forEach(img => {
    img.addEventListener("click", function(event) {
        event.preventDefault();
        openLightbox(this.href);
    });
});