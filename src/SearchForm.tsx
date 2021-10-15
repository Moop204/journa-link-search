import { Center, Input, Stack, Button } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";

const SearchForm: FunctionComponent<{}> = () => {
  return (
    <>
      <Center>
        <Input
          placeholder="Search here!"
          bg="white.200"
          width="40%"
          textAlign="center"
          textColor="white"
          size="lg"
          textDecorationColor="white"
        />
      </Center>
      <Center>
        <Stack direction="row" spacing={4} align="center">
          <Button colorScheme="teal" variant="solid">
            Reporter
          </Button>
          <Button colorScheme="teal" variant="solid">
            Publisher
          </Button>
        </Stack>
      </Center>
    </>
  );
};

export { SearchForm };
