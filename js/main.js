// Abrir menu principal al hacer click
btnMob.addEventListener('click', function () {
    menuMob.classList.toggle("dBlock");
    openBtn.classList.toggle("fa-xmark");
    overlay.classList.toggle("dBlock");
    setTimeout(function () {
        overlay.classList.toggle("changeOpacity");
    }, 0.1);
});

