import { Grid, GridItem, Box, Center, Text, Input, InputGroup, InputRightElement, Button, IconButton} from "@chakra-ui/react";
import {SearchIcon} from '@chakra-ui/icons';
import React, { FunctionComponent } from "react";

const HomePage: FunctionComponent<{}> = () => {

  const supportedPublishers: number[] = [0,1,2,3,4,5,6,7,8,9];

  return (
    <Box>
      <Grid templateColumns="repeat(5,1fr)"h="100vh">
        <GridItem colSpan={2}>
           {/*bg="#d6b4b2">*/}
          <Center h="100vh" pl="15vw" fontFamily="Canterbury" fontSize="70">
            Journalink
          </Center>
        </GridItem>
        <GridItem colSpan={3}>
           {/*bg="#a5c0d1">*/}
          <Center h="100vh">
            <InputGroup w="40vw" marginLeft="-100px">
              <Input variant="outline" size="lg"/>
              <InputRightElement h="47px">
                <IconButton
                  bg="rgb(a)"
                  _hover={{ bg: "rgb(a)"}}
                  icon={<SearchIcon />}
                />
              </InputRightElement>
            </InputGroup>
          </Center>
        </GridItem>
      {/* supported publications section */}
      </Grid>
      <Grid>
        <GridItem colSpan={5} bg="#a5d1ca">
          <Center>
            <Grid 
              templateColumns="repeat(5,1fr)" 
              templateRows="repeat(3,1fr)" 
              gap={2.5}
            >
              <GridItem colSpan={5} bg="white">
                Supported Publications
              </GridItem>
              {
                supportedPublishers.map(pub => {
                  return (
                    <GridItem colSpan={1} bg="white" w="65px" h="65px">
                    <Center h="100%">{pub}</Center>
                    </GridItem>
                  )
                })
              }
            </Grid>
          </Center>
        </GridItem>
      </Grid>
    </Box>
  )
}

export { HomePage };