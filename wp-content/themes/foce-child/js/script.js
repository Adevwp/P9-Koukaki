// Fade In for all sections 

const sectionApparitionObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeIn');

        // Apparition effect for title section    
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

// Parallax effect on hero header - TODO à retravailler

/*document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.video-koukaki');
  
    new simpleParallax(video, {
        orientation: 'left',
        scale: 1.2,
        delay: 0.5,
        transition: 'ease-in-out',
        trigger: 'scroll'
    });
  }); */

/*  test autre code pour effet de parallaxe*/


/* const video = document.querySelector('.video-koukaki'); //Selectionne l'élément avec la classe "fond-video" et l'attribut à la variable video //
const logo = document.querySelector('.heroheader-logo'); // Selectionne l'élément avec la classe

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    video.style.transform = `translate3d(0, ${scrollPosition * 0.2}px, 0)`;
    logo.style.transform = `translate3d(0, ${scrollPosition * -0.5}px, 0)`;
}); */









  // SWIPER JS COVERFLOW CHARACTERS ARTICLE
  
const swiper = new Swiper('.swiper', {
  speed: 1500,
  spaceBetween: 50,
  direction: 'horizontal',
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 4500, /*duration betwenn each slide*/
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

