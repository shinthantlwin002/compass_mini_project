import React, { useEffect, useState } from "react";
import "./Products.css";
import Card from "./Card";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      const api = await fetch("http://localhost:3002/products", { signal });
      const data = await api.json();
      setProducts(data);
      // console.log(data);
    };

    fetchData();

    () => {
      controller.abort();
    }
  }, []);

  return (
    <>
      <div className="d-flex flex-wrap gap-3 justify-content-center px-10 py-2">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
