const title = document.getElementById('title'),
    author = document.getElementById('author'),
    year = document.getElementById('year'),
    bookList = document.getElementById('book-list'),
    btn = document.querySelector('.btn');

btn.addEventListener('click', e => {
    e.preventDefault();

    const newRow = document.createElement('section');

    if (title.value == '' || author.value == '' || year.value == '') 
        return;
    
    const newTitle = document.createElement('div');
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    const newAuhtor = document.createElement('div');
    newAuhtor.innerHTML = author.value;
    newRow.appendChild(newAuhtor);

    const newYear = document.createElement('div');
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);

    bookList.appendChild(newRow);
});