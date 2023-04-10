import React from "react";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import IconButton from "@mui/material/IconButton";
export const DownloadBtn = ({ url, fileName }) => {
  const handleDownload = () => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
      });
  };

  return (
    <IconButton
      size="large"
      className="download-btn"
      onClick={handleDownload}
      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
      aria-label={`info about @{filename}}`}
    >
      <DownloadForOfflineIcon fontSize="large" />
    </IconButton>
  );
};
