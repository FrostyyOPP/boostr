import { Box, Button } from "@mui/joy";
import React from "react";
import "./category.css";

export const Category = () => {
  function handleClick(event) {
    // Prevent the default behavior of the button
    event.preventDefault();

    // Get a reference to the clicked button and its parent container
    const button = event.target;
    const container = button.parentNode;

    // Loop through all buttons in the container and remove the "active-button" classname
    const buttons = container.querySelectorAll("button");
    buttons.forEach((btn) => {
      btn.classList.remove("active-button");
    });

    // Add the "active-button" classname to the clicked button
    button.classList.add("active-button");
  }

  return (
    <div className="category-container">
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        <Button
          className="active-button"
          onClick={handleClick}
          variant="plain"
          color="black"
        >
          Home
        </Button>
        <Button
          variant="plain"
          color="black"
          className="btn"
          onClick={handleClick}
        >
          Videos
        </Button>
        <Button
          variant="plain"
          color="black"
          className="btn"
          onClick={handleClick}
        >
          Leaderboard
        </Button>
        <Button
          variant="plain"
          color="black"
          className="btn"
          onClick={handleClick}
        >
          Challenges
        </Button>
      </Box>
    </div>
  );
};
