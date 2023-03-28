const eye = document.querySelector('#eye-icon');
const input = document.querySelector('input');

eye.addEventListener('click', () => {
    input.type === 'password' ? (input.type = 'text') : (input.type = 'password');
})