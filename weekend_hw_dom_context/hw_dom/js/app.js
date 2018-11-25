document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})




const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const filmListItem = createFilmListItem(event.target);
  const filmList = document.querySelector('#film-list');
  filmList.appendChild(filmListItem);

  event.target.reset();
}



const createFilmListItem = function (form) {
  const filmListItem = document.createElement('li');
  filmListItem.classList.add('film-list-item');

  const title = document.createElement('h2');
  title.textContent = form.title.value;
  filmListItem.appendChild(title);

  const director = document.createElement('h3');
  director.textContent = form.director.value;
  filmListItem.appendChild(director);

  const genre = document.createElement('p');
  genre.textContent = form.genre.value;
  filmListItem.appendChild(genre);

  return filmListItem;
}



const handleDeleteAllClick = function (event) {
  const filmList = document.querySelector('#film-list');
  filmList.innerHTML = '';
}
