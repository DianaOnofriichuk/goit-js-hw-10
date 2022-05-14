import NewApiServise from './fetchCountries';
const newApiServise = new NewApiServise();
const markup = {
  createMarkup(countries) {
    const markup = countries
      .map(country => {
        return `<li>
        <div class="country-container">
      <img
    src=${country.flags.svg}
    width=35px; height=20px;/>&nbsp
    <p class="country-title">${country.name.official}</p>
    </div>
        </li>`;
      })
      .join('');
    newApiServise.listEl.innerHTML = markup;
  },

  createDescriptionMarkup(countries) {
    const description = countries
      .map(country => {
        return `<p class="description-title"> Capital: <span class="description-text">${
          country.capital
        }</span> </p>
        <p class="description-title"> Population: <span class="description-text">${
          country.population
        }</span> </p>
        <p class="description-title"> Languages: <span class="description-text">${Object.values(
          country.languages,
        )}</span> </p>`;
      })
      .join('');
    newApiServise.infoEl.innerHTML = description;
  },
};
export default markup;
