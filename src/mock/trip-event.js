import {EVENT_TYPES, CITIES, DESCRIPTIONS, OFFERS} from '../const';
import {getRandomInteger, getRandomArrayItem, getArrayOfRandomItems, getRandomDate} from '../utils';


/**
 * Returns an array of random photo urls
 * @return {Array} random photo urls
 */
const generatePhotos = () => {
  return new Array(getRandomInteger(1, 5))
    .fill(``)
    .map(() => {
      return `http://picsum.photos/300/150?r=${Math.random()}`;
    });
};


/**
 * Returns a date with a random diviation form 15 minutes to 3 days from given
 * @param {Date} dateFrom given date
 * @return {Date} generated date
 */
const generateDateTo = (dateFrom) => {
  // Random time diviation form 15 minutes to 2 days
  const deviationMS = getRandomInteger(15 * 60 * 1000, 2 * 24 * 60 * 60 * 1000);

  return new Date(dateFrom.valueOf() + deviationMS);
};


/**
 * Returns trip event object
 * @return {Object} trip event
 */
const generateTripEvent = () => {
  const activity = getRandomArrayItem(Object.values(EVENT_TYPES));

  const description = getArrayOfRandomItems(DESCRIPTIONS, getRandomInteger(1, 3)).join(` `);
  const dateFrom = getRandomDate(5);
  const offers = getArrayOfRandomItems(OFFERS, getRandomInteger(0, 2));

  return {
    type: getRandomArrayItem(activity.types),
    preposition: activity.preposition,
    destination: getRandomArrayItem(CITIES),
    photos: generatePhotos(),
    description,
    dateFrom,
    dateTo: generateDateTo(dateFrom),
    price: getRandomInteger(10, 200),
    offers,
  };
};


const generateTripEvents = (numberOfEvents) => {
  return new Array(numberOfEvents)
    .fill(``)
    .map(() => {
      return generateTripEvent();
    });
};

export {generateTripEvent, generateTripEvents};
