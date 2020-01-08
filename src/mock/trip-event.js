import {EVENT_TYPES, CITIES} from '../const';
import {getRandomArrayItem} from '../utils';


const generateTripEvent = () => {
  return {
    type: getRandomArrayItem(getRandomArrayItem(Object.values(EVENT_TYPES))),
    destination: getRandomArrayItem(CITIES),
  }
};

export {generateTripEvent};
