import { Center, HStack, Text, VStack } from "@chakra-ui/layout";
import { Heading, Link } from "@chakra-ui/react";
import React from "react";
import { FunctionComponent } from "react";

import GitHubButton from "react-github-btn";

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
        <Heading as="h3" size="lg">
          Contributors
        </Heading>
        <HStack>
          <GitHubButton href="https://github.com/Moop204">
            Follow @Moop204
          </GitHubButton>
          <GitHubButton href="https://github.com/sengyh">
            Follow @Sengyh
          </GitHubButton>
        </HStack>
      </VStack>
    </Center>
  );
};
