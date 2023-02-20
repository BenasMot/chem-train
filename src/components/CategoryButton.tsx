import { CATEGORIES } from "@/constants/categories";
import { capitalize } from "@/utils/capitalize";
import { Box, Heading } from "@wix/design-system";
import { useRouter } from "next/router";

interface CategoryButtonProps {
  category: typeof CATEGORIES[number];
}

export const CategoryButton = ({ category }: CategoryButtonProps) => {
  const router = useRouter();
  const onNavigate = () => router.push(`/${category}`);

  return (
    <Box flex={1}>
      <div onClick={onNavigate}>
        <Box
          direction="horizontal"
          align="center"
          verticalAlign="middle"
          minHeight="80px"
          minWidth="150px"
          border="1px solid white"
          borderRadius="10px"
        >
          <Heading size="small" light>{capitalize(category)}</Heading>
        </Box>
      </div>
    </Box>
  );
};
