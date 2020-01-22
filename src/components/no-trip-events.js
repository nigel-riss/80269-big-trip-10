import AbstractComponent from "./abstract-component";

/**
 * Creates no events message template
 * @return {string}
 */
const createNoTripEventsTemplate = () => {
  return (
    `<p class="trip-events__msg">Click New Event to create your first point</p>`
  );
};

export default class NoTripEvents extends AbstractComponent {
  getTemplate() {
    return createNoTripEventsTemplate();
  }
}
