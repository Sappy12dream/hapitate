import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
function ProductCard({ data }) {
  return (
    <Link to="/shop/product" className="card">
      <span>{data.keywords}</span>
      <h6>{data.name}</h6>
      <img src={data.image} alt={data.name} className="img" />
      <div className="flex">
        <div className="price">
          <p>{data.strikePrice}Rs</p>
          <p>{data.Price} Rs</p>
        </div>
        <AddShoppingCartIcon />
      </div>
    </Link>
  );
}

export default ProductCard;
