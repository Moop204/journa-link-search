import { Autocomplete, Option } from "chakra-ui-simple-autocomplete";
import {
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Box,
  Grid,
  Text,
  Heading,
  Spinner,
  Center,
} from "@chakra-ui/react";
import React, { FunctionComponent, MouseEventHandler, useState } from "react";
import { converter } from "./helper/converter";
import { ReporterProfile } from "./types";

/**
 * ReporterResult
 *
 * Element that displays details regarding a single journalist.
 * @param {string} name Name of reporter.
 * @param {PublishedWork} works List of published articles.
 */
const ReporterResult: FunctionComponent<ReporterProfile> = ({
  name,
  works,
}) => {
  const publisherDict: { [name: string]: string[] } = {};
  for (const work of works) {
    if (publisherDict[work.publisher]) {
      publisherDict[work.publisher].push(work.article);
    } else {
      publisherDict[work.publisher] = [work.article];
    }
  }
  return (
    <Box
      minW="64rem"
      bg="brown"
      borderRadius="md"
      padding="1rem"
      margin="0.5rem"
    >
      {/* <Spinner /> */}
      <Heading mb={4}>{name}</Heading>
      {Object.entries(publisherDict).map(([publisher, articles]) => {
        return (
          <Grid templateColumns="repeat(2, 1fr)">
            <Text fontSize="xl">{publisher}</Text>
            <Box>
              {articles.map((article) => (
                <Text fontSize="lg"> {article} </Text>
              ))}
            </Box>
          </Grid>
        );
      })}
    </Box>
  );
};

/**
 * SearchForm
 *
 * Element that allows user to query journa-link backend
 */
export const SearchForm: FunctionComponent<{}> = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const handleClick: MouseEventHandler = async (e) => {
    setLoading(true);
    const base = "https://reporter-link-backend.herokuapp.com";
    const searchType = isNaN(parseInt(search)) ? "name" : "id";
    let domain = "journalist";
    const query = [base, "/", domain, "?", searchType, "=", search].join("");
    const response = await fetch(query);
    const json = await response.json();
    setResults(json.map((api: any) => converter(api)));
    setLoading(false);
  };

  const [result, setResult] = React.useState<Option[]>([]);

  const options = [
    // { value: "john", label: "John" },
    { value: "andrew", label: "Andrew" },
    { value: "alan", label: "Alan" },
    { value: "conner", label: "Conner" },
  ];

  return (
    <>
      <InputGroup size="md">
        <Input
          bg="white"
          color="black"
          pr="4.5rem"
          type={"text"}
          placeholder="Enter search"
          value={search}
          onChange={(change) => setSearch(change.target.value)}
        />
        {/* <Autocomplete
          maxW="md"
          options={options}
          result={[]}
          setResult={(options: Option[]) => {
            setSearch(options[0].value);
            console.log(options[0].value);
          }}
          onChange={(change) => setSearch(change.target.value)}
          allowCreation={false}
          renderCreateIcon={() => <></>}
          placeholder="Autocomplete"
          renderCheckIcon={() => <></>}
        /> */}

        <InputRightElement width="4.5rem">
          <Button
            h="1.75rem"
            size="sm"
            onClick={(e) => handleClick(e)}
            color="darkgrey"
          >
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
      {loading && (
        <Center h="70vh">
          <Spinner w="8vh" h="8vh" />
        </Center>
      )}
      {!loading &&
        results.map((record) => {
          return <ReporterResult name={record.name} works={record.works} />;
        })}
    </>
  );
};
