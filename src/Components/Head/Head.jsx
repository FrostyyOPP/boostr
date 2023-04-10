import Input from "@mui/joy/Input";
import Chip from "@mui/joy/Chip";
import "./head.css";

import React from "react";

export const Head = () => {
  return (
    <div className="head">
      <h1 className="head-title">
        The best free stock photos, royalty free images & videos shared by
        creators.
      </h1>
      <Input
        placeholder="Search for free photos"
        size="lg"
        className="search-input"
      />
      <div className="trend-comp">
        <h2 className="trend-head">Trending:</h2>
        <p className="trend-body">
          <a href="" className="trend-body-item">
            dark,{" "}
          </a>
          <a href="" className="trend-body-item">
            nauture,{" "}
          </a>
          <a href="" className="trend-body-item">
            sky,{" "}
          </a>
          <a href="" className="trend-body-item">
            sunset
          </a>
          <a href="" className="trend-body-item chip">
            ...
          </a>
        </p>
      </div>
    </div>
  );
};
