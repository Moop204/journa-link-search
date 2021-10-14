import { Image } from "@chakra-ui/image";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/layout";
import React, { FunctionComponent } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface TimelineElement {
  date: string;
  url: string;
  title: string;
}

const extractPublisher = (url: string): string => {
  url = url.replace(/https:\/\//, "");
  return url.split("/")[0];
};

const publisherIcon: { [name: string]: string } = {
  "apnews.com": "src/media/Associated-Press-logo.png",
};

const publisherName: { [name: string]: string } = {
  "apnews.com": "APNews",
};

const ReporterTimelineElement: FunctionComponent<TimelineElement> = ({
  date,
  url,
  title,
}) => {
  const publisher = extractPublisher(url);
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={date}
      iconStyle={{ background: "#fff", color: "#fff" }}
      icon={
        // <Image src="./media/Associated-Press-logo.png" boxSize="100px"/>

        <Image
          src={publisherIcon[publisher]}
          boxSize="60px"
          borderRadius="50px"
          border="violet"
          borderColor="black"
        />
      }
    >
      {/* <h3 className="vertical-timeline-element-title">Creative Director</h3> */}
      <Heading className="vertical-timeline-element-subtitle">{title}</Heading>
      <Text> {publisherName[publisher]} </Text>
    </VerticalTimelineElement>
  );
};

const ReporterSummary: FunctionComponent<{}> = () => {
  return (
    <>
      <Heading>Recently worked at </Heading>
      <Image
        src="src/media/Associated-Press-logo.png"
        boxSize="60px"
        alt="Associated Presss"
        // borderRadius="50px"
        border="violet"
        borderColor="black"
      />

      <Heading>Previously worked at </Heading>

      <Grid
        // h="140px"
        w="320px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={2}
        rowGap={2}
      >
        <GridItem>
          <Image
            src="src/media/The_Economist_Logo.svg"
            boxSize="60px"
            alt="The Economist"
            // borderRadius="50px"
            border="violet"
            borderColor="black"
          />
        </GridItem>
        <GridItem>
          <Image
            src="src/media/Associated-Press-logo.png"
            boxSize="60px"
            alt="Associated Presss"
            // borderRadius="50px"
          />
        </GridItem>
        <GridItem>
          <Image
            src="src/media/The_Economist_Logo.svg"
            boxSize="60px"
            alt="The Economist"
            // borderRadius="50px"
            border="violet"
            borderColor="black"
          />
        </GridItem>
        <GridItem>
          <Image
            src="src/media/Associated-Press-logo.png"
            boxSize="60px"
            alt="Associated Presss"
            // borderRadius="50px"
          />
        </GridItem>
        <GridItem>
          <Image
            src="src/media/The_Economist_Logo.svg"
            boxSize="60px"
            alt="The Economist"
            // borderRadius="50px"
            border="violet"
            borderColor="black"
          />
        </GridItem>
        <GridItem>
          <Image
            src="src/media/Associated-Press-logo.png"
            boxSize="60px"
            alt="Associated Presss"
            // borderRadius="50px"
          />
        </GridItem>
        <GridItem>
          <Image
            src="src/media/The_Economist_Logo.svg"
            boxSize="60px"
            alt="The Economist"
            // borderRadius="50px"
            border="violet"
            borderColor="black"
          />
        </GridItem>
        <GridItem>
          <Image
            src="src/media/Associated-Press-logo.png"
            boxSize="60px"
            alt="Associated Presss"
            // borderRadius="50px"
          />
        </GridItem>
        <GridItem>
          <Image
            src="src/media/The_Economist_Logo.svg"
            boxSize="60px"
            alt="The Economist"
            // borderRadius="50px"
            border="violet"
            borderColor="black"
          />
        </GridItem>
        <GridItem>
          <Image
            src="src/media/Associated-Press-logo.png"
            boxSize="60px"
            alt="Associated Presss"
            // borderRadius="50px"
          />
        </GridItem>
      </Grid>
    </>
  );
};

const ReporterTimeline: FunctionComponent<{}> = () => {
  return (
    <VerticalTimeline>
      <ReporterTimelineElement
        date="Oct 11 2021"
        url="https://apnews.com/article/oslo-norway-bow-arrow-attack-24095a6b0e2bd26d08a145078d242529"
        title="Assailant kills several people with bow and arrows in Norway"
      />
      <ReporterTimelineElement
        date="Oct 11 2021"
        url="https://apnews.com/article/oslo-norway-bow-arrow-attack-24095a6b0e2bd26d08a145078d242529"
        title="Assailant kills several people with bow and arrows in Norway"
      />
      <ReporterTimelineElement
        date="Oct 11 2021"
        url="https://apnews.com/article/oslo-norway-bow-arrow-attack-24095a6b0e2bd26d08a145078d242529"
        title="Assailant kills several people with bow and arrows in Norway"
      />
      <ReporterTimelineElement
        date="Oct 11 2021"
        url="https://apnews.com/article/oslo-norway-bow-arrow-attack-24095a6b0e2bd26d08a145078d242529"
        title="Assailant kills several people with bow and arrows in Norway"
      />
    </VerticalTimeline>
  );
};

export const ReporterCard: FunctionComponent<{}> = () => {
  return (
    <Box padding="24px">
      <Heading as="h1" size="2xl">
        John Smith
      </Heading>
      <Grid
        h="200px"
        // templateRows="repeat(2, 1fr)"
        templateColumns="repeat(10, 1fr)"
        gap={4}
      >
        <GridItem colSpan={7}>
          <ReporterTimeline />
        </GridItem>
        <GridItem colSpan={3}>
          <ReporterSummary />
        </GridItem>
      </Grid>
    </Box>
  );
};
