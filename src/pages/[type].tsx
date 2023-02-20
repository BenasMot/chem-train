import ElementCard from "@/components/ElementCard";
import { Header } from "@/components/Header";
import { Variants } from "@/components/Variants";
import { useElements } from "@/hooks/useElements";
import { useHydration } from "@/hooks/useHydration";
import { QuizElement, QuizElementValue } from "@/types/Element";
import { Box } from "@wix/design-system";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";

export default function () {
  const { query } = useRouter();
  const [score, setScore] = useState(0);
  const type = useMemo(() => query.type as keyof QuizElement, [query]);
  const [guessed, setGuessed] = useState<QuizElementValue>(undefined);
  const { element, correctValue, otherValues } = useMemo(
    () => useElements(type),
    [type, score],
  );

  const onGuess = (guess: QuizElementValue) => {
    const isCorrect = element[type] === guess;
    if (isCorrect) {
      setGuessed(guess);
      setTimeout(() => {
        setScore((score) => score + 1);
        setGuessed(undefined);
      }, 1000);
    }
  };

  const { hydrated } = useHydration();
  if (!hydrated || !type) {
    return null;
  }

  return (
    <main>
      <Header type={type} score={score} />
      <Box padding="10px 20px" direction="vertical" gap="SP3">
        <ElementCard element={element} missing={type} />
        <Variants
          correctValue={correctValue}
          otherValues={otherValues}
          onSelect={onGuess}
          correct={guessed}
        />
      </Box>
    </main>
  );
}
