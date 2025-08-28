document.addEventListener('DOMContentLoaded', function () {
    const carrossel = document.getElementById('carrossel-espaco');
    const imagens = carrossel.querySelectorAll('img');
    const prevBtn = document.getElementById('prev-espaco');
    const nextBtn = document.getElementById('next-espaco');
    let index = 0;
    const total = imagens.length;
    let interval;

    function showSlide(i) {
        carrossel.style.transform = `translateX(-${i * 100}%)`;
    }

    function nextSlide() {
        index = (index + 1) % total;
        showSlide(index);
    }

    function prevSlide() {
        index = (index - 1 + total) % total;
        showSlide(index);
    }

    function startAutoSlide() {
        interval = setInterval(nextSlide, 3500);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    nextBtn.addEventListener('click', function () {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });
    prevBtn.addEventListener('click', function () {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    carrossel.addEventListener('mouseenter', stopAutoSlide);
    carrossel.addEventListener('mouseleave', startAutoSlide);

    showSlide(index);
    startAutoSlide();
});
