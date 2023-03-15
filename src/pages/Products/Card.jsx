import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ product }) => {
  const useNav = useNavigate();
  const handler = () => {
    useNav(`/products/${product.id}`)
  }
  return (
    <>
      <div>
        <div
          className="productCard zoom d-flex flex-column align-items-center px-5 py-3"
        >
          <Link to={`/products/${product.id}`}>
            <img src={product.image} className="productImg pb-2" />
          </Link>
          <span className="productTitle fw-bold">{product.title}</span>
          <span>${product.price}</span>
          <button onClick={handler} className="productBtn">Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default Card;
