import { QuizElementValue } from "@/types/Element";
import { Box, Button } from "@wix/design-system";

interface VariantProps {
  value: QuizElementValue;
  onClick: () => void;
  disabled: boolean;
  correct: boolean;
}

export const Variant = (
  { value, onClick, disabled, correct }: VariantProps,
) => {
  const priority = correct ? "primary" : "secondary";

  return (
    <Box flex={1}>
      <Button
        fullWidth
        priority={priority}
        skin="standard"
        size="large"
        disabled={disabled}
        onClick={onClick}
      >
        {value}
      </Button>
    </Box>
  );
};
