import React from "react";
import { Link, useOutletContext } from "react-router-dom";

function Options() {
  const optionData = useOutletContext();
  return (
    <div>
      <div className="mt-10">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <h4>{optionData.name} Categories</h4>
        <hr />
        <div className="flex wrap">
          {optionData.list.map((item) => (
            <Link to={item.link} className="card ct" key={item.name}>
              <img
                src="https://images.unsplash.com/photo-1598048851887-0263d4f43e73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80"
                alt=""
              />
              <p>{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Options;
