/**
 * Returns a random integer in a range
 * @param {Number} min minimal number (included)
 * @param {Number} max maximal number (included)
 * @return {Number} random number
 */
const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


/**
 * Returns random array element
 * @param {Array} array array
 * @return {*} random array element
 */
const getRandomArrayItem = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);

  return array[randomIndex];
};


/**
 * Returns value in 2 digit zero padding format
 * @param {Number} value number to pad
 * @return {String} Zero padded value
 */
const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};
