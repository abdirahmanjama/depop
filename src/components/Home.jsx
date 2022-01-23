import { Box, Flex } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";
import Navigation from "./Navigation";
import Products from "./Products";

/**
 * Home component which groups together all the different components.
 *
 * @version 0.0.1
 * @author [Abdirahman Jama]
 */
function Home() {
  const [isMobile] = useMediaQuery("(max-width:600px)");
  const products = ["Rustic Metal Towels", "Test"];

  return (
    <Box paddingTop="100" backgroundColor="white">
      <Box backgroundColor="gray.100">
        <Flex
          borderWidth="0"
          justify="flex-end"
          backgroundColor="white"
          paddingRight={isMobile ? "0" : "200"}
          paddingLeft={isMobile ? "0" : "200"}
        >
          <Navigation likes="4" likedProducts={products} />
        </Flex>
        <Box
          className="App"
          paddingLeft={isMobile ? "0" : "200"}
          paddingRight={isMobile ? "0" : "200"}
        >
          <Box backgroundColor="gray.100" paddingTop="50">
            <Products />
          </Box>{" "}
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
