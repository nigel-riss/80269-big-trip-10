// Importing components
import TripInfoComponent from './components/trip-info';
import MenuComponent from './components/menu';
import FiltersComponent from './components/filters';
// import {createEventsSortTemplate} from './components/events-sort';
// import {createTripDaysListTemplate} from './components/trip-days';
// import {createTripEventEditTemplate} from './components/trip-event-edit';
// import {createTripEventTemplate} from './components/trip-event';

// Importing mocks
import {generateTripEvents} from './mock/trip-event';
import {FILTERS} from './mock/filters';

// Importing utility functions
import {renderElement, RenderPosition} from './utils';

const TRIP_EVENTS_NUMBER = 4;
const tripEvents = generateTripEvents(TRIP_EVENTS_NUMBER);
tripEvents.sort((a, b) => a.dateFrom - b.dateFrom);


// Adding trip information
const tripInfoContainer = document.querySelector(`.trip-main`);
renderElement(tripInfoContainer, new TripInfoComponent(tripEvents).getElement(), RenderPosition.AFTERBEGIN);

// Adding trip controls
const tripControls = document.querySelector(`.trip-main__trip-controls`);
renderElement(tripControls, new MenuComponent().getElement(), RenderPosition.BEFOREEND);
renderElement(tripControls, new FiltersComponent(FILTERS).getElement(), RenderPosition.BEFOREEND);

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
