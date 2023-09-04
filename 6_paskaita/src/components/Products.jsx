import { useState, useEffect } from "react";
import Product from "./Product";
import "./styles.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://sophisticated-humane-dandelion.glitch.me/")
      .then((resp) => resp.json())
      .then((response) => {
        setProducts(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Products fetch failed:", error);
      });
  }, []);

  const handleDeleteProduct = (id) => {
    // filter panaudojamas vieno itemo ištrinimui
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          handleDeleteProduct={() => handleDeleteProduct(product.id)}
        />
      ))}
    </div>
  );
};

export default Products;
