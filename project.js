document.addEventListener("DOMContentLoaded", function() {

  // 1. Data Projects
  const projects = [
    {
      title: 'PHOTOSHOOT',
      image: 'gambar/project-cov/photo.png',
      link: 'photoshoot.html',
    },
    {
      title: 'DESAIN LOGO',
      image: 'gambar/project-cov/deslog.png',
      link: 'desainlogo.html',
    },
    {
      title: 'CORPORATE ADVERTISING DESIGN MAYORA',
      image: 'gambar/project-cov/majora.png',
      link: 'mayora.html',
    },
    {
      title: 'IO CONCEPTOR BCA EXPO 2024',
      image: 'gambar/project-cov/bca.png',
      link: 'bcaexpo.html',
    },
    {
      title: 'SOCIAL MARKETING MANAGEMENT',
      image: 'gambar/socmedman/smm-covng.png',
      link: 'socmedman.html',
    },
    {
      title: 'KAMPANYE POLITIK',
      image: 'gambar/project-cov/kampa.png',
      link: 'kampanyepol.html',
    },
    {
      title: 'POLAIRUD GORONTALO',
      image: 'gambar/project-cov/polair.png',
      link: 'videoproj.html',
    },
    {
      title: 'DESAIN WEB',
      image: 'gambar/project-cov/webdes.png',
      link: 'desainweb.html',
    },
    {
      title: 'DESAIN PRODUK',
      image: 'gambar/project-cov/desduk.png',
      link: 'desainproduk.html',
    },
    {
      title: 'DESAIN COVER BUKU',
      image: 'gambar/project-cov/desbuk.png',
      link: 'descovbuk.html',
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
