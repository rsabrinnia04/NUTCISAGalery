document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0, 0, 0, 0.8)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.innerHTML = `<img src="${img.src}" style="max-width: 90%; max-height: 90%;">`;
        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => overlay.remove());
        let currentSlide = 0;

function changeSlide(direction) {
    const carouselImages = document.querySelector('.carousel-images');
    const totalSlides = carouselImages.children.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const slideWidth = carouselImages.children[0].offsetWidth;

    carouselImages.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

    });
});
