import React, { FunctionComponent, useEffect, useState } from "react";

import { useSpring, motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  HStack,
  Link,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  WarningIcon,
} from "@chakra-ui/icons";

const parentWidth = 700;
const squareParam = 60;
const totalElm = 5;
const spacing = (parentWidth - squareParam * totalElm) / (totalElm - 1);

const Carousel = () => {
  // const positions = [0, 100, 200, 300];

  const [boxes, setBoxes] = useState([
    "red",
    "pink",
    "blue",
    "orange",
    "brown",
  ]);

  const [positions, setPositions] = useState(
    boxes.map((_, idx) => idx * (squareParam + spacing))
  );

  const [move, setMove] = useState(0);

  const remapPosition = (rawPos: number) => {
    const maxPos = parentWidth + spacing;
    return (rawPos + maxPos) % maxPos;
  };

  useEffect(() => {
    console.log(positions);
  }, [positions]);

  return (
    <Box>
      <Center>
        <Heading>Highlighted Stuff</Heading>
      </Center>
      <Box
        h="20px"
        w="50px"
        bg="red"
        onClick={() => {
          console.log(spacing + squareParam);
          setPositions(
            positions.map((p) => remapPosition(p + spacing + squareParam))
          );
          // setMove(move - 100);
        }}
      />
      <Box
        h="20px"
        w="50px"
        bg="blue"
        onClick={() => {
          console.log(spacing + squareParam);
          setPositions(
            positions.map((p) => remapPosition(p - spacing - squareParam))
          );
          // setMove(move - 100);
        }}
      />

      <Center>
        <HStack>
          <ChevronLeftIcon
            w={100}
            h={100}
            onClick={() => {
              console.log(spacing + squareParam);
              setPositions(
                positions.map((p) => remapPosition(p - (spacing + squareParam)))
              );
              // setMove(move - 100);
            }}
          />
          <HStack h="100px" w={parentWidth + "px"} bg="purple" spacing="0px">
            {boxes.map((bg, idx) => (
              <RemoveExample
                initPos={idx * (squareParam + spacing)}
                movePos={positions[idx] - idx * squareParam}
                bg={bg}
                opacity={
                  positions[idx] === 0 ||
                  positions[idx] === (totalElm - 1) * (squareParam + spacing)
                    ? 0
                    : 1
                }
              />
            ))}
          </HStack>
          <ChevronRightIcon
            w={100}
            h={100}
            onClick={() => {
              console.log(spacing + squareParam);
              setPositions(
                positions.map((p) => remapPosition(p + (spacing + squareParam)))
              );
              // setMove(move - 100);
            }}
          />
        </HStack>
        {/* <Grid templateColumns={"repeat(" + boxes.length + ", 1fr)"} gap={0}>
          {boxes.map((bg, idx) => (
            <GridItem colSpan={1}>
              <RemoveExample
                initPos={idx * squareParam}
                movePos={positions[idx]}
                bg={bg}
              />
            </GridItem>
          ))}
        </Grid> */}
      </Center>
    </Box>
  );
};
const RemoveExample = ({
  initPos,
  movePos,
  bg,
  opacity,
}: {
  initPos: number;
  movePos: number;
  bg: string;
  opacity: number;
}) => {
  const [pos, setPos] = useState(initPos);
  // const [opacity, setOpacity] = useState(1);
  return (
    <motion.div
      initial={{
        opacity: 1,
        // x: initPos,
        x: 0,
      }}
      animate={{
        x: movePos,
        opacity: opacity,
        // opacity: movePos > 0 && movePos < parentWidth - squareParam ? 1 : 0,
      }}
      transition={{
        duration: 0.1,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        // loop: Infinity,
        repeatDelay: 1,
      }}
    >
      <Box
        bg={bg}
        h={squareParam + "px"}
        w={squareParam + "px"}
        // onClick={() => {
        //   setPos(initPos);
        //   setOpacity(0);
        // }}
      />
    </motion.div>
  );
};

const PublisherHighlight: FunctionComponent = () => {
  const hPublishers = ["apnews.com", "apnews.com", "apnews.com"];
  return (
    <Box h="400px" w="100vw">
      <Center>
        <Heading>Highlighted Publishers</Heading>
      </Center>
      <Center>
        <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns={"repeat(" + hPublishers.length + ", 1fr)"}
          gap={8}
          rowGap={2}
        >
          {hPublishers.map((publisherLink) => {
            return (
              <GridItem>
                <Link href={publisherLink}>
                  <Image
                    boxSize="100px"
                    objectFit="cover"
                    src="https://bit.ly/sage-adebayo"
                  />
                </Link>
              </GridItem>
            );
          })}
        </Grid>
      </Center>
      <Box bg="blue"></Box>
    </Box>
  );
};
