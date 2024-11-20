function changeSlide(carouselId, direction) {
    const carousel = document.getElementById(`${carouselId}-carousel`);
    const images = carousel.children;
    const totalImages = images.length;

    let currentIndex = parseInt(carousel.getAttribute('data-current-index')) || 0;

    // Hitung index baru berdasarkan arah (next atau prev)
    currentIndex = (currentIndex + direction + totalImages) % totalImages;

    // Pindahkan carousel berdasarkan indeks gambar saat ini
    const imageWidth = images[0].offsetWidth;  // Mendapatkan lebar gambar untuk menggeser
    carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`; // Geser gambar

    // Update index saat ini
    carousel.setAttribute('data-current-index', currentIndex);
}
