export function getRandomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getNextNumber(min: number, max: number, current: number) {
  let newValue = current + 1;
  if (newValue > max) {
    newValue = min;
  }

  return newValue;
}

export function getPreviousNumber(min: number, max: number, current: number) {
  let newValue = current - 1;
  if (newValue < min) {
    newValue = max;
  }

  return newValue;
}
