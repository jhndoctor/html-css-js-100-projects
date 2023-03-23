let toggler = document.getElementById('switch');
toggler.addEventListener('click', () => {
    toggler.checked === true 
        ? (document.body.style.background = "black")
        : (document.body.style.background = "white");
})