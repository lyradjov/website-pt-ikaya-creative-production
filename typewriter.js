const typewriterElements = document.querySelectorAll('.typewriter');
const text = "Selamat datang di Website Kami"; // Teks yang ingin ditampilkan

typewriterElements.forEach(element => {
  let i = 0;
  let interval = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 100); // Kecepatan mengetik (ms)
});