// for header
function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('open');
  }
  
//for image slider
function showSlides() {
    var slideIndex = 0;
    var slides = document.getElementsByClassName("slider-image");
    var dots = document.getElementsByClassName("dot");

    setInterval(function () {
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
      }

      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add("active");
    }, 2000); // Change slide every 2 seconds
  }

  window.onload = function() {
    showSlides();
  };

  //for teachers card 1
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  //for teachers card 2
  // Animate cards on section enter
  const cards = document.querySelectorAll('.swiper-slide');

  const animateCards = () => {
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.animation = 'fadeIn 1s';
      }, index * 100);
    });
  };

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const handleScroll = () => {
    if (isInViewport(document.querySelector('.container'))) {
      animateCards();
      window.removeEventListener('scroll', handleScroll);
    }
  };

  window.addEventListener('scroll', handleScroll);