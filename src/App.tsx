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
            XSGD Trading Up 0.2% Over Last 7 Days (XSGD)
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
          {/* <Divider />
          <Center flexGrow={1} flexDirection="column">
            {[<SampleReporterResult />, <SampleReporterResult />]}
          </Center> */}
        </SimpleGrid>
      </Box>
      {/* <Center bg="tomato" h="100px" color="white">
        <Flex flexDirection="column" flexGrow={1}>
          <Center>
            <Heading> Journa-Link Search</Heading>
          </Center>

          <Center>
            <Editable defaultValue="Search here!" maxWidth="100%">
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Center>
          <Divider />

          <Spinner />
        </Flex>
      </Center> */}
    </ChakraProvider>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>Hello Vite + React!</p>
    //     <p>
    //       <button type="button" onClick={() => setCount((count) => count + 1)}>
    //         count is: {count}
    //       </button>
    //     </p>
    //     <p>
    //       Edit <code>App.tsx</code> and save to test HMR updates.
    //     </p>
    //     <p>

    //       {' | '}
    //     </p>
    //   </header>
    // </div>
  );
}

export default App;
