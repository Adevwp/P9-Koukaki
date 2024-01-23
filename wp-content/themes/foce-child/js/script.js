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
                    }, delay);
                });
            }
            observer.unobserve(entry.target);
        }
    });
}, {
    rootMargin: '-100px 0px -100px 0px'
});

const sections = document.querySelectorAll('.story, #characters, #place, #studio, footer');

for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    sectionApparitionObserver.observe(section);
}

// Parallax effect on hero header
 /* TODO à retravailler
document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.video-koukaki');
  
    new simpleParallax(video, {
        orientation: 'left',
        scale: 1.2,
        delay: 0.5,
        transition: 'ease-in-out'
    });
  }); */ 

  // Swiper js with coverflow for characters presentation TODO à compléter
  const swiper = new Swiper('.swiper', {
    speed: 1000,
    spaceBetween: 100,
    direction: 'horizontal',
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
        delay: 5000, /*duration betwenn each slide*/
        disableOnInteraction: false,
    },
    loop: true,
    loopedSlides: 2,
    loopAdditionalSlides: 1,
    effect: "coverflow",
    coverflowEffect: {
        slideShadows: false,
        rotate: 0, 
        stretch: 60, /* à*/
        depth: 200, /* 50*/
        /*modifier: 1 */
    },
  });

  swiper.slideNext();
