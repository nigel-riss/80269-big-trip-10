/**
 * Returns a markup of event cities
 * TODO: Fix calculations here
 * @param {Array} cities array of event cities
 * @return {String} cities markup
 */
const createCitiesMarkup = (cities) => {
  cities = Array.from(new Set(cities));

  if (cities.length > 3) {
    return `${cities[0]} &mdash; ... &mdash; ${cities[cities.length - 1]}`;
  } else {
    return cities.join(` &mdash; `);
  }
};


const createDatesMarkup = (events) => {
  return `Mar 11&nbsp;&mdash;&nbsp;23`;
};


const calculateFullPrice = (events) => {
  return events
    .reduce((fullPrice, event) => {
      return fullPrice + event.price + event.offers.reduce((offersPrice, offer) => {
        return offersPrice + offer.price;
      }, 0);
    }, 0);
};


/**
 * Creates Trip Info template
 * @param {Array} events array of trip events
 * @return {string}
 */
const createTripInfoTemplate = (events) => {
  const tempEvents = [...events];
  tempEvents.sort((a, b) => a.dateFrom - b.dateFrom);
  const cities = tempEvents.map((event) => event.destination);

  const citiesMarkup = createCitiesMarkup(cities);
  const datesMarkup = createDatesMarkup(events);
  const fullPrice = calculateFullPrice(events);

  return (
    `<div class="trip-info__main">
      <h1 class="trip-info__title">${citiesMarkup}</h1>

      <p class="trip-info__dates">${datesMarkup}</p>
    </div>

    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${fullPrice}</span>
    </p>`
  );
};


export {createTripInfoTemplate};
