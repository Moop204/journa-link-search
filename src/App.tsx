import React from "react";
import "./App.css";
import {
  Box,
  Center,
  ChakraProvider,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { SearchForm } from "./SearchForm";

function App() {
  return (
    <ChakraProvider>
      <Box bg="tomato" width="100%" height="100vh">
        <SimpleGrid
          bg="tomato"
          color="white"
          columns={1}
          spacingX="40px"
          spacingY="20px"
          flexGrow={1}
        >
          <Center>
            <Heading> Journa-Link Search</Heading>
          </Center>

          <SearchForm />
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
