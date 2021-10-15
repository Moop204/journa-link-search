import React, { FunctionComponent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Divider,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Grid,
  Heading,
  Input,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SearchForm } from "./SearchForm";
import { HomePage } from "./pages/HomePage"

const SampleReporterResult: FunctionComponent<{}> = () => {
  return (
    <Box
      minW="64rem"
      bg="brown"
      borderRadius="md"
      padding="1rem"
      margin="0.5rem"
    >
      {/* <Spinner /> */}
      <Heading mb={4}>Jim Brewer</Heading>
      <Grid templateColumns="repeat(2, 1fr)">
        <Text fontSize="xl">wkrb13</Text>
        <Box>
          <Text fontSize="lg">
            XSGD Trading Up 0.2% Over Last 89 Days (XSGD)
          </Text>
          <Text fontSize="lg">
            Cullen Frost Bankers Inc. Grows Stock Holdings in Vanguard FTSE
            Emerging Markets ETF (NYSEARCA:VWO)
          </Text>
          <Text fontSize="lg">
            Computer Programs and Systems, Inc. (NASDAQ:CPSI) Expected to
            Announce Quarterly Sales of $71.12 Million
          </Text>
        </Box>
      </Grid>
      <Grid templateColumns="repeat(2, 1fr)">
        <Text fontSize="xl">Publisher</Text>
        <Box>
          <Text fontSize="lg">Article</Text>
          <Text fontSize="lg">Article</Text>
          <Text fontSize="lg">Article</Text>
          <Text fontSize="lg">Article</Text>
          <Text fontSize="lg">Article</Text>
        </Box>
      </Grid>
      <Grid templateColumns="repeat(2, 1fr)">
        <Text fontSize="xl">Publisher</Text>
        <Box>
          <Text fontSize="lg">Article</Text>
          <Text fontSize="lg">Article</Text>
          <Text fontSize="lg">Article</Text>
        </Box>
      </Grid>
    </Box>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider>
      <Box>
        <HomePage />
      </Box>
    </ChakraProvider>

  );
}

export default App;
