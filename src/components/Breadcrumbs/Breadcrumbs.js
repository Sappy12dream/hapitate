import React from "react";
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { NavigateNext } from "@mui/icons-material";
import "./Breadcrumbs.css";
const Breadcrumbs = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const pathnames = pathname.split("/").filter((x) => x);
  return (
    <MUIBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNext fontSize="small" />}
      className="breadcrumbs"
    >
      {pathnames.length > 0 ? (
        <Link onClick={() => navigate("/")}>Home</Link>
      ) : (
        <Typography> Home </Typography>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography key={name}>{name}</Typography>
        ) : (
          <Link key={name} onClick={() => navigate(routeTo)}>
            {name}
          </Link>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
