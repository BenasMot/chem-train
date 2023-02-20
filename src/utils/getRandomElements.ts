import { ELEMENTS } from "@/constants/periodicTable";
import { Element, QuizElement } from "@/types/Element";
import { hasUniqueValues } from "./hasUniqueValues";
import { severalRandom } from "./severalRandom";

export const getRandomElements = (
  count: number,
  type: keyof QuizElement,
): Element[] => {
  const eligibleElements = ELEMENTS.filter((el) => el[type] !== undefined);
  let elements = Array(count).fill(0);
  while (!hasUniqueValues(elements.map((el) => el[type]))) {
    const randomIds = severalRandom(count, eligibleElements.length);
    elements = randomIds.map((id) => eligibleElements[id]);
  }

  return elements;
};
