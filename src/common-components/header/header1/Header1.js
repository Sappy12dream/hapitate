import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { title, data } from "./data";
import "./header1.css";
import { Link } from "react-router-dom";
export default function Header1() {
  return (
    <div className="header1_container">
      <div className="header1_title">{title.text}</div>
      <div className="header1_subtitles">
        {data.map((item, index) => {
          return (
            <Link to={item.path} className="header1_subtitle" key={index}>
              <FontAwesomeIcon icon={item.icon} size={"1x"} />
              <span>{item.data}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
