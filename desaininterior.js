const photos = [
    
    { src: "gambar/desain interior/20.png", alt: "post " },
    { src: "gambar/desain interior/21.png", alt: "post " },
    { src: "gambar/desain interior/22.png", alt: "post " },
    { src: "gambar/desain interior/23.png", alt: "post " },
    { src: "gambar/desain interior/24.png", alt: "post " },
    { src: "gambar/desain interior/25.png", alt: "post " },
    { src: "gambar/desain interior/26.png", alt: "post " },
    { src: "gambar/desain interior/27.png", alt: "post " },
    { src: "gambar/desain interior/28.png", alt: "post " },
    { src: "gambar/desain interior/29.png", alt: "post " },
    { src: "gambar/desain interior/30.png", alt: "post " },

    

    
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