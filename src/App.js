import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./common-components/header/Header";
import Rutes from "./Routes";
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Rutes />
      </div>
    </BrowserRouter>
  );
}
