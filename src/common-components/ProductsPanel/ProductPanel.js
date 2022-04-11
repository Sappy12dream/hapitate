import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductPanel.css";
import data from "./data";
import { useParams } from "react-router-dom";
function ProductPanel() {
  const { name } = useParams();
  const filData = data.find((item) => item.Heading === name);
  return (
    <div className="panel">
      <h2>{filData.Heading}</h2>
      <hr />
      <div className="header">Header</div>
      <div className="wrapper">
        {filData &&
          filData.products.map((product) => <ProductCard data={product} />)}
      </div>
    </div>
  );
}

export default ProductPanel;
