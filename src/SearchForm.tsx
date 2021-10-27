import {
  Center,
  Input,
  Stack,
  Button,
  InputGroup,
  InputRightElement,
  Box,
  Grid,
  Text,
  Heading,
} from "@chakra-ui/react";
import React, { FunctionComponent, MouseEventHandler, useState } from "react";

/** Describes the journalist.
 * @property {string} name - name of journalist.
 * @property {string} works - list of published works from this journalist.
 */
interface ReporterProfile {
  name: string;
  works: PublishedWork[];
}

/** Describes the article itself.
 * @property {string} article - name of article.
 * @property {string} link - link to article.
 */
interface Article {
  article: string;
  link: string;
}

/** Describes an article published by an organisation. */
interface PublishedWork extends Article {
  publisher: string;
}

/**
 * ReporterResult
 *
 * Element that displays details regarding a single journalist.
 * @param {string} name Name of reporter.
 * @param {PublishedWork} works List of published articles.
 */
export const ReporterResult: FunctionComponent<ReporterProfile> = ({
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
 * converter
 *
 * Makes data provided by API into a ReporterProfile type.
 * This is used for frontend components.
 */

// TODO: Do this step in API before sending

const converter = (apiResp: any): ReporterProfile => {
  const works = [];
  for (const work of apiResp.work) {
    const publisher: string = (work.link as string)
      .replace("https://", "")
      .split("/")[0];
    const elm = {
      publisher: publisher,
      article: work.title,
      link: work.link,
    };
    works.push(elm);
  }
  const res: ReporterProfile = {
    name: apiResp.name,
    works: works,
  };
  return res;
};

/**
 * SearchForm
 *
 * Element that allows user to query journa-link backend
 */
export const SearchForm: FunctionComponent<{}> = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const handleClick: MouseEventHandler = async (e) => {
    const base = "https://reporter-link-backend.herokuapp.com";
    const searchType = isNaN(parseInt(search)) ? "name" : "id";
    let domain = "journalist";
    const query = [base, "/", domain, "?", searchType, "=", search].join("");
    const response = await fetch(query);
    const json = await response.json();
    setResults(json.map((api: any) => converter(api)));
    console.log(json);
    console.log("Done!");
    console.log(results);
  };
  return (
    <>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={"text"}
          placeholder="Enter search"
          value={search}
          onChange={(change) => setSearch(change.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={(e) => handleClick(e)}>
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
      {results.map((record) => {
        return <ReporterResult name={record.name} works={record.works} />;
      })}
    </>
  );
};

// const SearchForm: FunctionComponent<{}> = () => {
//   return (
//     <>
//       <Center>
//         <Input
//           placeholder="Search here!"
//           bg="white.200"
//           width="40%"
//           textAlign="center"
//           textColor="white"
//           textDecorationColor="white"
//         />
//       </Center>
//       <Center>
//         <Stack direction="row" spacing={4} align="center">
//           <Button colorScheme="teal" variant="solid">
//             Reporter
//           </Button>
//           <Button colorScheme="teal" variant="solid">
//             Publisher
//           </Button>
//         </Stack>
//       </Center>
//     </>
//   );
// };

// export { SearchForm };
