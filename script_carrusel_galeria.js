document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.getElementById('carousel-prev');
    const nextButton = document.getElementById('carousel-next');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(n) {
        slides.forEach(slide => slide.style.display = 'none');
        slides[n].style.display = 'block';
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function startCarousel() {
        slideInterval = setInterval(nextSlide, 3000); // Cambia cada 3 segundos
    }

    function stopCarousel() {
        clearInterval(slideInterval);
    }

    // Inicializar
    showSlide(currentSlide);
    startCarousel();

    // Event listeners para los botones
    nextButton.addEventListener('click', () => {
        stopCarousel();
        nextSlide();
        startCarousel();
    });

    prevButton.addEventListener('click', () => {
        stopCarousel();
        prevSlide();
        startCarousel();
    });

    // Pausar al pasar el ratón
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', stopCarousel);
    carouselContainer.addEventListener('mouseleave', startCarousel);
});