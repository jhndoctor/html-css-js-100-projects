const upload = document.querySelector('input');
const close = document.querySelector('.close');
const img = document.querySelector('.img img');

upload.addEventListener('change', event => {
    uploadFile(event);
});

function uploadFile(event) {
    img.classList.add('active');
    close.classList.add('exit');

    img.src = URL.createObjectURL(event.target.files[0]);

    close.addEventListener('click', () => {
        img.classList.toggle('active');
        close.classList.toggle('exit');
    });
}