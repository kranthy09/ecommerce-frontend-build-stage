// src/components/ProductDetail.js

import React from "react";
import Box from "@mui/material/Box";
import { Grid2, Paper } from "@mui/material";
// import Typography from "@mui/material";

const ProductCarousel = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Paper elevation={1}>
            <Box display="flex">
              {/* <Box m="auto">1. Box (margin: auto)</Box> */}
              <Box m="auto" sx={{ width: "300px", height: "auto" }}>
                <img
                  src="https://www.ikea.com/ca/en/images/products/harvmatta-letter-tray-anthracite__1275740_pe930628_s5.jpg?f=xxs"
                  alt="Product"
                  width="100%"
                  height="auto"
                />
              </Box>
            </Box>
          </Paper>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Paper elevation={1}>
            <Box>
              <h1>Lorem ipsum dolor sit amet, consectetur</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                facilisis orci ut dui bibendum, eget congue orci fringilla. Cras
                ac lectus euismod, elementum velit non, bibendum mi. Ut sit amet
                convallis enim. Etiam mollis orci ut lectus laoreet. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed facilisis orci
                ut dui bibendum, eget congue orci fringilla. Cras ac lectus
                euismod, elementum velit non, bibendum mi. Ut sit amet convallis
                enim. Etiam mollis orci ut lectus laoreet.
              </p>
            </Box>
          </Paper>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default ProductCarousel;
