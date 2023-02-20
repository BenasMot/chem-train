import { ELEMENTS } from "@/constants/periodicTable";
import { QuizElement } from "@/types/Element";
import { getRandomElements } from "@/utils/getRandomElements";
import { useMemo } from "react";

export const useElements = (type: keyof QuizElement, ...deps: any[]) => {
  return useMemo(() => {
    const possibleMaxCount = new Set(ELEMENTS.map((el) => el[type])).size;
    const count = Math.min(4, possibleMaxCount);
    const elements = getRandomElements(count, type);
    const correctValue = elements[0][type];
    const otherValues = elements.slice(1).map((el) => el[type]);

    return { element: elements[0], correctValue, otherValues };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, ...deps]);
};
