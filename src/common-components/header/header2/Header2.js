import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { data,icons,user } from "./data";
import "./header2.css";
export default function Header2() {
  return (
    <div className="header2_container">
      <div className="header2_logo">
        <img src={data.img} alt="logo" />
      </div>
      <div className="header2_input">
        <div className="header_inp_inner">
          <input type={"text"} placeholder={data.placeholder} />
          <span className="header2_search">
            {" "}
            <FontAwesomeIcon icon={faMagnifyingGlass} size={"1x"} />
          </span>
        </div>
      </div>
      <div className="header2_icon_container">
        <div className="">
          {icons.map((item,index)=>{
              return <span className="header2_icons" key={index}>
              {" "}
              <FontAwesomeIcon icon={item.icon} size={"1x"} />
            </span>
          } )}
              <span className="header2_item">{user.items}</span>

              <span className="header2_amt">{'₹  '+user.amount}</span>
        </div>
       
      </div>
    </div>
  );
}
