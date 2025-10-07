const photos = [
    { src: "gambar/keripik/Catalogue  I'KAYA.pdf (1)_page-0002.jpg", alt: "post " },
    { src: "gambar/keripik/Catalogue  I'KAYA.pdf (1)_page-0003.jpg", alt: "post " },
     { src: "gambar/keripik/Catalogue  I'KAYA.pdf (1)_page-0004.jpg", alt: "post " },
     { src: "gambar/keripik/Catalogue  I'KAYA.pdf (1)_page-0005.jpg", alt: "post " },
      { src: "gambar/keripik/Catalogue  I'KAYA.pdf (1)_page-0006.jpg", alt: "post " },
       { src: "gambar/keripik/Catalogue  I'KAYA.pdf (1)_page-0007.jpg", alt: "post " },
        { src: "gambar/keripik/Catalogue  I'KAYA.pdf (1)_page-0008.jpg", alt: "post " },
         { src: "gambar/keripik/Catalogue  I'KAYA.pdf (1)_page-0009.jpg", alt: "post " },
          { src: "gambar/keripik/Catalogue  I'KAYA.pdf (1)_page-0010.jpg", alt: "post " },
           { src: "gambar/keripik/Catalogue  I'KAYA.pdf (1)_page-0011.jpg", alt: "post " },
            { src: "gambar/keripik/Catalogue  I'KAYA.pdf (1)_page-0012.jpg", alt: "post " },

    { src: "gambar/keripik/hampers1.jpg", alt: "post " },
    { src: "gambar/keripik/hampers2.jpg", alt: "post " },
    { src: "gambar/keripik/hampers3.jpg", alt: "post " },
    { src: "gambar/keripik/20.jpg", alt: "post " },
    { src: "gambar/keripik/21.jpg", alt: "post " },
    { src: "gambar/keripik/22.jpg", alt: "post " },
    { src: "gambar/keripik/24.jpg", alt: "post " },
    { src: "gambar/keripik/35.jpg", alt: "post " },
    { src: "gambar/keripik/36.jpg", alt: "post " },
    { src: "gambar/keripik/37.jpg", alt: "post " },
    { src: "gambar/keripik/38.jpg", alt: "post " },
    { src: "gambar/keripik/39.jpg", alt: "post " },
    { src: "gambar/keripik/40.jpg", alt: "post " },
    { src: "gambar/keripik/41.jpg", alt: "post " },
    { src: "gambar/keripik/42.jpg", alt: "post " },
    { src: "gambar/keripik/43.jpg", alt: "post " },
    { src: "gambar/keripik/44.jpg", alt: "post " },
    { src: "gambar/keripik/45.jpg", alt: "post " },
    { src: "gambar/keripik/46.jpg", alt: "post " },
    { src: "gambar/keripik/47.jpg", alt: "post " },
    { src: "gambar/keripik/48.jpg", alt: "post " },
    { src: "gambar/keripik/49.jpg", alt: "post " },
    { src: "gambar/keripik/50.jpg", alt: "post " },
    { src: "gambar/keripik/51.jpg", alt: "post " },
    { src: "gambar/keripik/gelang.png", alt: "post " },
    { src: "gambar/keripik/53.jpg", alt: "post " },
    { src: "gambar/keripik/54.jpg", alt: "post " },
   
  
   
    // Tambahkan lebih banyak objek gambar di sini
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