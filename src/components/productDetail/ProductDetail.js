// src/components/ProductDetail.js

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid2 } from "@mui/material";
import Paper from "@mui/material/Paper";
// import Typography from "@mui/material";
import data from "./response.json";
// import ProductCarousel from "./ProductCarousel";
import ImageText from "../ImageText";
import ImageTextReverse from "../ImageTextReverse";
import ProductInformation from "./ProductInformation";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint
    setProduct(data);
  }, []);
  console.log(product);

  if (!product) return <h2>Loading...</h2>;

  return (
    <Container maxWidth="lg">
      <Box component="section">
        <Container>
          <Grid2
            container
            spacing={12}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <Grid2 size={{ xs: 10, md: 5 }} sx={{ bgcolor: "lightgrey" }}>
              <Box display="flex">
                <Box m="auto" sx={{ width: "100%", height: "406px" }}>
                  <img
                    src="https://images.dailyobjects.com/marche/product-images/1809/dailyobjects-surge-magnetic-wireless-battery-pack-images/DailyObjects-SURGE-Magnetic-Wireless-Battery-Pack-2nd.png?tr=cm-pad_resize,v-3,w-640,h-503,dpr-1"
                    alt="Product"
                    width="100%"
                    height="auto"
                  />
                </Box>
              </Box>
            </Grid2>
            <Grid2
              size={{
                xs: 12,
                md: 7,
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  marginBottom: 0,
                  height: 300,
                  overflow: "auto",
                  scrollbarWidth: "none",
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                  "-ms-overflow-style": "none",
                }}
              >
                <ProductInformation />
              </Paper>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
      <Box component="section">
        <ImageTextReverse />
        <ImageText />
        <ImageTextReverse />
        <ImageText />
        <ImageTextReverse />
        <ImageText />
        <ImageTextReverse />
        <ImageText />
      </Box>
    </Container>
  );
};

export default ProductDetail;
