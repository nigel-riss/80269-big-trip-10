import {capitalizeFirstLetter, createElement} from '../utils';


/**
 * Returns filter markup
 * @param {String} filter filter name
 * @param {Boolean} isChecked if filter is checked
 * @return {String} filter markup
 */
const createFilterMarkup = (filter, isChecked) => {
  return (
    `<div class="trip-filters__filter">
      <input 
        id="filter-${filter}"
        class="trip-filters__filter-input  visually-hidden"
        type="radio"
        name="trip-filter"
        value="${filter}"
        ${isChecked ? `checked` : ``}
      >
      <label class="trip-filters__filter-label" for="filter-${filter}">${capitalizeFirstLetter(filter)}</label>
    </div>`
  );
};


/**
 * Creates Filters template
 * @param {Array} filters array of filter names
 * @return {String} filters template
 */
const createFiltersTemplate = (filters) => {
  const filtersMarkup = filters
    .map((filter, i) => {
      return createFilterMarkup(filter, i === 0);
    })
    .join(``);

  return (
    `<h2 class="visually-hidden">Filter events</h2>

    <form class="trip-filters" action="#" method="get">
      ${filtersMarkup}

      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
};

export default class Filters {
  constructor(filters) {
    this._filters = filters;

    this._element = null;
  }

  getTemplate() {
    return createFiltersTemplate(this._filters);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
