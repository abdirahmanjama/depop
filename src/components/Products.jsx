import React, { useState, useEffect } from "react";
import { Box, Flex, Grid, Heading } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Button } from "@chakra-ui/button";
import { Spinner } from "@chakra-ui/spinner";
import Product from "./Product";
import useProducts from "../hooks/useProducts";

function Products() {
  const [products, setProducts] = useState(undefined);
  const [unsoldProducts, setUnsoldProducts] = useState(undefined);
  const [prevProducts, setPrevProducts] = useState(undefined);
  const [prevLength, setPrevLength] = useState(null);
  const [numberOfProducts, setNumberOfProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isNotMobile] = useMediaQuery("(min-width:760px)");
  const [error, setError] = useState(false);
  const [toggleButton, setToggleButton] = useState(false);
  const [toggleLikeButton, setToggleLikeButton] = useState(false);
  let likedProducts = new Set();

  // const { products, unsoldProducts, numberOfProducts, loading } = useProducts();

  // const items = useProducts();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const result = await fetch(
          "https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products"
        );
        const data = await result.json();
        console.log(data);
        setProducts(data);
        setUnsoldProducts(data.filter((product) => product.sold === false));
        setNumberOfProducts(data.length);
      } catch (err) {
        console.log("Error");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSoldItems = () => {
    if (toggleButton === false) {
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
