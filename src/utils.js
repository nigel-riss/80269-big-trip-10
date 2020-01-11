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


const getArrayOfRandomItems = (array, number) => {
  const tempArray = [...array];
  const newArray = [];

  for (let i = 0; i < number; i++) {
    newArray.push(tempArray.splice(getRandomInteger(0, tempArray.length - 1))[0]);
  }

  return newArray;
};


/**
 * Returns a date with a random limited deviation from current date
 * @param {Number} deviationDays deviation limit in days
 * @return {Date} random date
 */
const getRandomDate = (deviationDays) => {
  const randomDate = new Date();
  const deviationMS = deviationDays * 24 * 60 * 60 * 1000;

  randomDate.setTime(randomDate.getTime() + getRandomInteger(-deviationMS, deviationMS));

  return randomDate;
};


/**
 * Returns value in 2 digit zero padding format
 * @param {Number} value number to pad
 * @return {String} Zero padded value
 */
const padWithZero = (value) => {
  return value < 10 ? `0${value}` : String(value);
};


/**
 * Renders HTML markup into an exact place of HTML element
 * @param {HTMLElement} parentElement element in which to render HTML markup
 * @param {string} elementMarkup HTML markup to render
 * @param {string} place place in element to place HTML markup
 */
const renderElement = (parentElement, elementMarkup, place = `beforeend`) => {
  parentElement.insertAdjacentHTML(place, elementMarkup);
};


/**
 * Returns a string with a first capital letter
 * @param {String} string string to capitalize
 * @return {String} string with first letter capitalized
 */
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};


export {
  getRandomInteger,
  getRandomArrayItem,
  getArrayOfRandomItems,
  getRandomDate,
  padWithZero,
  renderElement,
  capitalizeFirstLetter,
};
