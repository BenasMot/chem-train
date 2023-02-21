import React from "react";

import { Element } from "@/types/Element";
import { Box, Card, Heading, HeadingProps, Text } from "@wix/design-system";

import styles from "./ElementCard.module.css";
import { CATEGORIES, TRIVIA_CATEGORIES } from "@/constants/categories";

interface ElementCardProps {
  element: Element;
  missing: string;
}

export default function ElementCard({ element, missing }: ElementCardProps) {
  const modifiedElement = { ...element, [missing]: "?" };
  const {
    name,
    number,
    symbol,
    phase,
    category,
    discovered_by,
    named_by,
    summary,
  } = modifiedElement;

  const triviaItems = Object.entries(element).filter((entry) =>
    TRIVIA_CATEGORIES.includes(entry[0] as typeof TRIVIA_CATEGORIES[number])
  );

  return (
    <Box direction="vertical" gap="SP2">
      <Card className={styles.elementCardTop}>
        <Card.Content>
          <Box flex={1} align="space-between" flexWrap="wrap">
            <DataText size="small" text={number} />
            <DataText size="small" text={phase} />
          </Box>
          <Box flex={1} align="center" direction="vertical">
            <DataText textAlign="center" text={symbol} />
            <DataText size="small" text={name} />
          </Box>
        </Card.Content>
      </Card>
      <Box gap="SP2" flex={1} overflow="auto">
        <TriviaCard title="Category" subtitle={category} size="s" />
        <TriviaCard title="Named by" subtitle={named_by} size="s" />
        <TriviaCard title="Discovered by" subtitle={discovered_by} size="s" />
      </Box>
      <Box gap="SP2" flex={1} overflow="auto">
        {triviaItems.map(([key, value]) => (
          <TriviaCard title={key} subtitle={value} size="xs" key={key} />
        ))}
      </Box>
      <Card className={styles.elementCardBottom}>
        <Card.Content>
          <Heading size="medium">Summary</Heading>
          <Text>{summary}</Text>
        </Card.Content>
      </Card>
    </Box>
  );
}

const TriviaCard = (
  { title, subtitle, size }: {
    title: string;
    subtitle?: string;
    size: "s" | "xs";
  },
) => {
  const headingSize = size === "s" ? "small" : "tiny";
  const dataSize = size === "s" ? "tiny" : "extraTiny";
  return (
    <Card className={styles.smallCard}>
      <Card.Content>
        <Heading size={headingSize}>{title}</Heading>
        <DataText size={dataSize} text={subtitle || "Unknown"} />
      </Card.Content>
    </Card>
  );
};

const DataText = (props: { text: string | number } & HeadingProps) => {
  const { text } = props;
  const isMissing = text === "?";
  const cssClass = isMissing ? styles.missing : undefined;

  return <Heading {...props} className={cssClass}>{text}</Heading>;
};
