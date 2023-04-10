import { Box, Button } from "@mui/joy";
import React from "react";
import "./category.css";

export const Category = () => {
  return (
    <div className="category-container">
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        <Button className="active-button btn">Home</Button>
        <Button variant="plain" color="black" className="btn">
          Videos
        </Button>
        <Button variant="plain" color="black" className="btn">
          Leaderboard
        </Button>
        <Button variant="plain" color="black" className="btn">
          Challenges
        </Button>
      </Box>
    </div>
  );
};
