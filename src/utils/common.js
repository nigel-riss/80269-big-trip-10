/**
 * Returns a random integer in a range
 * @param {Number} min minimal number (included)
 * @param {Number} max maximal number (included)
 * @return {Number} random number
 */
export const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


/**
 * Returns random array element
 * @param {Array} array array
 * @return {*} random array element
 */
export const getRandomArrayItem = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);

  return array[randomIndex];
};


/**
 * Returns an array of random items on random positions
 * @param {Array} array ititial array
 * @param {Number} number number of items in new array
 * @return {Array}
 */
export const getArrayOfRandomItems = (array, number) => {
  const tempArray = [...array];
  const newArray = [];

  for (let i = 0; i < number; i++) {
    newArray.push(tempArray.splice(getRandomInteger(0, tempArray.length - 1), 1)[0]);
  }

  return newArray;
};


/**
 * Returns a date with a random limited deviation from current date
 * @param {Number} deviationDays deviation limit in days
 * @return {Date} random date
 */
export const getRandomDate = (deviationDays) => {
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
export const padWithZero = (value) => {
  return value < 10 ? `0${value}` : String(value);
};


/**
 * Returns a string in format 00D 00H 00M
 * while skipping zero values
 * @param {Date} start start date
 * @param {Date} finish finish date
 * @return {String} formated string
 */
export const getDurationString = (start, finish) => {
  const durationMinutes = (finish - start) / (60 * 1000);

  const minutes = Math.floor(durationMinutes % 60);
  const hours = Math.floor(durationMinutes / 60 % 24);
  const days = Math.floor(durationMinutes / 60 / 24);

  let formatedDuration = `${padWithZero(minutes)}M`;
  formatedDuration = (hours ? `${padWithZero(hours)}H ` : ``) + formatedDuration;
  formatedDuration = (days ? `${padWithZero(days)}D ` : ``) + formatedDuration;

  return formatedDuration;
};


/**
 * Returns a string with a first capital letter
 * @param {String} string string to capitalize
 * @return {String} string with first letter capitalized
 */
export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
