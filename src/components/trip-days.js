import AbstractComponent from "./abstract-component";

/**
 * Creates Trip Days list template
 * @return {string}
 */
const createTripDaysListTemplate = () => {
  return (
    `<ul class="trip-days"></ul>`
  );
};

export default class TripDaysList extends AbstractComponent {
  getTemplate() {
    return createTripDaysListTemplate();
  }
}
