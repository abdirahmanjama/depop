import React from "react";
import { useState, useEffect } from "react";

function useProducts() {
  const [products, setProducts] = useState(undefined);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const result = await fetch(
          "https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products"
        );
        const data = await result.json();
        setProducts(data);
        console.log(data);
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

  return products;
}

export default useProducts;
