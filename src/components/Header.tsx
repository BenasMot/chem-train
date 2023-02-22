import { Colors } from "@/styles/Colors";
import { QuizElement } from "@/types/Element";
import { capitalize } from "@/utils/capitalize";
import { Box, Divider, Heading, TextButton } from "@wix/design-system";
import { useRouter } from "next/router";

interface HeaderProps {
  type: keyof QuizElement | "chem-train";
  score?: number;
}

export const Header = ({ type, score }: HeaderProps) => {
  const router = useRouter();
  const isHome = router.route == "/";
  const title = isHome ? type : capitalize(type);
  const onBack = () => router.back();
  return (
    <>
      <Box
        direction="horizontal"
        minHeight="55px"
        verticalAlign="middle"
        padding="0 20px"
        backgroundColor={Colors.backgroundLight}
      >
        <Box flex={1} align="left">
          {!isHome && (
            <TextButton size="medium" onClick={onBack} skin="light">
              {"< Back"}
            </TextButton>
          )}
        </Box>
        <Box flex={3} align="center">
          <Heading size="large" light>{title}</Heading>
        </Box>
        <Box flex={1} align="right">
          <Heading size="large" light>{score}</Heading>
        </Box>
      </Box>
      <Divider />
    </>
  );
};
