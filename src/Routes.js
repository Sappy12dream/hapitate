import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductPanel from "./common-components/ProductsPanel/ProductPanel";
import Category from "./Pages/Category/Category";
import Home from "./Pages/Home/Home";
import Options from "./Pages/Category/Options";
import Shop from "./Pages/Shop/Shop";

function Rutes() {
  return (
    <Routes>
      <Route path="*" element={<h1>Invalid 404</h1>} />
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/category" element={<Category />}>
        <Route path=":option" element={<Options />} />
        <Route path=":option/:name" element={<ProductPanel />} />
      </Route>
    </Routes>
  );
}

export default Rutes;
