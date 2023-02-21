import { ELEMENTS } from "@/constants/periodicTable";
import { Element, QuizElement, QuizElementValue } from "@/types/Element";
import { capitalize } from "@/utils/capitalize";
import { getRandomElements } from "@/utils/getRandomElements";
import { useMemo } from "react";

export const useElements = (type: keyof QuizElement, ...deps: any[]) => {
  return useMemo(() => {
    const possibleMaxCount = new Set(ELEMENTS.map((el) => el[type])).size;
    const count = Math.min(4, possibleMaxCount);
    const elements = getRandomElements(count, type);
    const correctValue = elements[0][type];
    const otherValues = elements.slice(1).map((el) => el[type]);

    const element = removeValueFromElementSummary(elements[0], correctValue);

    return { element, correctValue, otherValues };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, ...deps]);
};

const removeValueFromElementSummary = (
  element: Element,
  value: QuizElementValue,
) => {
  const summary = element.summary;
  if (value) {
    const valStr = value.toString();
    const capValStr = capitalize(valStr);
    const lwrValStr = valStr.toLowerCase();
    const regxp = RegExp(
      `(?<![a-zA-Z])((${valStr})|(${capValStr})|(${lwrValStr}))(?![a-zA-Z])`,
      "g",
    );
    const newSummary = summary.replaceAll(regxp, "<...>");
    return { ...element, summary: newSummary };
  }
  return element;
};
