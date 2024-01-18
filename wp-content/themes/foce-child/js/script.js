// Fade In for all sections 

const sectionApparitionObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeIn');

            // Apparition effet for title section
            
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