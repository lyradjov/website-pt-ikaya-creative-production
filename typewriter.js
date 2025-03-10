function typeWriter(elementId, text, delay = 100) {
  const element = document.getElementById(elementId);
  let i = 0;

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, delay);
    }
  }

  type();
}

// Call the typeWriter function for each slide
typeWriter("typewriter1", "Selamat Datang di Website kami");
typeWriter("typewriter2", "Selamat Datang di Website kami");
typeWriter("typewriter3", "Selamat Datang di Website kami");
