const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});
// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
// Close menu when nav link is clicked
const slideshow = document.querySelector(".slideshow");
const slides = document.querySelectorAll(".slide");
const thumbnails = document.querySelectorAll(".thumbnail");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let counter = 0;
const slideWidth = slides[0].clientWidth;
let interval;

function nextSlide() {
    counter++;
    if (counter >= slides.length) {
        counter = 0;
    }
    slideshow.style.transform = `translateX(${-slideWidth * counter}px)`;
    thumbnails.forEach((thumb) => thumb.classList.remove("active"));
    thumbnails[counter].classList.add("active");
}

function prevSlide() {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slideshow.style.transform = `translateX(${-slideWidth * counter}px)`;
    thumbnails.forEach((thumb) => thumb.classList.remove("active"));
    thumbnails[counter].classList.add("active");
}

function startAutoplay() {
    interval = setInterval(nextSlide, 3000);
}

function stopAutoplay() {
    clearInterval(interval);
}

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
        stopAutoplay();
        counter = parseInt(thumbnail.dataset.index);
        slideshow.style.transform = `translateX(${-slideWidth * counter}px)`;
        thumbnails.forEach((thumb) => thumb.classList.remove("active"));
        thumbnail.classList.add("active");
        startAutoplay();
    });
});

prevButton.addEventListener("click", () => {
    stopAutoplay();
    prevSlide();
    startAutoplay();
});

nextButton.addEventListener("click", () => {
    stopAutoplay();
    nextSlide();
    startAutoplay();
});

startAutoplay();

/*
<!-- Menu section -->
      <section class="menu-section" id="menu">
        <h2 class="section-title"></h2>
        <div class="section-content">
          <ul class="menu-list">
            <li class="menu-item">
              <img src="gambar/des-buku.png" alt="Hot Beverages" class="menu-image" />
              <div class="menu-details">
                <h3 class="name">Hot Beverages</h3>
                <p class="text">Wide range of Steaming hot coffee to make you fresh and light.</p>
              </div>
            </li>
            <li class="menu-item">
              <img src="gambar/deslog.png" alt="Cold Beverages" class="menu-image" />
              <div class="menu-details">
                <h3 class="name">Cold Beverages</h3>
                <p class="text">Creamy and frothy cold coffee to make you cool.</p>
              </div>
            </li>
            <li class="menu-item">
              <img src="gambar/saljay.png" alt="Refreshment" class="menu-image" />
              <div class="menu-details">
                <h3 class="name">Refreshment</h3>
                <p class="text">Fruit and icy refreshing drink to make feel refresh.</p>
              </div>
            </li>
            
          </ul>
        </div>
      </section>
      <!-- Menu section -->

*/

