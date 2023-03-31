const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        color = btn.value;
        changeBackground(color);
    });
});

const body = document.body;

function changeBackground(color) {
    body.className = "";

    switch(color) {
        case "purple":
            body.className = 'purple';
            break;
        case 'blue':
            body.className = 'blue';
            break;
        case 'red':
            body.className = 'red';
            break;
        case 'green':
            body.className = 'green';
            break;
        case 'yellow':
            body.className = 'yellow';
            break;
        case 'teal':
            body.className = 'teal';
            break;
        default:
            break;
    }
}