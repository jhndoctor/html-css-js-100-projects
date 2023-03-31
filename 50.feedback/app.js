const ratings = document.querySelectorAll('.rating');
const panel = document.querySelector('#panel');
const sendBtn = document.querySelector('#send');
const ratingContainer = document.querySelector('.ratings-container');

let selectedRating = "Satisfied";

ratingContainer.addEventListener('click', e => {
    if (e.target.parentNode.classList.contains('rating')) {
        removeActives();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML;
    }
});

sendBtn.addEventListener('click', () => {
    panel.innerHTML = `
        <p class="heart">💖</p>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
    `;
});

function removeActives() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active');
    }
}