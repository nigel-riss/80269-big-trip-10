import {EVENT_TYPES, CITIES, OFFERS} from '../const';
import {capitalizeFirstLetter, padWithZero} from '../utils';


/**
 * Returns event types list markup
 * @param {Object} eventTypes evet types object
 * @param {String} currentType current event type
 * @return {String} event types list markup
 */
const createEventTypeListMarkup = (eventTypes, currentType) => {
  const eventTypesGroups = Object.values(eventTypes);

  return eventTypesGroups
    .map((eventTypeGroup) => {
      const typesList = eventTypeGroup.types
        .map((type) => {
          return (
            `<div class="event__type-item">
              <input
                id="event-type-${type}-1"
                class="event__type-input  visually-hidden" 
                type="radio"
                name="event-type"
                value="${type}"
                ${type === currentType ? `checked` : ``}
              >
              <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${capitalizeFirstLetter(type)}</label>
            </div>`
          );
        })
        .join(``);

      return (
        `<fieldset class="event__type-group">
          <legend class="visually-hidden">Transfer</legend>

          ${typesList}
        </fieldset>`
      );
    })
    .join(``);
};


/**
 * Returns destinations options markup
 * @param {Array} cities array of city names
 * @return {String} options markup
 */
const createDesinationOptionsMarkup = (cities) => {
  return cities
    .map((city) => {
      return `<option value="${city}"></option>`;
    })
    .join(``);
};


/**
 * Returns offers markup
 * @param {Array} offers array or offer objects
 * @param {Array} selectedOffers array of selected offer objects
 * @return {String} offers markup
 */
const createOffersMarkup = (offers, selectedOffers) => {
  const selectedOffersTypes = selectedOffers.map((offer) => {
    return offer.type;
  });

  return offers
    .map((offer) => {
      const {type, name, price} = offer;
      return (
        `<div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden"
            id="event-offer-${type}-1"
            type="checkbox"
            name="event-offer-${type}"
            ${selectedOffersTypes.indexOf(type) > -1 ? `checked` : ``}
          >
          <label class="event__offer-label" for="event-offer-${type}-1">
            <span class="event__offer-title">${name}</span>
            &plus;
            &euro;&nbsp;<span class="event__offer-price">${price}</span>
          </label>
        </div>`
      );
    })
    .join(``);
};


/**
 * Returns photos markup
 * @param {Array} photos array of photo URLs
 * @return {String} photos markup
 */
const createPhotosMarkup = (photos) => {
  return photos
    .map((photoURL) => {
      return `<img class="event__photo" src="${photoURL}" alt="Event photo">`;
    })
    .join(``);
};


/**
 * Creates Trip Event edit template
 * @param {Object} tripEvent trip event object
 * @return {string} trip event edit markup
 */
const createTripEventEditTemplate = (tripEvent) => {
  const {
    type,
    preposition,
    destination,
    dateFrom,
    dateTo,
    price,
    offers,
    description,
    photos,
  } = tripEvent;

  const eventTypeList = createEventTypeListMarkup(EVENT_TYPES, type);
  const destinationOptions = createDesinationOptionsMarkup(CITIES);
  const timeFrom = `${padWithZero(dateFrom.getHours())}:${padWithZero(dateFrom.getMinutes())}`;
  const timeTo = `${padWithZero(dateTo.getHours())}:${padWithZero(dateTo.getMinutes())}`;
  const dateTimeFrom = `${padWithZero(dateFrom.getDate())}/${padWithZero(dateFrom.getMonth())}/${dateFrom.getFullYear().toString().substr(-2)} ${timeFrom}`;
  const dateTimeTo = `${padWithZero(dateTo.getDate())}/${padWithZero(dateTo.getMonth())}/${dateTo.getFullYear().toString().substr(-2)} ${timeTo}`;
  const offersMarkup = createOffersMarkup(OFFERS, offers);
  const photosMarkup = createPhotosMarkup(photos);

  return (
    `<li class="trip-events__item">
      <form class="event  event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            <div class="event__type-list">
              ${eventTypeList}
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${capitalizeFirstLetter(type)} ${preposition}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination}" list="destination-list-1">
            <datalist id="destination-list-1">
              ${destinationOptions}
            </datalist>
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">
              From
            </label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dateTimeFrom}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">
              To
            </label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dateTimeTo}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Delete</button>

          <input id="event-favorite-1" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite" checked>
          <label class="event__favorite-btn" for="event-favorite-1">
            <span class="visually-hidden">Add to favorite</span>
            <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
              <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
            </svg>
          </label>

          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>

        <section class="event__details">

          <section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>

            <div class="event__available-offers">
              ${offersMarkup}
            </div>
          </section>

          <section class="event__section  event__section--destination">
            <h3 class="event__section-title  event__section-title--destination">Destination</h3>
            <p class="event__destination-description">${description}</p>

            <div class="event__photos-container">
              <div class="event__photos-tape">
                ${photosMarkup}
              </div>
            </div>
          </section>
        </section>
      </form>
    </li>`
  );
};

export {createTripEventEditTemplate};
