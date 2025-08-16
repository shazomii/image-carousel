import './style.css';

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slides img').length;
    const dots = document.querySelectorAll('.dot');

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

function createDots() {
    const slides = document.querySelectorAll('.slides img');
    const dotsContainer = document.querySelector('.dots');
    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => showSlide(i));
        dotsContainer.appendChild(dot);
    });
}

createDots();
showSlide(currentIndex);
