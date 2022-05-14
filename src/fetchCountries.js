import Notiflix from 'notiflix';
export default class NewApiServise {
  constructor() {
    this.input = document.querySelector('#search-box');
    this.listEl = document.querySelector('.country-list');
    this.infoEl = document.querySelector('.country-info');
  }

  fetchCountries(name) {
    return fetch(
      `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`,
    )
      .then(response => {
        if (!response.ok) {
          Notiflix.Notify.failure('Oops, there is no country with that name');
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => data)
      .catch(error => {
        console.log(error);
      });
  }
}
