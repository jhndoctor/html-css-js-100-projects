const indicator = document.querySelector('.scroll-indicator .progress');
const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

function scroll() {
    let scrollTop = document.documentElement.scrollTop;
    let scrolled = (scrollTop/scrollHeight) * 100;

    indicator.style.width = `${scrolled}%`;
}

window.addEventListener('scroll', scroll);