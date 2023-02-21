import React from "react";

import { Element } from "@/types/Element";
import { Box, Card, Heading, HeadingProps, Text } from "@wix/design-system";

import styles from './ElementCard.module.css';

interface ElementCardProps {
  element: Element;
  missing: string;
}

export default function ElementCard({ element, missing }: ElementCardProps) {
  const modifiedElement = { ...element, [missing]: "?" };
  const { name, number, symbol, phase, category, discovered_by, named_by, summary } = modifiedElement;


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
      <Box gap="SP2" flex={1}>
        <SmallCard title="Category" subtitle={category} />
        <SmallCard title="Named by" subtitle={named_by} />
        <SmallCard title="Discovered by" subtitle={discovered_by} />
      </Box>
      <Card className={styles.elementCardBottom}>
        <Card.Content>
          <Heading size="medium">Summary</Heading>
          <Text>{summary}</Text>
        </Card.Content>
      </Card>
    </Box >
  )
};

const SmallCard = ({ title, subtitle }: { title: string, subtitle?: string }) => {
  return (
    <Card className={styles.smallCard}>
      <Card.Content>
        <Heading size="small">{title}</Heading>
        <DataText size="tiny" text={subtitle || 'Unknown'} />
      </Card.Content>
    </Card>
  );
}

const DataText = (props: { text: string | number } & HeadingProps) => {
  const { text } = props;
  const isMissing = text === "?";
  const cssClass = isMissing ? styles.missing : undefined;

  return (
    <Heading {...props} className={cssClass}>{text}</Heading>
  );
};
