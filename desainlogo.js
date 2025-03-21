const photos = [
    
    { src: "gambar/desain-logo/alldays.png", alt: "post " },
    { src: "gambar/desain-logo/elpizo.png", alt: "post " },
    { src: "gambar/desain-logo/gepben.png", alt: "post " },
    { src: "gambar/desain-logo/gricen.png", alt: "post " },
    { src: "gambar/desain-logo/gruprumah.png", alt: "post " },
    { src: "gambar/desain-logo/salemjayaa.png", alt: "post " },
    { src: "gambar/desain-logo/lovi.png", alt: "post " },
    { src: "gambar/desain-logo/noellaa.png", alt: "post " },
    { src: "gambar/desain-logo/oriental.png", alt: "post " },
    { src: "gambar/desain-logo/teelov.png", alt: "post " },
    
   
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