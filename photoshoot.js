const photos = [
    { src: "gambar/photoshoot/foto1.1_krii.jpg", alt: "post " },
    { src: "gambar/photoshoot/foto1.1_tengah.jpg", alt: " post " },
    { src: "gambar/photoshoot/foto1.1_kanan.jpg", alt: " post " },
    { src: "gambar/photoshoot/foto1.2_kiri.jpg", alt: "post " },
    { src: "gambar/photoshoot/foto1.2_tengah.jpg", alt: "post " },
    { src: "gambar/photoshoot/foto1.2_kanan.jpg", alt: "post " },
    { src: "gambar/photoshoot/foto1.3_kiri.jpg", alt: "post " },
    { src: "gambar/photoshoot/foto1.3_tengah.jpg", alt: " post " },
    { src: "gambar/photoshoot/foto1.3_kanan.jpg", alt: " post " },
    { src: "gambar/photoshoot/Lois 03.png", alt: " post " },
    { src: "gambar/photoshoot/Lois 05-1.png", alt: " post " },
    { src: "gambar/photoshoot/Lois 06.png", alt: " post " },
    { src: "gambar/photoshoot/R&M 03.jpg", alt: " post " },
    { src: "gambar/photoshoot/Grid R&M 01.jpeg", alt: " post " },
    { src: "gambar/photoshoot/R&M 10.png", alt: " post " },
    { src: "gambar/photoshoot/R&M 18.png", alt: " post " },
    { src: "gambar/photoshoot/R&M 20.jpeg", alt: " post " },
    { src: "gambar/photoshoot/R&M 19.png", alt: " post " },
    { src: "gambar/photoshoot/1.4_kiri.png", alt: " post " },
    { src: "gambar/photoshoot/1.4_tengah.jpg", alt: " post " },
    { src: "gambar/photoshoot/1.4_kanan.jpg", alt: " post " },
    { src: "gambar/photoshoot/1.5_kiri.jpg", alt: " post " },
    { src: "gambar/photoshoot/1.5_tengah.jpg", alt: " post " },
    { src: "gambar/photoshoot/1.5_kanan.jpg", alt: " post " },
    { src: "gambar/photoshoot/1.6_kiri.png", alt: " post " },
    { src: "gambar/photoshoot/1.6_tengah.png", alt: " post " },
    { src: "gambar/photoshoot/1.6_kanan.png", alt: " post " },

    //tambah gambar trus
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