/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/abstract-component.js":
/*!**********************************************!*\
  !*** ./src/components/abstract-component.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractComponent; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error(`Can't instantiate AbstractComponent, only concrete one.`);
    }

    this._element = null;
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/components/events-sort.js":
/*!***************************************!*\
  !*** ./src/components/events-sort.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EvensSort; });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");


/**
 * Creates Trip Events Sort form template
 * @return {string}
 */
const createEventsSortTemplate = () => {
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      <span class="trip-sort__item  trip-sort__item--day">Day</span>

      <div class="trip-sort__item  trip-sort__item--event">
        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" checked>
        <label class="trip-sort__btn" for="sort-event">Event</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--time">
        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
        <label class="trip-sort__btn" for="sort-time">
          Time
          <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
            <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
          </svg>
        </label>
      </div>

      <div class="trip-sort__item  trip-sort__item--price">
        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
        <label class="trip-sort__btn" for="sort-price">
          Price
          <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
            <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
          </svg>
        </label>
      </div>

      <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
    </form>`
  );
};


class EvensSort extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createEventsSortTemplate();
  }
}


/***/ }),

/***/ "./src/components/filters.js":
/*!***********************************!*\
  !*** ./src/components/filters.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filters; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");




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
      <label class="trip-filters__filter-label" for="filter-${filter}">${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["capitalizeFirstLetter"])(filter)}</label>
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

class Filters extends _abstract_component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(filters) {
    super();

    this._filters = filters;
  }

  getTemplate() {
    return createFiltersTemplate(this._filters);
  }
}


/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");


/**
 * Creates Main Menu template
 * @return {string}
 */
const createMenuTemplate = () => {
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
      <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
      <a class="trip-tabs__btn" href="#">Stats</a>
    </nav>`
  );
};


class Menu extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createMenuTemplate();
  }
}


/***/ }),

/***/ "./src/components/no-trip-events.js":
/*!******************************************!*\
  !*** ./src/components/no-trip-events.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoTripEvents; });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");


/**
 * Creates no events message template
 * @return {string}
 */
const createNoTripEventsTemplate = () => {
  return (
    `<p class="trip-events__msg">Click New Event to create your first point</p>`
  );
};

class NoTripEvents extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createNoTripEventsTemplate();
  }
}


/***/ }),

/***/ "./src/components/trip-days.js":
/*!*************************************!*\
  !*** ./src/components/trip-days.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripDaysList; });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");


/**
 * Creates Trip Days list template
 * @return {string}
 */
const createTripDaysListTemplate = () => {
  return (
    `<ul class="trip-days"></ul>`
  );
};

class TripDaysList extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createTripDaysListTemplate();
  }
}


/***/ }),

/***/ "./src/components/trip-event-edit.js":
/*!*******************************************!*\
  !*** ./src/components/trip-event-edit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripEventEdit; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");





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
              <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["capitalizeFirstLetter"])(type)}</label>
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

  const eventTypeList = createEventTypeListMarkup(_const__WEBPACK_IMPORTED_MODULE_0__["EVENT_TYPES"], type);
  const destinationOptions = createDesinationOptionsMarkup(_const__WEBPACK_IMPORTED_MODULE_0__["CITIES"]);
  const timeFrom = `${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["padWithZero"])(dateFrom.getHours())}:${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["padWithZero"])(dateFrom.getMinutes())}`;
  const timeTo = `${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["padWithZero"])(dateTo.getHours())}:${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["padWithZero"])(dateTo.getMinutes())}`;
  const dateTimeFrom = `${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["padWithZero"])(dateFrom.getDate())}/${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["padWithZero"])(dateFrom.getMonth())}/${dateFrom.getFullYear().toString().substr(-2)} ${timeFrom}`;
  const dateTimeTo = `${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["padWithZero"])(dateTo.getDate())}/${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["padWithZero"])(dateTo.getMonth())}/${dateTo.getFullYear().toString().substr(-2)} ${timeTo}`;
  const offersMarkup = createOffersMarkup(_const__WEBPACK_IMPORTED_MODULE_0__["OFFERS"], offers);
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
              ${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["capitalizeFirstLetter"])(type)} ${preposition}
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


class TripEventEdit extends _abstract_component__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(tripEvent) {
    super();

    this._tripEvent = tripEvent;
  }

  getTemplate() {
    return createTripEventEditTemplate(this._tripEvent);
  }

  setSubmitHandler(handler) {
    this.getElement().querySelector(`form`)
      .addEventListener(`submit`, handler);
  }

  setRollupButtonClickHandler(handler) {
    this.getElement().querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, handler);
  }
}


/***/ }),

