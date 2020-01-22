// Importing components
import TripInfoComponent from './components/trip-info';
import MenuComponent from './components/menu';
import FiltersComponent from './components/filters';
import TripDaysComponent from './components/trip-days';

// Importing controllers
import TripController from './controllers/trip';

// Importing mocks
import {generateTripEvents} from './mock/trip-event';
import {FILTERS} from './mock/filters';

// Importing utility functions
import {renderElement, RenderPosition} from './utils';


const TRIP_EVENTS_NUMBER = 4;

const tripEvents = generateTripEvents(TRIP_EVENTS_NUMBER);

// Adding trip information
const tripInfoContainer = document.querySelector(`.trip-main`);
renderElement(tripInfoContainer, new TripInfoComponent(tripEvents).getElement(), RenderPosition.AFTERBEGIN);
// Adding trip controls
const tripControls = document.querySelector(`.trip-main__trip-controls`);
renderElement(tripControls, new MenuComponent().getElement(), RenderPosition.BEFOREEND); // TODO: Place after appropriate h2
renderElement(tripControls, new FiltersComponent(FILTERS).getElement(), RenderPosition.BEFOREEND);

// Trip Events container
const tripEventsContainer = document.querySelector(`.trip-events`);
const tripDaysComponent = new TripDaysComponent();
renderElement(tripEventsContainer, tripDaysComponent.getElement(), RenderPosition.BEFOREEND);

const tripController = new TripController(tripDaysComponent);
tripController.render(tripEvents);
