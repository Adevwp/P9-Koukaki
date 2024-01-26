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

/* 
const video = document.querySelector('.video-koukaki'); //Selectionne l'élément avec la classe "fond-video" et l'attribut à la variable video //
const logo = document.querySelector('.fallback-img'); // Selectionne l'élément avec la classe

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    video.style.transform = `translate3d(0, ${scrollPosition * 0.2}px, 0)`;
    logo.style.transform = `translate3d(0, ${scrollPosition * -0.5}px, 0)`;
}); */

  // Swiper js with coverflow for characters presentation TODO à compléter
  const swiper = new Swiper('.swiper', {
    speed: 1000,
    spaceBetween: 50,
    direction: 'horizontal',
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
      delay: 4000, /*duration betwenn each slide*/
      disableOnInteraction: false,
    },
    loop: true,
    /*loopedSlides: 1,
    loopAdditionalSlides: 1,*/
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0, 
      depth: 200, /* 50*/
      stretch: 30, /* à*/
      modifier: 1,
      scale: 1,
      slideShadows: false,
    },
  });

  swiper.slideNext();

  //CLOUD ANIMATION 

// Utilisez addEventListener avec l'option { passive: true } pour une meilleure performance de défilement. TODO modifier commentaire
let scrolling = false;

window.addEventListener('scroll', function () {
  if (!scrolling) {
    scrolling = true;
    requestAnimationFrame(function () {
      handleScroll();
      scrolling = false;
    });
  }
});

function handleScroll() {
  const bigCloud = document.querySelector('.big-cloud');
  const littleCloud = document.querySelector('.little-cloud');
  const placeSection = document.querySelector('#place');

  const sectionOffsetTop = placeSection.offsetTop;
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition >= sectionOffsetTop) {
    const Parallax = (scrollPosition - sectionOffsetTop) / 4;
    const translationX = Math.min(Parallax, 300);

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
const navLinks = document.querySelectorAll('.burgermenu-open li'); // selectionne tout les éléments <li> et les attribut à la variable 'navLinks//

navLinks.forEach(link => {    // boucle qui permet itérer touts les éléments <li> du menu TODO maj commentaires//
  link.addEventListener('click', () => { 
    /* document.querySelector('.menu').classList.remove('active'); lorsque l'un des titres du menu est cliqué  cela supprime la class 'is-active' du menu et le cache ensuite */
    burgerMenu.classList.remove('active'); // ça permet de supprimer également la classe 'active' de l'élément burger et réinitialise l'icone du menu burger
    fullScreenMenu.classList.remove('active'); // ça permet de supprimer également la classe 'active' de l'élément burger et réinitialise l'icone du menu burger
    titlesNav.forEach(title => { 
    title.classList.remove('animes'); // ça supprime ensuite la classe 'animes' de chaque titre pour désactivet l'animation//
    });
  });
});