/*
<!--Our Team-->
    <section class="team-section" id="team">
        <h2 class="section-title">Our Team</h2>
        <div class="section-content">
            <div class="team-members">
                <div class="team-member">
                    <img src="gambar/ikaya.jpg" alt="Anggota 1" class="team-member-image">
                    <h3 class="team-member-name">Nama Anggota 1</h3>
                    <p class="team-member-title">Jabatan Anggota 1</p>
                    <div class="social-link-list">
                        <a href="#" class="social-link"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#" class="social-link"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="social-link"><i class="fa-brands fa-x-twitter"></i></a>
                    </div>
                </div>
                <div class="team-member">
                    <img src="gambar/ikaya.jpg" alt="Anggota 2" class="team-member-image">
                    <h3 class="team-member-name">Nama Anggota 2</h3>
                    <p class="team-member-title">Jabatan Anggota 2</p>
                    <div class="social-link-list">
                        <a href="#" class="social-link"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#" class="social-link"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="social-link"><i class="fa-brands fa-x-twitter"></i></a>
                    </div>
                </div>
                <div class="team-member">
                    <img src="gambar/ikaya.jpg" alt="Anggota 3" class="team-member-image">
                    <h3 class="team-member-name">Nama Anggota 3</h3>
                    <p class="team-member-title">Jabatan Anggota 3</p>
                    <div class="social-link-list">
                        <a href="#" class="social-link"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#" class="social-link"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="social-link"><i class="fa-brands fa-x-twitter"></i></a>
                    </div>
                </div>
                <div class="team-member">
                    <img src="gambar/ikaya.jpg" alt="Anggota 4" class="team-member-image">
                    <h3 class="team-member-name">Nama Anggota 4</h3>
                    <p class="team-member-title">Jabatan Anggota 4</p>
                    <div class="social-link-list">
                        <a href="#" class="social-link"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#" class="social-link"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="social-link"><i class="fa-brands fa-x-twitter"></i></a>
                    </div>
                </div>

                <div class="team-member">
                    <img src="gambar/ikaya.jpg" alt="Anggota 4" class="team-member-image">
                    <h3 class="team-member-name">Nama Anggota 4</h3>
                    <p class="team-member-title">Jabatan Anggota 4</p>
                    <div class="social-link-list">
                        <a href="#" class="social-link"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#" class="social-link"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="social-link"><i class="fa-brands fa-x-twitter"></i></a>
                    </div>
                </div>
                <div class="team-member">
                    <img src="gambar/ikaya.jpg" alt="Anggota 4" class="team-member-image">
                    <h3 class="team-member-name">Nama Anggota 4</h3>
                    <p class="team-member-title">Jabatan Anggota 4</p>
                    <div class="social-link-list">
                        <a href="#" class="social-link"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#" class="social-link"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="social-link"><i class="fa-brands fa-x-twitter"></i></a>
                    </div>
                </div>
                <div class="team-member">
                    <img src="gambar/ikaya.jpg" alt="Anggota 4" class="team-member-image">
                    <h3 class="team-member-name">Nama Anggota 4</h3>
                    <p class="team-member-title">Jabatan Anggota 4</p>
                    <div class="social-link-list">
                        <a href="#" class="social-link"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#" class="social-link"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="social-link"><i class="fa-brands fa-x-twitter"></i></a>
                    </div>
                </div>
                <div class="team-member">
                    <img src="gambar/ikaya.jpg" alt="Anggota 4" class="team-member-image">
                    <h3 class="team-member-name">Nama Anggota 4</h3>
                    <p class="team-member-title">Jabatan Anggota 4</p>
                    <div class="social-link-list">
                        <a href="#" class="social-link"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#" class="social-link"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="social-link"><i class="fa-brands fa-x-twitter"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <br>
    <br>
    */


    /*
    <!-- Testimonials section -->
      <section class="testimonials-section" id="testimonials">
        <h2 class="section-title">Testimonials</h2>
        <div class="section-content">
          <div class="slider-container swiper">
            <div class="slider-wrapper">
              <ul class="testimonials-list swiper-wrapper">
                <li class="testimonial swiper-slide">
                  <img src="images/user-1.jpg" alt="User" class="user-image" />
                  <h3 class="name">Sarah Johnson</h3>
                  <i class="feedback">"Loved the French roast. Perfectly balanced and rich. Will order again!"</i>
                </li>
                <li class="testimonial swiper-slide">
                  <img src="images/user-2.jpg" alt="User" class="user-image" />
                  <h3 class="name">James Wilson</h3>
                  <i class="feedback">"Great espresso blend! Smooth and bold flavor. Fast shipping too!"</i>
                </li>
                <li class="testimonial swiper-slide">
                  <img src="images/user-3.jpg" alt="User" class="user-image" />
                  <h3 class="name">Michael Brown</h3>
                  <i class="feedback">"Fantastic mocha flavor. Fresh and aromatic. Quick shipping!"</i>
                </li>
                <li class="testimonial swiper-slide">
                  <img src="images/user-4.jpg" alt="User" class="user-image" />
                  <h3 class="name">Emily Harris</h3>
                  <i class="feedback">"Excellent quality! Fresh beans and quick delivery. Highly recommend."</i>
                </li>
                <li class="testimonial swiper-slide">
                  <img src="images/user-5.jpg" alt="User" class="user-image" />
                  <h3 class="name">Anthony Thompson</h3>
                  <i class="feedback">"Best decaf I've tried! Smooth and flavorful. Arrived promptly."</i>
                </li>
              </ul>
              <div class="swiper-pagination"></div>
              <div class="swiper-slide-button swiper-button-prev"></div>
              <div class="swiper-slide-button swiper-button-next"></div>
            </div>
          </div>
        </div>
      </section>

      */