/***/ "./src/components/trip-event.js":
/*!**************************************!*\
  !*** ./src/components/trip-event.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripEvent; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");




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

  const timeFrom = `${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["padWithZero"])(dateFrom.getHours())}:${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["padWithZero"])(dateFrom.getMinutes())}`;
  const timeTo = `${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["padWithZero"])(dateTo.getHours())}:${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["padWithZero"])(dateTo.getMinutes())}`;
  const dateTimeFrom = `${dateFrom.getFullYear()}-${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["padWithZero"])(dateFrom.getMonth())}-${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["padWithZero"])(dateFrom.getDate())}T${timeFrom}`;
  const dateTimeTo = `${dateTo.getFullYear()}-${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["padWithZero"])(dateTo.getMonth())}-${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["padWithZero"])(dateTo.getDate())}T${timeTo}`;
  const eventDuration = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getDurationString"])(dateFrom, dateTo);
  const offersMarkup = createOffersMarkup(offers);

  return (
    `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["capitalizeFirstLetter"])(type)} ${preposition} ${destination}</h3>

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


class TripEvent extends _abstract_component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(tripEvent) {
    super();

    this._tripEvent = tripEvent;
  }

  getTemplate() {
    return createTripEventTemplate(this._tripEvent);
  }

  setRollupButtonClickHandler(handler) {
    this.getElement().querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, handler);
  }
}


/***/ }),

/***/ "./src/components/trip-info.js":
/*!*************************************!*\
  !*** ./src/components/trip-info.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripInfo; });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");


/**
 * Returns a markup of event cities
 * TODO: Fix calculations here
 * @param {Array} cities array of event cities
 * @return {String} cities markup
 */
const createCitiesMarkup = (cities) => {
  cities = Array.from(new Set(cities));

  if (cities.length > 3) {
    return `${cities[0]} &mdash; ... &mdash; ${cities[cities.length - 1]}`;
  } else {
    return cities.join(` &mdash; `);
  }
};


// const createDatesMarkup = (events) => {
const createDatesMarkup = () => {
  return `Mar 11&nbsp;&mdash;&nbsp;23`;
};


/**
 * Returns full trip price including offers
 * @param {Array} events array of trip events
 * @return {Number} full trip price
 */
const calculateFullPrice = (events) => {
  return events
    .reduce((fullPrice, event) => {
      return fullPrice + event.price + event.offers.reduce((offersPrice, offer) => {
        return offersPrice + offer.price;
      }, 0);
    }, 0);
};


/**
 * Creates Trip Info template
 * @param {Array} events array of trip events
 * @return {string}
 */
const createTripInfoTemplate = (events) => {
  const tempEvents = [...events];
  tempEvents.sort((a, b) => a.dateFrom - b.dateFrom);
  const cities = tempEvents.map((event) => event.destination);

  const citiesMarkup = createCitiesMarkup(cities);
  const datesMarkup = createDatesMarkup(events);
  const fullPrice = calculateFullPrice(events);

  return (
    `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${citiesMarkup}</h1>

        <p class="trip-info__dates">${datesMarkup}</p>
      </div>

      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">${fullPrice}</span>
      </p>
    </section>`
  );
};


class TripInfo extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(events) {
    super();

    this._events = events;
  }

  getTemplate() {
    return createTripInfoTemplate(this._events);
  }
}


