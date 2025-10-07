document.addEventListener("DOMContentLoaded", function() {

  // 1. Data Projects
  const projects = [
    {
      title: 'PHOTOSHOOT',
      image: 'gambar/project-cov/foto.png',
      link: 'photoshoot.html',
    },
    {
      title: 'LOGO DESIGN',
      image: 'gambar/project-cov/deslog.png',
      link: 'desainlogo.html',
    },
       {
      title: 'DESAIN INTERIOR',
      image: 'update/apdet/80c06309-6831-465b-b993-162571af1eb5-20.jpg',
      link: 'desainlogo.html',
    },
    {
      title: 'CORPORATE ADVERTISING DESIGN MAYORA',
      image: 'update/apdet/dc64eaeb-0e5d-498d-a28e-71b0f961f1ce-10.jpg',
      link: 'mayora.html',
    },
    {
      title: 'IO CONCEPTOR BCA EXPO 2024',
      image: 'update/apdet/80c06309-6831-465b-b993-162571af1eb5-24.jpg',
      link: 'bcaexpo.html',
    },
    {
      title: 'JENDELA DUNIA LITERASI',
      image: 'update/apdet/80c06309-6831-465b-b993-162571af1eb5-26.jpg',
      link: 'bcaexpo.html',
    },
    {
      title: 'SOCIAL MARKETING MANAGEMENT',
      image: 'update/apdetu/5e8e10b8-a6a4-4438-85cb-842ef6893818-22.jpg',
      link: 'socmedman.html',
    },
    {
      title: 'POLITICAL CAMPAIGN',
      image: 'update/apdet/dc64eaeb-0e5d-498d-a28e-71b0f961f1ce-14.jpg',
      link: 'kampanyepol.html',
    },
    {
      title: 'POLAIRUD GORONTALO',
      image: 'update/apdet/80c06309-6831-465b-b993-162571af1eb5-22.jpg',
      link: 'videoproj.html',
    },
    {
      title: 'WEB DESIGN',
      image: 'update/apdet/80c06309-6831-465b-b993-162571af1eb5-21.jpg',
      link: 'desainweb.html',
    },
    {
      title: 'PRODUCT DESIGN',
      image: 'update/apdetu/desprod1.jpg',
      link: 'desainproduk.html',
    },
    {
      title: 'BOOK COVER DESIGN',
      image: 'gambar/project-cov/desbuk.png',
      link: 'descovbuk.html',
    },
    {
      title: 'KEMENKUMHAM GORONTALO',
      image: 'update/apdetu/5e8e10b8-a6a4-4438-85cb-842ef6893818-12.jpg',
      link: 'kemkumham.html',
    },
    {
      title: 'FITELA',
      image: 'update/apdetu/5e8e10b8-a6a4-4438-85cb-842ef6893818-13.jpg',
      link: 'kemkumham.html',
    },
    {
      title: 'YUEN BUTIK',
      image: 'update/apdet/80c06309-6831-465b-b993-162571af1eb5-28.jpg',
      link: 'kemkumham.html',
    },
    {
      title: 'PEMKOT MAKASSAR',
      image: 'update/apdet/80c06309-6831-465b-b993-162571af1eb5-27.jpg',
      link: 'kemkumham.html',
    },
     {
      title: 'BALAI DESA KIPM',
      image: 'update/apdetu/5e8e10b8-a6a4-4438-85cb-842ef6893818-17.jpg',
      link: 'kemkumham.html',
    },
     {
      title: 'EO PRODUCT - EXTRAJOSS',
      image: 'update/apdet/80c06309-6831-465b-b993-162571af1eb5-23.jpg',
      link: 'kemkumham.html',
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
            See more...
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
