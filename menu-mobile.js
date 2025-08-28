document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-mobile-btn');
    const menuMobile = document.getElementById('menu-mobile');
    const closeBtn = document.getElementById('close-menu-mobile');

    if (menuBtn && menuMobile && closeBtn) {
        menuBtn.addEventListener('click', function () {
            menuMobile.classList.remove('hidden');
        });
        closeBtn.addEventListener('click', function () {
            menuMobile.classList.add('hidden');
        });
    }
});
