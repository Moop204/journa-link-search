import { Center, HStack, Text, VStack } from "@chakra-ui/layout";
import { Heading, Link } from "@chakra-ui/react";
import React from "react";
import { FunctionComponent } from "react";

import GitHubButton from "react-github-btn";

/**
 * Credits
 *
 * Element that displays a link to the source code as well as a list of contributors to the project.
 */
export const Credits: FunctionComponent = () => {
  return (
    <Center paddingTop="20vh" bg="orange">
      <VStack>
        <HStack>
          <Text fontSize="md">
            Want to see the source code? Have an issue with this website?{" "}
            <Link
              href="https://github.com/Moop204/journa-link-search"
              color="blue"
            >
              View on Github.
            </Link>
          </Text>
        </HStack>
        <Heading as="h6" size="lg">
          Contributors
        </Heading>
        <HStack>
          <GitHubButton href="https://github.com/Moop204">
            Andrew
          </GitHubButton>
          <GitHubButton href="https://github.com/sengyh">
            Seng
          </GitHubButton>
        </HStack>
      </VStack>
    </Center>
  );
};