/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: EVENT_TYPES, CITIES, DESCRIPTIONS, OFFERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_TYPES", function() { return EVENT_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CITIES", function() { return CITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESCRIPTIONS", function() { return DESCRIPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OFFERS", function() { return OFFERS; });
const EVENT_TYPES = {
  transfer: {
    types: [
      `taxi`,
      `bus`,
      `train`,
      `ship`,
      `transport`,
      `drive`,
      `flight`,
    ],
    preposition: `to`,
  },
  activity: {
    types: [
      `check-in`,
      `sightseeing`,
      `restaurant`
    ],
    preposition: `in`
  },
};

const CITIES = [
  `Geneva`,
  `Chamonix`,
  `Amsterdam`,
  `London`,
  `Berlin`,
  `Dublin`,
  `Paris`,
  `Oslo`,
  `Rome`,
  `Warsaw`,
  `Riga`,
  `Budapest`,
  `Reykjavik`,
  `Ljubljana`,
  `Edinburgh`,
  `Minsk`,
  `Kyiv`,
  `Moscow`,
];

const DESCRIPTIONS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`,
];

const OFFERS = [
  {
    type: `luggage`,
    name: `Add luggage`,
    price: 10,
  },
  {
    type: `comfort`,
    name: `Switch to comfort class`,
    price: 150,
  },
  {
    type: `meal`,
    name: `Add meal`,
    price: 2,
  },
  {
    type: `seats`,
    name: `Choose seats`,
    price: 9,
  },
];


/***/ }),

/***/ "./src/controllers/trip.js":
/*!*********************************!*\
  !*** ./src/controllers/trip.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripController; });
/* harmony import */ var _components_events_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/events-sort */ "./src/components/events-sort.js");
/* harmony import */ var _components_trip_days__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/trip-days */ "./src/components/trip-days.js");
/* harmony import */ var _components_trip_event_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/trip-event-edit */ "./src/components/trip-event-edit.js");
/* harmony import */ var _components_trip_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/trip-event */ "./src/components/trip-event.js");
/* harmony import */ var _components_no_trip_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/no-trip-events */ "./src/components/no-trip-events.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils.js");






// Importing utility functions


const renderTripEvent = (tripDaysList, tripEvent) => {
  const onEscKeyDown = (evt) => {
    const isEscKeyDown = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKeyDown) {
      replaceEditToTripEvent();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  const replaceTripEventToEdit = () => {
    tripDaysList.replaceChild(tripEventEditComponent.getElement(), tripEventComponent.getElement());
  };

  const replaceEditToTripEvent = () => {
    tripDaysList.replaceChild(tripEventComponent.getElement(), tripEventEditComponent.getElement());
  };

  const tripEventComponent = new _components_trip_event__WEBPACK_IMPORTED_MODULE_3__["default"](tripEvent);
  tripEventComponent.setRollupButtonClickHandler(() => {
    replaceTripEventToEdit();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  const tripEventEditComponent = new _components_trip_event_edit__WEBPACK_IMPORTED_MODULE_2__["default"](tripEvent);
  tripEventEditComponent.setSubmitHandler(() => {
    replaceEditToTripEvent();
  });
  tripEventEditComponent.setRollupButtonClickHandler(() => {
    replaceEditToTripEvent();
  });

  Object(_utils__WEBPACK_IMPORTED_MODULE_5__["renderElement"])(tripDaysList, tripEventComponent.getElement(), _utils__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);
};

class TripController {
  constructor(container) {
    this._container = container;
  }

  render(tripEvents) {
    const container = this._container.getElement();

    if (tripEvents.length === 0) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["renderElement"])(container, new _components_no_trip_events__WEBPACK_IMPORTED_MODULE_4__["default"]().getElement(), _utils__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);
    } else {
      // Adding trip events sorting
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["renderElement"])(container, new _components_events_sort__WEBPACK_IMPORTED_MODULE_0__["default"]().getElement(), _utils__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);

      // Adding trip days list
      const tripDaysList = new _components_trip_days__WEBPACK_IMPORTED_MODULE_1__["default"]().getElement();
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["renderElement"])(container, tripDaysList, _utils__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);

      // Adding trip events
      // TODO: Add appropriate event addition (days-list => day => trip-event)
      tripEvents.forEach((tripEvent) => {
        renderTripEvent(tripDaysList, tripEvent);
      });
    }
  }
}


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_trip_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/trip-info */ "./src/components/trip-info.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu */ "./src/components/menu.js");
/* harmony import */ var _components_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/filters */ "./src/components/filters.js");
/* harmony import */ var _components_trip_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/trip-event */ "./src/components/trip-event.js");
/* harmony import */ var _controllers_trip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/trip */ "./src/controllers/trip.js");
/* harmony import */ var _mock_trip_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mock/trip-event */ "./src/mock/trip-event.js");
/* harmony import */ var _mock_filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock/filters */ "./src/mock/filters.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
// Importing components





// Importing controllers


// Importing mocks



// Importing utility functions



const TRIP_EVENTS_NUMBER = 4;

const tripEvents = Object(_mock_trip_event__WEBPACK_IMPORTED_MODULE_5__["generateTripEvents"])(TRIP_EVENTS_NUMBER);

// Adding trip information
const tripInfoContainer = document.querySelector(`.trip-main`);
Object(_utils__WEBPACK_IMPORTED_MODULE_7__["renderElement"])(tripInfoContainer, new _components_trip_info__WEBPACK_IMPORTED_MODULE_0__["default"](tripEvents).getElement(), _utils__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].AFTERBEGIN);
// Adding trip controls
const tripControls = document.querySelector(`.trip-main__trip-controls`);
Object(_utils__WEBPACK_IMPORTED_MODULE_7__["renderElement"])(tripControls, new _components_menu__WEBPACK_IMPORTED_MODULE_1__["default"]().getElement(), _utils__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].BEFOREEND); // TODO: Place after appropriate h2
Object(_utils__WEBPACK_IMPORTED_MODULE_7__["renderElement"])(tripControls, new _components_filters__WEBPACK_IMPORTED_MODULE_2__["default"](_mock_filters__WEBPACK_IMPORTED_MODULE_6__["FILTERS"]).getElement(), _utils__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].BEFOREEND);

// Trip Events container
const tripEventsContainer = document.querySelector(`.page-body__container`);
const tripEventsComponent = new _components_trip_event__WEBPACK_IMPORTED_MODULE_3__["default"]();
Object(_utils__WEBPACK_IMPORTED_MODULE_7__["renderElement"])(tripEventsContainer, tripEventsComponent.getElement(), _utils__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].BEFOREEND);

const tripController = new _controllers_trip__WEBPACK_IMPORTED_MODULE_4__["default"](tripEventsComponent);
tripController.render(tripEvents);


/***/ }),

/***/ "./src/mock/filters.js":
/*!*****************************!*\
  !*** ./src/mock/filters.js ***!
  \*****************************/
/*! exports provided: FILTERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTERS", function() { return FILTERS; });
const FILTERS = [
  `everything`,
  `future`,
  `past`,
];


/***/ }),

/***/ "./src/mock/trip-event.js":
/*!********************************!*\
  !*** ./src/mock/trip-event.js ***!
  \********************************/
/*! exports provided: generateTripEvent, generateTripEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTripEvent", function() { return generateTripEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTripEvents", function() { return generateTripEvents; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");




/**
 * Returns an array of random photo urls
 * @return {Array} random photo urls
 */
const generatePhotos = () => {
  return new Array(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(1, 5))
    .fill(``)
    .map(() => {
      return `http://picsum.photos/300/150?r=${Math.random()}`;
    });
};


