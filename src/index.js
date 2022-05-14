import './css/styles.css';
import NewApiServise from './fetchCountries';
import markup from './markup.js';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;
const newApiServise = new NewApiServise();
console.log(debounce);
newApiServise.input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  if (e.target.value.trim() !== '') {
    newApiServise
      .fetchCountries(e.target.value.trim())
      .then(data => onSearchValidate(data))
      .catch(error => {
        console.log(error);
      });
  } else {
    newApiServise.listEl.innerHTML = '';
    newApiServise.infoEl.innerHTML = '';
  }
}

function onSearchValidate(data) {
  if (data.length > 10) {
    newApiServise.listEl.innerHTML = '';
    newApiServise.infoEl.innerHTML = '';
    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
  } else if (data.length === 1) {
    markup.createMarkup(data);
    markup.createDescriptionMarkup(data);
  } else {
    newApiServise.infoEl.innerHTML = '';
    markup.createMarkup(data);
  }
}
