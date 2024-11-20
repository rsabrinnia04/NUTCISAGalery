function changeSlide(carouselId, direction) {
    const carousel = document.getElementById(`${carouselId}-carousel`);
    const images = carousel.children;
    const totalImages = images.length;

    let currentIndex = parseInt(carousel.getAttribute('data-current-index')) || 0;

    // Hitung index baru
    currentIndex = (currentIndex + direction + totalImages) % totalImages;

    // Pindahkan carousel
    const imageWidth = images[0].offsetWidth;
    carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

    // Update index saat ini
    carousel.setAttribute('data-current-index', currentIndex);
}
