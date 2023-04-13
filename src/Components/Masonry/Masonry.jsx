import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Pagination from "@mui/material/Pagination";
import "./masonry.css";
import { DownloadBtn } from "../DownloadBtn/DownloadBtn";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const filters = [
  {
    title: "Trending",
    value: "Trending",
  },
  {
    title: "New",
    value: "New",
  },
  {
    title: "Dekstop",
    value: "Desktop",
  },
  {
    title: "Mobile",
    value: "Mobile",
  },
];
export const BasicMasonry = () => {
  // const filterOptions = createFilterOptions({
  //   matchFrom: "start",
  //   stringify: (option) => option.title,
  // });

  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const imagesPerPage = 10;
  const totalImages = images.length;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
  const [query, setQuery] = useState("new");
  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${query}&page=${totalPages}&per_page=80`,
        {
          headers: {
            Authorization:
              "563492ad6f917000010000013b998ff6ad0249dba3fe3ea53d5c58f3",
          },
        }
      );
      const data = await response.json();
      setImages((prevPhotos) => [...prevPhotos, ...data.photos]);
    };
    fetchPhotos();
  }, [query]);
  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.search.value);
  };

  const handlePageChange = (_, pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
  };

  return (
    <div className="mason-container">
      <div className="mas-head">
        <h1 className="mas-head-title">Free {query} Photos</h1>
        <div className="select-box">
          <FormControl>
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={query}
              label="Age"
              onChange={handleChange}
            >
              {filters.map((filter) => (
                <MenuItem value={filter.value}>{filter.title}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <ImageList>
        <ImageListItem key="Subheader" cols={2}></ImageListItem>

        {currentImages.map((imageData) => (
          <ImageListItem key={imageData.id}>
            <img
              src={`${imageData.src.original}`}
              srcSet={`${imageData.src.original}`}
              alt={imageData.alt}
              loading="lazy"
            />
            <ImageListItemBar
              title={imageData.alt}
              subtitle={imageData.photographer}
              actionIcon={
                <DownloadBtn
                  url={imageData.src.original}
                  fileName={imageData.alt}
                />
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        size="large"
        color="primary"
        style={{ marginTop: "2rem" }}
      />
    </div>
  );
};
