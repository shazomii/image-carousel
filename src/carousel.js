export default function createCarousel(carouselSelector) {
    const carousel = document.querySelector(carouselSelector);
    const slides = carousel.querySelector('.slides');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    const dotsContainer = carousel.querySelector('.dots');

    let currentIndex = 0;

    function showSlide(index) {
        const totalSlides = slides.children.length;

        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }

        slides.style.transform = `translateX(-${currentIndex * 100}%)`;

        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    function createDots() {
        const totalSlides = slides.children.length;
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => showSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    createDots();
    showSlide(currentIndex);
}
