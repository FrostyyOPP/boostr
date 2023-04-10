import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import "./masonry.css";

import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    clickBy: "Photographer Name on Unsplash",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    clickBy: "Photographer Name on Unsplash",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    clickBy: "Photographer Name on Unsplash",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    clickBy: "Photographer Name on Unsplash",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    clickBy: "Photographer Name on Unsplash",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    clickBy: "Photographer Name on Unsplash",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    clickBy: "Photographer Name on Unsplash",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    clickBy: "Photographer Name on Unsplash",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    clickBy: "Photographer Name on Unsplash",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    clickBy: "Photographer Name on Unsplash",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    clickBy: "Photographer Name on Unsplash",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    clickBy: "Photographer Name on Unsplash",
  },
];

const filters = [
  {
    title: "Trending",
  },
  {
    title: "New",
  },
  {
    title: "Dekstop",
  },
  {
    title: "Mobile",
  },
];
export const BasicMasonry = () => {
  // const [filter, setFilter] = React.useState("");

  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.title,
  });

  return (
    <div className="mason-container">
      <div className="mas-head">
        <h1 className="mas-head-title">Free Stock Photos</h1>
        <div className="select-box">
          <Autocomplete
            id="filter-demo"
            options={filters}
            getOptionLabel={(option) => option.title}
            filterOptions={filterOptions}
            sx={{ width: 200 }}
            renderInput={(params) => (
              <TextField {...params} label="Custom filter" />
            )}
          />
        </div>
      </div>
      <ImageList>
        <ImageListItem key="Subheader" cols={2}></ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.clickBy}
              actionIcon={
                <Tooltip title="Download">
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <a href={item.img} download={item.title} target="blank">
                      <DownloadForOfflineIcon
                        fontSize="large"
                        color="primary"
                      />
                    </a>
                  </IconButton>
                </Tooltip>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};
