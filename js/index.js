const navbar = document.getElementById("navbar");

      window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      });


$('.nav-link').on('click', function (e) {
  e.preventDefault(); // Mencegah aksi default link

  var target = $(this).attr('href');
  var elementTarget = $(target);

  // Hitung tinggi navbar secara dinamis
  var navbarHeight = $('#navbar').outerHeight();

  // Scroll ke posisi elemen dikurangi tinggi navbar
  $('html, body').animate({
    scrollTop: elementTarget.offset().top - navbarHeight - 20
  }, 500, 'swing');
});





document.addEventListener("DOMContentLoaded", function () {
  const fadeIns = document.querySelectorAll('.fade-in');
  const kanan = document.querySelectorAll('.kanan');
  const kiri = document.querySelectorAll('.kiri');

  function handleScroll() {
    fadeIns.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 20 && rect.bottom > 0) {
        el.classList.add('appear');
      } else {
        el.classList.remove('appear');
      }
    });

    kanan.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40 && rect.bottom > 0) {
        el.classList.add('appear');
      } else {
        el.classList.remove('appear');
      }
    });

    kiri.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40 && rect.bottom > 0) {
        el.classList.add('appear');
      } else {
        el.classList.remove('appear');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

let darkmode = localStorage.getItem('darkmode')
const themeswitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active" ) enableDarkmode()

themeswitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})