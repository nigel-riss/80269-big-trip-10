import {capitalizeFirstLetter} from '../utils';
import AbstractComponent from './abstract-component';


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
    `<form class="trip-filters" action="#" method="get">
      ${filtersMarkup}

      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
};

export default class Filters extends AbstractComponent {
  constructor(filters) {
    super();

    this._filters = filters;
  }

  getTemplate() {
    return createFiltersTemplate(this._filters);
  }
}
