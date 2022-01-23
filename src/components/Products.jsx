import React, { useState } from "react";
import { Box, Flex, Grid, Heading } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Button } from "@chakra-ui/button";
import { Spinner } from "@chakra-ui/spinner";
import Product from "./Product";
import useProducts from "../hooks/useProducts";

/**
 * Products component - this holds the logic for retrieving and listing products from API.
 *
 * @version 0.0.1
 * @author [Abdirahman Jama]
 */

function Products() {
  const {
    products,
    unsoldProducts,
    numberOfProducts,
    loading,
    setProducts,
    setUnsoldProducts,
    setNumberOfProducts,
    setLoading,
  } = useProducts();

  const [prevProducts, setPrevProducts] = useState(undefined);
  const [prevLength, setPrevLength] = useState(null);
  const [isNotMobile] = useMediaQuery("(min-width:760px)");
  const [toggleButton, setToggleButton] = useState(false);
  // const [toggleLikeButton, setToggleLikeButton] = useState(false);

  let likedProducts = new Set();

  /**
   * Function to collect data regarding liked Items. Ideally, this function wouldve been carried out in the back-end/servers-ide.
   *
   * @param {string} item - this is the item.title / brand-name
   * @description - takes in an item, checks to see if said item exists in empty set.
   *                 HashSets can only contain unique items. Hence, if item exists (e.g. already liked), we remove from HashSet in O(1) time.
   *                 If it doesn't exist, we add it to the likedProducts set.
   * items.)
   * @return {none} No return type as we are mutating an associative array.
   */

  const addToLikedProducts = (item) => {
    if (!likedProducts.has(item)) {
      likedProducts.add(item);
    } else {
      likedProducts.delete(item);
    }
  };

  /**
   * Function to toggle between sold and unsold items
   *
   * @param {none}
   * @description - depending on the value of toggleButton boolean, we set states to appropriate values.
   * items.)
   * @return {none}
   */
  const handleSoldItems = () => {
    if (toggleButton === false) {
      console.log("hit if statemnet");
      setPrevLength(numberOfProducts);
      setPrevProducts(products);
      setProducts(unsoldProducts);
      setNumberOfProducts(unsoldProducts.length);
      setToggleButton(!toggleButton);
    } else {
      setProducts(prevProducts);
      setNumberOfProducts(prevLength);
      setToggleButton(!toggleButton);
    }
  };

  return (
    <Box>
      {loading && (
        <Heading color="gray" fontSize={isNotMobile ? "5xl" : "md"}>
          {" "}
          Retrieving products...
        </Heading>
      )}
      {loading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
      <Flex justify="space-between" mb={5}>
        {!loading && (
          <Heading color="gray" fontSize={isNotMobile ? "4xl" : "2xl"}>
            {" "}
            {numberOfProducts} Results
          </Heading>
        )}

        {toggleButton === false ? (
          <Button
            borderWidth="1px"
            color="gray"
            padding={2}
            backgroundColor="white"
            onClick={handleSoldItems}
          >
            Hide Sold Items
          </Button>
        ) : (
          <Button
            borderWidth="1px"
            color="gray"
            padding={2}
            backgroundColor="white"
            onClick={handleSoldItems}
          >
            Show All Items
          </Button>
        )}
      </Flex>
      <Grid
        templateColumns={isNotMobile ? "repeat(4, 1fr)" : "repeat(2, 1fr)"}
        gap={4}
        rowGap={10}
        w="100%"
        mb={10}
      >
        {products?.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            brand={product.brand}
            size={product.size}
            price={product.price}
            img={product.img}
            sold={product.sold}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default Products;
