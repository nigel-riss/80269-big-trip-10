export const EVENT_TYPES = {
  transfer: {
    types: [
      `taxi`,
      `bus`,
      `train`,
      `ship`,
      `transport`,
      `drive`,
      `flight`,
    ],
    preposition: `to`,
  },
  activity: {
    types: [
      `check-in`,
      `sightseeing`,
      `restaurant`
    ],
    preposition: `in`
  },
};

export const CITIES = [
  `Geneva`,
  `Chamonix`,
  `Amsterdam`,
  `London`,
  `Berlin`,
  `Dublin`,
  `Paris`,
  `Oslo`,
  `Rome`,
  `Warsaw`,
  `Riga`,
  `Budapest`,
  `Reykjavik`,
  `Ljubljana`,
  `Edinburgh`,
  `Minsk`,
  `Kyiv`,
  `Moscow`,
];

export const DESCRIPTIONS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`,
];

export const OPTIONS = [
  {
    type: `luggage`,
    name: `Add luggage`,
    price: 10,
  },
  {
    type: `comfort`,
    name: `Switch to comfort class`,
    price: 150,
  },
  {
    type: `meal`,
    name: `Add meal`,
    price: 2,
  },
  {
    type: `seats`,
    name: `Choose seats`,
    price: 9,
  },
];
