import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import Navigation from "./Navigation";
import Products from "./Products";

function Home() {
  const products = ["Rustic Metal Towels", "Test"];

  return (
    <Box paddingTop="100" backgroundColor="white">
      <Box backgroundColor="gray.100">
        <Flex
          borderWidth="0"
          justify="flex-end"
          backgroundColor="white"
          paddingRight="200"
          paddingLeft="200"
        >
          <Navigation likes="4" likedProducts={products} />
        </Flex>
        <Box className="App" paddingRight="200" paddingLeft="200">
          <Box backgroundColor="gray.100" paddingTop="50">
            <Products />
          </Box>{" "}
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
