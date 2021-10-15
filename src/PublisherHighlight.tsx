import React, { FunctionComponent, useState } from "react";

import { useSpring, motion, AnimatePresence } from "framer-motion";
import { Box, Center, Grid, GridItem, Heading, Link } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

// const RemoveExample = () => {
//   const [pos, setPos] = useState(0);
//   const [opacity, setOpacity] = useState(1);
//   return (
//     <motion.div
//       initial={{
//         opacity: 1,
//       }}
//       animate={{
//         x: pos,
//         opacity: opacity,
//       }}
//       transition={{
//         duration: 1,
//         ease: "easeInOut",
//         times: [0, 0.2, 0.5, 0.8, 1],
//         loop: Infinity,
//         repeatDelay: 1,
//       }}
//     >
//       <Box
//         bg="green"
//         h="50px"
//         w="50px"
//         onClick={() => {
//           setPos(100);
//           setOpacity(0);
//         }}
//       />
//     </motion.div>
//   );
// };

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
