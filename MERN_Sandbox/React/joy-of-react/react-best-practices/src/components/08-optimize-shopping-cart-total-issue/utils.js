export const roundTo = (number, places = 0) => (
  Math.round(number * 10 ** places) / 10 ** places
);