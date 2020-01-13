// Importing components
import {createTripInfoTemplate} from './components/trip-info';
import {createMenuTemplate} from './components/menu';
import {createFiltersTemplate} from './components/filters';
import {createEventsSortTemplate} from './components/events-sort';
import {createTripDaysListTemplate} from './components/trip-days';
import {createTripEventEditTemplate} from './components/trip-event-edit';
import {createTripEventTemplate} from './components/trip-event';

// Importing mocks
import {generateTripEvents} from './mock/trip-event';
import {FILTERS} from './mock/filters';

// Importing utility functions
import {renderElement, RenderPosition} from './utils';

const TRIP_EVENTS_NUMBER = 4;

const tripEvents = generateTripEvents(TRIP_EVENTS_NUMBER);
tripEvents.sort((a, b) => a.dateFrom - b.dateFrom);

// Adding trip information
const tripInfoContainer = document.querySelector(`.trip-main__trip-info`);
renderElement(tripInfoContainer, createTripInfoTemplate(tripEvents), `afterbegin`);

// Adding trip controls
const tripControls = document.querySelector(`.trip-main__trip-controls`);
renderElement(tripControls, createMenuTemplate());
renderElement(tripControls, createFiltersTemplate(FILTERS));

// Adding trip events sorting
const tripEventsContainer = document.querySelector(`.trip-events`);
renderElement(tripEventsContainer, createEventsSortTemplate());

// Adding trip days list
renderElement(tripEventsContainer, createTripDaysListTemplate());

// Adding trip events
const tripDaysList = document.querySelector(`.trip-days`);
tripEvents.forEach((tripEvent, i) => {
  if (i === 0) {
    renderElement(tripDaysList, createTripEventEditTemplate(tripEvent));
  } else {
    renderElement(tripDaysList, createTripEventTemplate(tripEvent));
  }
});
