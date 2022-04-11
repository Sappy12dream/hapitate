import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { data } from "./data";
import "./header3.css";
import { Link } from "react-router-dom";
import Submenu from "../../Submenu/Submenu";
export default function Header3() {
  const [show, setshow] = useState(false);
  const [option, setoption] = useState("");
  return (
    <>
      <div className="header3_container" onMouseOut={() => setshow(false)}>
        {data.map((item, index) => {
          return (
            <Link
              to={item.path}
              key={index}
              className="header3_items"
              onMouseOver={() => {
                setshow(true);
                setoption(item.text);
              }}
            >
              {item.text} <FontAwesomeIcon icon={faCaretDown} size={"1x"} />
            </Link>
          );
        })}
        {show && (
          <div>
            <Submenu
              option={option}
              onMouseOver={() => {
                setshow(true);
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}
