import AbstractComponent from "./abstract-component";

/**
 * Creates Trip Events container template
 * @return {string}
 */
const createTripEventsTemplate = () => {
  return (
    `<section class="trip-events">
      <h2 class="visually-hidden">Trip events</h2>
    </section>`
  );
};

export default class TripEvents extends AbstractComponent {
  getTemplate() {
    return createTripEventsTemplate();
  }
}
