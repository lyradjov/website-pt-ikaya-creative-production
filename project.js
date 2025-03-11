document.addEventListener("DOMContentLoaded", function() {

  // 1. Data Projects
  const projects = [
    {
      title: 'PHOTOSHOOT',
      image: 'gambar/slider3bb.png',
      link: 'photoshoot.html',
    },
    {
      title: 'DESAIN LOGO',
      image: 'gambar/desain-logo/deslog-cover11.png',
      link: 'desainlogo.html',
    },
    {
      title: 'CORPORATE ADVERTISING DESIGN MAYORA',
      image: 'gambar/mayora/mayora1ng.png',
      link: 'mayora.html',
    },
    {
      title: 'IO CONCEPTOR BCA EXPO 2024',
      image: 'gambar/bca-ioconcep/bca-covng.png',
      link: 'bcaexpo.html',
    },
    {
      title: 'SOCIAL MARKETING MANAGEMENT',
      image: 'gambar/socmedman/smm-covng.png',
      link: 'socmedman.html',
    },
    {
      title: 'KAMPANYE POLITIK',
      image: 'gambar/kampanye-pol/kampapol-covng.png',
      link: 'kampanyepol.html',
    },
    {
      title: 'POLAIRUD GORONTALO',
      image: 'gambar/polairud/polairr.png',
      link: 'videoproj.html',
    },
    {
      title: 'DESAIN WEB',
      image: 'gambar/desain web/deswebb.png',
      link: 'desainweb.html',
    },
    {
      title: 'DESAIN PRODUK',
      image: 'gambar/stikermasan.png',
      link: 'desainproduk.html',
    },
    {
      title: 'DESAIN BUKU',
      image: 'gambar/des-buku.png',
      link: 'test.html',
    },
  ];

  const projectGrid = document.querySelector('.project-grid');

  // 2. Generate Project Cards
  projects.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = `project-card ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`;
    
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <div class="project-info">
        <h3>${project.title}</h3>
        ${project.link ? `<a href="${project.link}">
          <button class="bg-yellow-500 text-black px-4 py-2 mt-2 rounded-lg shadow-md hover:bg-yellow-400 transition">
            Lihat Lebih Lanjut
          </button>
        </a>` : ''}
      </div>
    `;

    projectGrid.appendChild(card);
  });

  // 3. Intersection Observer for Slide-In Animation
  const slideInElements = document.querySelectorAll('.slide-in-left, .slide-in-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Supaya gak di-observe lagi setelah muncul
      }
    });
  }, { threshold: 0.1 });

  slideInElements.forEach(el => observer.observe(el));

});
