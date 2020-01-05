import {createTripInfoTemplate} from './components/trip-info';
import {createMenuTemplate} from './components/menu';
import {createFiltersTemplate} from './components/filters';
import {createEventsSortTemplate} from './components/events-sort';
import {createNewEventTemplate} from './components/new-event';
import {createEventTemplate} from './components/event';

/**
 * Renders HTML markup into an exact place of HTML element
 * @param {HTMLElement} parentElement element in which to render HTML markup
 * @param {string} elementMarkup HTML markup to render
 * @param {string} place place in element to place HTML markup
 */
const renderElement = (parentElement, elementMarkup, place = `beforeend`) => {
  parentElement.insertAdjacentHTML(place, elementMarkup);
};

// Adding trip information
const tripInfoContainer = document.querySelector(`.trip-main__trip-info`);
renderElement(tripInfoContainer, createTripInfoTemplate(), `afterbegin`);

// Adding trip controls
const tripControls = document.querySelector(`.trip-main__trip-controls`);
renderElement(tripControls, createMenuTemplate());
renderElement(tripControls, createFiltersTemplate());

const tripEvents = document.querySelector(`.trip-events`);
renderElement(tripEvents, createEventsSortTemplate());

renderElement(tripEvents, createNewEventTemplate());
renderElement(tripEvents, createEventTemplate());
renderElement(tripEvents, createEventTemplate());
renderElement(tripEvents, createEventTemplate());
