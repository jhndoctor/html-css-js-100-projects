const images = document.querySelectorAll('img');
const fullImg = document.querySelector('#fullImg');
const wrapper = document.querySelector('#wrapper');
const close = document.querySelector('span');

images.forEach((img, index) => {
    img.addEventListener('click', () =>{
        openModal(`images/img${index}.jpg`);
    });
});

close.addEventListener('click', () => wrapper.style.display = 'none');

function openModal(pic) {
    wrapper.style.display = 'flex';
    fullImg.src = pic;
}