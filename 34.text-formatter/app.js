const inputField = document.querySelector('#input-field');
const outputField = document.querySelector('#output-field');
const buttons = document.querySelectorAll('button');

inputField.addEventListener('keyup', () => outputField.innerHTML = inputField.value);

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('uppercase'))
            outputField.classList.toggle('upppercase');
        if (btn.classList.contains('lowercase'))
            outputField.classList.toggle('lowercase');
        if (btn.classList.contains('capitalize'))
            outputField.classList.toggle('capitalize');
        if (btn.classList.contains('underline'))
            outputField.classList.toggle('underline');
        if (btn.classList.contains('italic'))
            outputField.classList.toggle('italic');
    });
});