import { List, ListItem } from "@mui/material";
import React from "react";
import "./header.css";
import { Head } from "../Head/Head";
const Header = () => {
  return (
    <div className="top-container">
      <div className="header-container">
        <div className="logo">
          <img src="images/logo.png" alt="boostr" className="logo-img" />
        </div>
        <div className="top-navbar">
          <List className="nav-items">
            <ListItem>
              <a href="" className="nav-list-item">
                Nav 1
              </a>
            </ListItem>
            <ListItem>
              <a href="" className="nav-list-item">
                Nav 1
              </a>
            </ListItem>
            <ListItem>
              <a href="" className="nav-list-item">
                Nav 1
              </a>
            </ListItem>
          </List>
        </div>
      </div>
      <div className="head-comp">
        <Head />
      </div>
    </div>
  );
};

export default Header;
