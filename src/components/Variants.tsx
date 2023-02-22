import { Element, QuizElement } from "@/types/Element";
import { severalRandom } from "@/utils/severalRandom";
import { Box } from "@wix/design-system";
import { useMemo } from "react";
import { Variant } from "./Variant";

type QuizElementValue = QuizElement[keyof QuizElement];

interface VariantsProps {
  correctValue: QuizElementValue;
  otherValues: QuizElementValue[];
  onSelect: (value: QuizElementValue) => void;
  correct: QuizElementValue;
}
export const Variants = (
  { correctValue, otherValues, onSelect, correct }: VariantsProps,
) => {
  const variants = useMemo(() => {
    const variants = [correctValue, ...otherValues].map((value) => ({
      value,
      onClick: () => onSelect(value),
    }), []);
    const order = severalRandom(variants.length, variants.length);
    const reorderedVariants = order.map((index) => variants[index]);

    return reorderedVariants;
  }, [correctValue, onSelect, otherValues]);

  const hasGuessed = correct !== undefined;

  return (
    <Box flexWrap="wrap" align="space-between" gap={2}>
      {variants.map((props) => (
        <Variant
          {...props}
          disabled={hasGuessed}
          correct={hasGuessed && props.value === correct}
          key={props.value}
        />
      ))}
    </Box>
  );
};
