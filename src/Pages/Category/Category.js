import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./Category.css";
function Category() {
  const { option } = useParams();
  const data = [
    {
      name: "breakfast",
      list: [
        {
          name: "Oats",
          link: "/category/breakfast/oats",
        },
        {
          name: "cereals",
          link: "/category/breakfast/cereals",
        },
      ],
    },
    {
      name: "snacks",
      list: [
        {
          name: "chips",
          link: "/category/snacks/chips",
        },
      ],
    },
  ];
  const optionData = data.find((d) => d.name === option);
  return (
    <div className="pd-10">
      <Breadcrumbs />
      <Outlet context={optionData} />
    </div>
  );
}

export default Category;
