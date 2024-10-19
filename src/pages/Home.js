// src/pages/HomePage.js

import React from "react";
import headerImage from "./images/abstract-colorful-powder-explosi.jpg";
import CategoryProducts from "../components/CategoryProducts";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Input } from '@mui/material';


const headerContainerStyles = {
  position: "relative",
};

const headerTextStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  fontSize: "30px",
  fontWeight: "bold",
};

const HomePage = () => {
  return (
    <div>
      <Container sx={headerContainerStyles}>
        <Card>
          <CardMedia
            component="img"
            height="350"
            image={headerImage}
            alt="Paella dish"
            sx={{
              cursor: "pointer",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        </Card>
        <div style={headerTextStyles}>
          <h3>Resonates Workplace</h3>
        </div>
      </Container>
      <Container sx={{justifyContent: "center"}}>
        <Input placeholder="find ideas"/>
      </Container>
      <CategoryProducts />
    </div>
  );
};

export default HomePage;
