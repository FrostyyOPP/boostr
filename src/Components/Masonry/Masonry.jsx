import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Pagination from "@mui/material/Pagination";
import "./masonry.css";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { DownloadBtn } from "../DownloadBtn/DownloadBtn";

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
  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.title,
  });

  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const imagesPerPage = 10;
  const totalImages = images.length;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  useEffect(() => {
    // Set your access key and secret key
    const accessKey = "hN5FEyWzF6fPqNocmq_bfupUrDsxrrYh1N-dB59uwrE";

    // Define the API endpoint and query parameters
    const apiUrl = "https://api.unsplash.com/photos";
    const queryParams = `?client_id=${accessKey}&per_page=50`;

    // Fetch the images from the API endpoint
    fetch(apiUrl + queryParams)
      .then((response) => {
        // Check if the response was successful
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse the response as JSON
        return response.json();
      })
      .then((data) => {
        // Set the images state with the fetched data
        setImages(data);
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch operation
        console.error("Error fetching images:", error);
      });
  }, []);
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

        {currentImages.map((imageData) => (
          <ImageListItem key={imageData.id}>
            <img
              src={`${imageData.urls.regular}`}
              srcSet={`${imageData.urls.regular}`}
              alt={imageData.alt_description}
              loading="lazy"
            />
            <ImageListItemBar
              title={imageData.alt_description}
              subtitle={imageData.user.first_name}
              actionIcon={
                <DownloadBtn
                  url={imageData.urls.full}
                  fileName={imageData.alt_description}
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
