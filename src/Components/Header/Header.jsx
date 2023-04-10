import { List, ListItem } from "@mui/material";
import React from "react";
import "./header.css";
import { Head } from "../Head/Head";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Nav 1", "Nav 1", "Nav 1"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
        <div className="hamburger">
          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)} className="ham-btn">
                <MenuIcon fontSize="large" color="black" />
              </Button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="head-comp">
        <Head />
      </div>
    </div>
  );
};

export default Header;
