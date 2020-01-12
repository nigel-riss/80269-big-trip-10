// Importing components
import {createTripInfoTemplate} from './components/trip-info';
import {createMenuTemplate} from './components/menu';
import {createFiltersTemplate} from './components/filters';
import {createEventsSortTemplate} from './components/events-sort';
import {createTripEventEditTemplate} from './components/trip-event-edit';
import {createTripEventTemplate} from './components/trip-event';

// Importing mocks
import {generateTripEvents, generateTripEvent} from './mock/trip-event';
import {FILTERS} from './mock/filters';

// Importing utility functions
import {renderElement} from './utils';


// Adding trip information
const tripInfoContainer = document.querySelector(`.trip-main__trip-info`);
renderElement(tripInfoContainer, createTripInfoTemplate(), `afterbegin`);

// Adding trip controls
const tripControls = document.querySelector(`.trip-main__trip-controls`);
renderElement(tripControls, createMenuTemplate());
renderElement(tripControls, createFiltersTemplate(FILTERS));

const tripEventsContainer = document.querySelector(`.trip-events`);
renderElement(tripEventsContainer, createEventsSortTemplate());


renderElement(tripEventsContainer, createTripEventEditTemplate(generateTripEvent()));

const tripEvents = generateTripEvents(4);
tripEvents.forEach((tripEvent) => {
  renderElement(tripEventsContainer, createTripEventTemplate(tripEvent));
});
