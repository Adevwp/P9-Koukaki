// Fade In for all sections 

const sectionApparitionObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeIn');

        /* Apparition effect for title section */  
      const titleSection = entry.target.querySelector('h2, h3');

        if (titleSection && titleSection.textContent) {
          const words = titleSection.textContent.split(' ');
          titleSection.textContent = ' ';

          words.forEach((word) => {
            const span = document.createElement('span');
            span.classList.add('titleSectionAnimation');
            span.textContent = word;
            titleSection.appendChild(span);
          });

          const spans = titleSection.querySelectorAll('.titleSectionAnimation');

          spans.forEach((span, index) => {
            const delay = (index === 0) ? 400 : index * 600;
            setTimeout(function () {
              span.classList.add('visibility');
            }, 
              delay);
          });
        }
      observer.unobserve(entry.target);
    }
  });
}, 
{
  rootMargin: '-100px 0px -100px 0px'
});

const sections = document.querySelectorAll('.story, #characters, #place, #studio, footer');

for (let i = 0; i < sections.length; i++) {
  const section = sections[i];
  sectionApparitionObserver.observe(section);
}

// PARALLAX EFFECT HERO HEADER

function parallaxScroll() {
  const bannerSection = document.querySelector('.banner');
  const video = document.querySelector('.video-koukaki');
    
  const scrollPosition = window.scrollY;
  const bannerPosition = bannerSection.offsetTop;
  const speed = 0.5; /* speed of scroll */

  /* vertical move  of video*/ 
  const videoOffset = -(scrollPosition - bannerPosition) * (speed * 0.8);
  video.style.transform = `translateY(${videoOffset}px)`;  
}

  /* use event lisetenet on scroll to activate the function */ 
window.addEventListener('scroll', parallaxScroll);

  // SWIPER JS COVERFLOW CHARACTERS ARTICLE
  
const swiper = new Swiper('.swiper', {
  speed: 1500,
  spaceBetween: 50,
  direction: 'horizontal',
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 3500, /*duration betwenn each slide*/
    disableOnInteraction: false,
  },
  loop: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,  /* Slide rotation angle in degrees */
    depth: 150, /* Perspective depth for coverflow effect */
    stretch: 10, /* Stretching slides during coverflow effect */
    slideShadows: false, /* Whether or not to display slide shadows */
  },
});

swiper.slideNext();

  //CLOUD ANIMATION 

let scrolling = false; /* creation of the variable scrolling wich can evoluate */

window.addEventListener('scroll', function () { /* add an event listener on the action of scroll */
  if (!scrolling) {
    scrolling = true; /* change the value of scrolling */
    requestAnimationFrame(function () {
      parallaxCloudsOnScroll(); /* using function parallaxCloudsOnScroll*/  
      scrolling = false; /* change the value of scrolling to indicate that the scroll is ended */
    });
  }
});

function parallaxCloudsOnScroll() { /*defining the function */ 
  /* select the three elements of the article place */
  const bigCloud = document.querySelector('.big-cloud'); 
  const littleCloud = document.querySelector('.little-cloud');
  const placeSection = document.querySelector('#place');

  const sectionOffsetTop = placeSection.offsetTop; /* position of the section from the top pf the page*/
  const scrollPosition = window.scrollY || document.documentElement.scrollTop; /* to see the actual position of scroll on the window */

  if (scrollPosition >= sectionOffsetTop) { /* verify if the position of scroll is above the place section */
    const Parallax = (scrollPosition - sectionOffsetTop) / 4; /* calculate parallax value in terms of the position of scroll  */
    const translationX = Math.min(Parallax, 300); /* limit the value of parallax at max 300 from it position*/

    /* apply the transformation to clouds in term of the position of scroll */
    bigCloud.style.transform = 'translateX(' + -translationX + 'px)';
    littleCloud.style.transform = 'translateX(' + -translationX + 'px)';
  }
}

// BURGER MENU

  /* open burger menu on click */
const burgerMenu = document.querySelector('.burgermenu');
const fullScreenMenu = document.querySelector('.burgermenu-open');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    fullScreenMenu.classList.toggle('active');
});

  /* close burger on click on nav link*/ 
const navLinks = document.querySelectorAll('.burgermenu-open li'); /* creation of variable navLinks */ 

navLinks.forEach(link => {    // loop for all li 
  link.addEventListener('click', () => { /* action of click on a li will : */ 
    burgerMenu.classList.remove('active'); /* delete active class to .burgermenu and below on .burgermenu-open in order to close the fullscreen menu  */ 
    fullScreenMenu.classList.remove('active'); 
    });
});

