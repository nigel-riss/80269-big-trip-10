import {createElement} from '../utils';
import {capitalizeFirstLetter, getDurationString, padWithZero} from "../utils";


/**
 * Returns offers list items markup
 * @param {Array} offers array of offers
 * @return {String} offers markup
 */
const createOffersMarkup = (offers) => {
  return offers
    .map((offer) => {
      return (
        `<li class="event__offer">
          <span class="event__offer-title">${offer.name}</span>
          &plus;
          &euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
        </li>`
      );
    })
    .join(``);
};


/**
 * Creates Trip Event template
 * @param {Object} tripEvent trip event object
 * @return {string} trip event markup
 */
const createTripEventTemplate = (tripEvent) => {
  const {
    type,
    preposition,
    destination,
    dateFrom,
    dateTo,
    price,
    offers,
  } = tripEvent;

  const timeFrom = `${padWithZero(dateFrom.getHours())}:${padWithZero(dateFrom.getMinutes())}`;
  const timeTo = `${padWithZero(dateTo.getHours())}:${padWithZero(dateTo.getMinutes())}`;
  const dateTimeFrom = `${dateFrom.getFullYear()}-${padWithZero(dateFrom.getMonth())}-${padWithZero(dateFrom.getDate())}T${timeFrom}`;
  const dateTimeTo = `${dateTo.getFullYear()}-${padWithZero(dateTo.getMonth())}-${padWithZero(dateTo.getDate())}T${timeTo}`;
  const eventDuration = getDurationString(dateFrom, dateTo);
  const offersMarkup = createOffersMarkup(offers);

  return (
    `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${capitalizeFirstLetter(type)} ${preposition} ${destination}</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${dateTimeFrom}">${timeFrom}</time>
            &mdash;
            <time class="event__end-time" datetime="${dateTimeTo}">${timeTo}</time>
          </p>
          <p class="event__duration">${eventDuration}</p>
        </div>

        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${price}</span>
        </p>

        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${offersMarkup}
        </ul>

        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
};


export default class TripEvent {
  constructor(tripEvent) {
    this._tripEvent = tripEvent;

    this._element = null;
  }

  getTemplate() {
    return createTripEventTemplate(this._tripEvent);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
  }

  removeElement() {
    this._element = null;
  }
}
