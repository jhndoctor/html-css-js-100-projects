const btn = document.querySelector('button'),
    hexCode = document.querySelector('h2');

function randomColor() {
    const hex = '0123456789abcdef';
    let color = '#';

    for ( i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
}

btn.addEventListener('click', function() {
    let color = randomColor();
    document.body.style.background = color;
    hexCode.innerHTML = color;
});