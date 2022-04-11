import React from "react";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./Submenu.css";
function Submenu({ option }) {
  const data = [
    {
      name: "Breakfast",
      section: [
        {
          link: [
            {
              name: "oats",
              path: "/category/breakfast/oats",
            },
            {
              name: "cereals",
              path: "/category/breakfast/cereals",
            },
          ],
          image:
            "https://images.unsplash.com/photo-1626783417047-d47d3b4fd9bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          link: [
            {
              name: "poha",
              path: "/category/breakfast/poha",
            },
            {
              name: "amarnath",
              path: "/category/breakfast/amarnath",
            },
          ],
          image:
            "https://images.unsplash.com/photo-1626783417047-d47d3b4fd9bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
      ],
    },
    {
      name: "Snacks",
      section: [
        {
          link: [
            {
              name: "oats",
              path: "/category/breakfast/oats",
            },
            {
              name: "cereals",
              path: "/category/breakfast/cereals",
            },
          ],
          image:
            "https://images.unsplash.com/photo-1626783417047-d47d3b4fd9bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
      ],
    },
  ];

  const dataOption = data.find((i) => i.name === option);
  return (
    <div className="submenu">
      <div className="wrpper">
        {dataOption.section.map((sec) => (
          <div className="menu">
            <div className="list">
              {sec.link.map((link) => (
                <Link to={link.path}>
                  <ArrowRightIcon />
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="img-wrp">
              <img src={sec.image} alt="sure" />
            </div>
          </div>
        ))}
      </div>

      <div className="img-wr">
        <img
          src="https://thingscareerrelated.files.wordpress.com/2018/03/lake2b.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Submenu;
