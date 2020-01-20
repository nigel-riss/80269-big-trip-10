// Importing components
import TripInfoComponent from './components/trip-info';
import MenuComponent from './components/menu';
import FiltersComponent from './components/filters';
import EventsSortComponent from './components/events-sort';
import TripDaysComponent from './components/trip-days';
import TripEventEditComponent from './components/trip-event-edit';
import TripEventComponent from './components/trip-event';
import NoTripEventsComponent from './components/no-trip-events';

// Importing mocks
import {generateTripEvents} from './mock/trip-event';
import {FILTERS} from './mock/filters';

// Importing utility functions
import {renderElement, RenderPosition} from './utils';


const TRIP_EVENTS_NUMBER = 4;


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

  const tripEventComponent = new TripEventComponent(tripEvent);
  const editButton = tripEventComponent.getElement().querySelector(`.event__rollup-btn`);
  editButton.addEventListener(`click`, () => {
    replaceTripEventToEdit();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  const tripEventEditComponent = new TripEventEditComponent(tripEvent);
  const editForm = tripEventEditComponent.getElement().querySelector(`form`);
  editForm.addEventListener(`submit`, () => {
    replaceEditToTripEvent();
  });

  renderElement(tripDaysList, tripEventComponent.getElement(), RenderPosition.BEFOREEND);
};


const tripEvents = generateTripEvents(TRIP_EVENTS_NUMBER);
tripEvents.sort((a, b) => a.dateFrom - b.dateFrom);

// Adding trip information
const tripInfoContainer = document.querySelector(`.trip-main`);
renderElement(tripInfoContainer, new TripInfoComponent(tripEvents).getElement(), RenderPosition.AFTERBEGIN);

// Adding trip controls
const tripControls = document.querySelector(`.trip-main__trip-controls`);
renderElement(tripControls, new MenuComponent().getElement(), RenderPosition.BEFOREEND); // TODO: Place after appropriate h2
renderElement(tripControls, new FiltersComponent(FILTERS).getElement(), RenderPosition.BEFOREEND);

const tripEventsContainer = document.querySelector(`.trip-events`);

if (tripEvents.length === 0) {
  renderElement(tripEventsContainer, new NoTripEventsComponent().getElement(), RenderPosition.BEFOREEND);
} else {
  // Adding trip events sorting
  renderElement(tripEventsContainer, new EventsSortComponent().getElement(), RenderPosition.BEFOREEND);

  // Adding trip days list
  const tripDaysList = new TripDaysComponent().getElement();
  renderElement(tripEventsContainer, tripDaysList, RenderPosition.BEFOREEND);

  // Adding trip events
  // TODO: Add appropriate event addition (days-list => day => trip-event)
  tripEvents.forEach((tripEvent) => {
    renderTripEvent(tripDaysList, tripEvent);
  });
}
