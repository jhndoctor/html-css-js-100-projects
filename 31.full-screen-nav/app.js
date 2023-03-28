const links = document.querySelectorAll('li'),
    menu = document.querySelector('.menu'),
    highlight = document.querySelector('.highlight'),
    btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    if (menu.dataset.open === 'close') {
        menu.style.clipPath = 'circle(100% at 50% 50%)';
        menu.dataset.open = 'open';
    } else {
        menu.dataset.open = 'close';
        menu.style.clipPath = '';
        highlight.style = '';
    }
});

menu.addEventListener('click', event => {
    if (event.target === menu) {
        menu.dataset.open = 'close';
        menu.style.clipPath = '';
        highlight.style = '';
    }
});


links.forEach((link) => {
    link.addEventListener("pointerover", function () {
      const w = this.offsetWidth,
        h = this.offsetHeight,
        t = this.offsetTop;
      highlight.style.cssText = `transform: translateY(${t}px); width: ${w}px; height: ${h}px`;
    });
  });