/**
 * Returns a date with a random diviation form 15 minutes to 3 days from given
 * @param {Date} dateFrom given date
 * @return {Date} generated date
 */
const generateDateTo = (dateFrom) => {
  // Random time diviation form 15 minutes to 2 days
  const deviationMS = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(15 * 60 * 1000, 2 * 24 * 60 * 60 * 1000);

  return new Date(dateFrom.valueOf() + deviationMS);
};


/**
 * Returns trip event object
 * @return {Object} trip event
 */
const generateTripEvent = () => {
  const activity = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayItem"])(Object.values(_const__WEBPACK_IMPORTED_MODULE_0__["EVENT_TYPES"]));

  const description = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getArrayOfRandomItems"])(_const__WEBPACK_IMPORTED_MODULE_0__["DESCRIPTIONS"], Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(1, 3)).join(` `);
  const dateFrom = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomDate"])(5);
  const offers = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getArrayOfRandomItems"])(_const__WEBPACK_IMPORTED_MODULE_0__["OFFERS"], Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 2));

  return {
    type: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayItem"])(activity.types),
    preposition: activity.preposition,
    destination: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayItem"])(_const__WEBPACK_IMPORTED_MODULE_0__["CITIES"]),
    photos: generatePhotos(),
    description,
    dateFrom,
    dateTo: generateDateTo(dateFrom),
    price: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(10, 200),
    offers,
  };
};


