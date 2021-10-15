import { Grid, GridItem, Box, Center } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";

const HomePage: FunctionComponent<{}> = () => {

  const supportedPublishers: number[] = [0,1,2,3,4,5,6,7,8,9];

  return (
    <Grid templateColumns="repeat(2,1fr)" templateRows="repeat(2,1fr)" h="100vh">
      <GridItem colSpan={1} bg="#d6b4b2">
        test1
      </GridItem>
      <GridItem colSpan={1} bg="#a5c0d1">
        test2
      </GridItem>
      {/* supported publications section */}
      <GridItem colSpan={2} bg="#a5d1ca">
        <Center>
          <Grid 
            templateColumns="repeat(5,1fr)" 
            templateRows="repeat(2,1fr)" 
            gap={2}
          >
            {
              supportedPublishers.map(pub => {
                return (
                  <GridItem colSpan={1} bg="white" w="80px" h="80px">
                   {pub}
                  </GridItem>
                )
              })
            }
          </Grid>
        </Center>
      </GridItem>
    </Grid>
  )
}

export { HomePage };