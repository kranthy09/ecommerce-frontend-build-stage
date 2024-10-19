import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";

export default function RunContainer() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="576px"
          height="auto"
          image="https://cdn.pixabay.com/photo/2024/01/02/14/58/leaf-8483401_640.jpg"
          alt="green iguana"
        />
      </CardActionArea>
    </Card>
  );
}
