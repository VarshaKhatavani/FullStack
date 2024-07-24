export function convertToCelsius(f) {
  return (f - 32) * (5 / 9);
}
export function convertToFahrenheit(c) {
  return c * (9 / 5) + 32;
}



// This method is only required for the stretch
// goal listed below. You shouldn't need it for
// the main exercise.
export const roundToNearest = (number, step) => (
  Math.round(number / step) * step
);