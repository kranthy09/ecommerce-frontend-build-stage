import React from "react";
import RunContainer from "./RunContainer";
import { Box, Container, Grid2, Paper, Stack } from "@mui/material";
const ImageTextReverse = () => {
  return (
    <Container>
      <Grid2 container spacing={8} sx={{ padding: "20px" }}>
        <Grid2 item size={{ xs: 12, md: 6 }}>
          <Stack
            spacing={3}
            sx={{
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Paper elevation={0} sx={{ fontSize: "42px" }}>
              Grid Head box
            </Paper>
            <Paper elevation={0}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              facilisis orci ut dui bibendum, eget congue orci fringilla. Cras
              ac lectus euismod.
            </Paper>
          </Stack>
        </Grid2>
        <Grid2 item size={{ xs: 12, md: 6 }}>
          <Box display="flex" sx={{ bgcolor: "rebeccapurple" }}>
            <Box m="auto">
              <RunContainer />
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default ImageTextReverse;
