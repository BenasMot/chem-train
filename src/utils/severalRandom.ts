import { hasUniqueValues } from "./hasUniqueValues";

export const severalRandom = (count: number, to: number) => {
  let numbers = Array(count).fill(0);
  while (!hasUniqueValues(numbers)) {
    numbers = numbers.map(() => Math.floor(Math.random() * to));
  }

  return numbers;
};
