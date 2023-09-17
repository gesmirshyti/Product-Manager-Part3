import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  const { products, setProducts } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {products.length > 0 &&
        products.map((product, index) => {
          return (
            <p key={index}>
              Title : {product.title}, Price : {product.price}, Description :{" "}
              {product.description},
              <Link to={`/products/${product._id}`}>
                {" "}
                {product.firstName}'s Page!{" "}
              </Link>
            </p>
          );
        })}
      ;
    </div>
  );
};
export default ProductList;
