const allSlides = document.querySelectorAll('.slide');

allSlides.forEach(slide => {
    slide.addEventListener('click', () => {
        removeCurrentActives ();
        slide.classList.add('active');
    });
});

function removeCurrentActives() {
    allSlides.forEach(slide => {
        slide.classList.remove('active');
    });
}