const images = [
    { src: "gambar/slider1.jpg", alt: "Office shelf with decorative items" },
    { src: "gambar/slider2.jpg", alt: "Office meeting room with chairs and tables" },
    { src: "gambar/slider3.jpg", alt: "Office meeting room with chairs and tables" },
    { src: "gambar/slider4.jpg", alt: "Office workspace with desks and chairs" },
    { src: "gambar/slider5.jpg", alt: "Office lounge area with bean bags and TV" },
    { src: "gambar/slider6.jpg", alt: "Office meeting room with glass board" },
    { src: "gambar/slider7.jpg", alt: "Office meeting room with wooden wall and chairs" },
    { src: "gambar/slider8.jpg", alt: "Office lounge area with photo wall" },
    { src: "gambar/slider9.jpg", alt: "Office lounge area with photo wall" },
    { src: "gambar/slider10.jpg", alt: "Office lounge area with photo wall" },
    { src: "gambar/slider11.jpg", alt: "Office lounge area with photo wall" },
    { src: "gambar/slider13.jpg", alt: "Office lounge area with photo wall" },
    { src: "gambar/slider14.jpg", alt: "Office lounge area with photo wall" },
    { src: "gambar/slider15.jpg", alt: "Office lounge area with photo wall" },
    { src: "gambar/slider16.jpg", alt: "Office lounge area with photo wall" },
    { src: "gambar/slider17.jpg", alt: "Office lounge area with photo wall" },
    { src: "gambar/slider11.jpg", alt: "Office lounge area with photo wall" },
    { src: "gambar/slider2.jpg", alt: "Office meeting room with chairs and tables" },
    
  ];

  // Select container gallery
  const gallery = document.getElementById("gallery");

  // Generate gambar
  images.forEach(image => {
    const div = document.createElement("div");
    div.className = "overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105";

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    img.loading = "lazy";
    img.className = "w-full h-64 object-cover";

    div.appendChild(img);
    gallery.appendChild(div);
  });