const generateTripEvents = (numberOfEvents) => {
  return new Array(numberOfEvents)
    .fill(``)
    .map(() => {
      return generateTripEvent();
    });
};




/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: RenderPosition, createElement, renderElement, getRandomInteger, getRandomArrayItem, getArrayOfRandomItems, getRandomDate, getDurationString, padWithZero, capitalizeFirstLetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderElement", function() { return renderElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomArrayItem", function() { return getRandomArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArrayOfRandomItems", function() { return getArrayOfRandomItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomDate", function() { return getRandomDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDurationString", function() { return getDurationString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padWithZero", function() { return padWithZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return capitalizeFirstLetter; });
const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};


/**
 * Returns HTMLElement from template string
 * @param {String} template HTML markup
 * @return {HTMLElement}
 */
const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};


/**
 * Renders HTMLElement into an exact place of another HTMLelement
 * @param {HTMLElement} container parent element in which to render
 * @param {HTMLElement} element child element to render
 * @param {String} place place in parent element to render child element
 */
const renderElement = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};


/**
 * Returns a random integer in a range
 * @param {Number} min minimal number (included)
 * @param {Number} max maximal number (included)
 * @return {Number} random number
 */
const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


/**
 * Returns random array element
 * @param {Array} array array
 * @return {*} random array element
 */
const getRandomArrayItem = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);

  return array[randomIndex];
};


const getArrayOfRandomItems = (array, number) => {
  const tempArray = [...array];
  const newArray = [];

  for (let i = 0; i < number; i++) {
    newArray.push(tempArray.splice(getRandomInteger(0, tempArray.length - 1), 1)[0]);
  }

  return newArray;
};


/**
 * Returns a date with a random limited deviation from current date
 * @param {Number} deviationDays deviation limit in days
 * @return {Date} random date
 */
const getRandomDate = (deviationDays) => {
  const randomDate = new Date();
  const deviationMS = deviationDays * 24 * 60 * 60 * 1000;

  randomDate.setTime(randomDate.getTime() + getRandomInteger(-deviationMS, deviationMS));

  return randomDate;
};


/**
 * Returns value in 2 digit zero padding format
 * @param {Number} value number to pad
 * @return {String} Zero padded value
 */
const padWithZero = (value) => {
  return value < 10 ? `0${value}` : String(value);
};


/**
 * Returns a string in format 00D 00H 00M
 * while skipping zero values
 * @param {Date} start start date
 * @param {Date} finish finish date
 * @return {String} formated string
 */
const getDurationString = (start, finish) => {
  const durationMinutes = (finish - start) / (60 * 1000);

  const minutes = Math.floor(durationMinutes % 60);
  const hours = Math.floor(durationMinutes / 60 % 24);
  const days = Math.floor(durationMinutes / 60 / 24);

  let formatedDuration = `${padWithZero(minutes)}M`;
  formatedDuration = (hours ? `${padWithZero(hours)}H ` : ``) + formatedDuration;
  formatedDuration = (days ? `${padWithZero(days)}D ` : ``) + formatedDuration;

  return formatedDuration;
};


/**
 * Returns a string with a first capital letter
 * @param {String} string string to capitalize
 * @return {String} string with first letter capitalized
 */
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};





/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map