import React from "react";
import { useState, useEffect } from "react";

function useProducts() {
  const [products, setProducts] = useState(undefined);
  const [unsoldProducts, setUnsoldProducts] = useState(undefined);
  const [numberOfProducts, setNumberOfProducts] = useState(null);
  const [numberOfUnsoldProducts, setNumberOfUnsoldProducts] = useState(null);
  const [loading, setLoading] = useState(false);

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
        setNumberOfUnsoldProducts(unsoldProducts.length);
      } catch (err) {
        console.log("Error " + err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return {
    products,
    unsoldProducts,
    numberOfProducts,
    loading,
    setLoading,
    setProducts,
    setUnsoldProducts,
    setNumberOfProducts,
  };
}

export default useProducts;
