let selectText = document.getElementById('selectText');
let selectField = document.getElementById('selectField');
let arrowIcon = document.getElementById('arrowIcon');
let list = document.getElementById('list');
let options = document.querySelectorAll('.options');

selectField.addEventListener('click', () => {
    list.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
});

for (var option of options) {
    option.onclick = function() {
        selectText.innerHTML = this.textContent;
        list.classList.toggle('hide');
        arrowIcon.classList.toggle('rotate');
    }
}