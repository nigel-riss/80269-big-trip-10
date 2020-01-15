// Importing components
import TripInfoComponent from './components/trip-info';
import MenuComponent from './components/menu';
import FiltersComponent from './components/filters';
import EventsSortComponent from './components/events-sort';
import TripDaysComponent from './components/trip-days';
import TripEventEditComponent from './components/trip-event-edit';
import TripEventComponent from './components/trip-event';

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
renderElement(tripControls, new MenuComponent().getElement(), RenderPosition.BEFOREEND); // TODO: Place after appropriate h2
renderElement(tripControls, new FiltersComponent(FILTERS).getElement(), RenderPosition.BEFOREEND);

// Adding trip events sorting
const tripEventsContainer = document.querySelector(`.trip-events`);
renderElement(tripEventsContainer, new EventsSortComponent().getElement(), RenderPosition.BEFOREEND);

// Adding trip days list
const tripDaysList = new TripDaysComponent().getElement();
renderElement(tripEventsContainer, tripDaysList, RenderPosition.BEFOREEND);

// Adding trip events
// TODO: Add appropriate 
tripEvents.forEach((tripEvent, i) => {
  if (i === 0) {
    renderElement(tripDaysList, new TripEventEditComponent(tripEvent).getElement(), RenderPosition.BEFOREEND);
  } else {
    renderElement(tripDaysList, new TripEventComponent(tripEvent).getElement(), RenderPosition.BEFOREEND);
  }
});
