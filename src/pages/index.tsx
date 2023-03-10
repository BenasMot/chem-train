import Head from "next/head";
import { CATEGORIES } from "@/constants/categories";
import { Box } from "@wix/design-system";
import { Header } from "@/components/Header";
import { CategoryButton } from "@/components/CategoryButton";
import { Colors } from "@/styles/Colors";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box backgroundColor={Colors.background} flex={1} direction="vertical" height="100vh">
        <Header type="chem-train" />
        <Box padding="20px 20px" direction="vertical" gap="SP3">
          <Box
            gap="SP3"
            rowGap="SP3"
            align="center"
            flexWrap="wrap"
          >
            {CATEGORIES.map((category) => (
              <CategoryButton
                category={category}
                key={category}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
