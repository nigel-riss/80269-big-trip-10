// Importing components
import {createTripInfoTemplate} from './components/trip-info';
import {createMenuTemplate} from './components/menu';
import {createFiltersTemplate} from './components/filters';
import {createEventsSortTemplate} from './components/events-sort';
import {createNewEventTemplate} from './components/new-event';
import {createTripEventTemplate} from './components/trip-event';

// Importing mocks
import {generateTripEvent} from './mock/trip-event';

// Importing utility functions
import {renderElement} from './utils';

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
renderElement(tripEvents, createTripEventTemplate(generateTripEvent()));
