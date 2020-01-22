import EventsSortComponent from '../components/events-sort';
import TripDaysComponent from '../components/trip-days';
import TripEventEditComponent from '../components/trip-event-edit';
import TripEventComponent from '../components/trip-event';
import NoTripEventsComponent from '../components/no-trip-events';

// Importing utility functions
import {renderElement, RenderPosition} from '../utils';

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
  tripEventComponent.setRollupButtonClickHandler(() => {
    replaceTripEventToEdit();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  const tripEventEditComponent = new TripEventEditComponent(tripEvent);
  tripEventEditComponent.setSubmitHandler(() => {
    replaceEditToTripEvent();
  });
  tripEventEditComponent.setRollupButtonClickHandler(() => {
    replaceEditToTripEvent();
  });

  renderElement(tripDaysList, tripEventComponent.getElement(), RenderPosition.BEFOREEND);
};

export default class TripController {
  constructor(container) {
    this._container = container;
  }

  render(tripEvents) {
    const container = this._container.getElement();

    if (tripEvents.length === 0) {
      renderElement(container, new NoTripEventsComponent().getElement(), RenderPosition.BEFOREEND);
    } else {
      // Adding trip events sorting
      renderElement(container, new EventsSortComponent().getElement(), RenderPosition.BEFOREEND);

      // Adding trip days list
      const tripDaysList = new TripDaysComponent().getElement();
      renderElement(tripEventsContainer, tripDaysList, RenderPosition.BEFOREEND);

      // Adding trip events
      // TODO: Add appropriate event addition (days-list => day => trip-event)
      tripEvents.forEach((tripEvent) => {
        renderTripEvent(tripDaysList, tripEvent);
      });
    }
  }
}
