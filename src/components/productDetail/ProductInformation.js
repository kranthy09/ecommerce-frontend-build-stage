import React from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AddCardIcon from "@mui/icons-material/AddCard";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import CachedIcon from "@mui/icons-material/Cached";
import Accordion from "@mui/material/Accordion";
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
  Button,
  AccordionSummary,
} from "@mui/material";
import TextField from "@mui/material/TextField";

const ProductInformation = () => {
  return (
    <Container>
      <Stack
        spacing={3}
        sx={{
          height: "100%",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6">Product Title + Extra Arguments more elobareted</Typography>
        <Typography>Rs. 5999</Typography>
        <Button variant="contained" color="primary">
          ADD TO CART
        </Button>
        <Box
          component="form"
          sx={{ "& > :not(style)": { width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Box>
        <Box>
          <Stack direction="row" spacing={3}>
            <Paper elevation={0}>
              <AccessTimeFilledIcon />
              <Typography>More Power</Typography>
            </Paper>
            <Paper elevation={0}>
              <AddCardIcon />
              <Typography>More Power</Typography>
            </Paper>
            <Paper elevation={0}>
              <CachedIcon />
              <Typography>More Power</Typography>
            </Paper>
            <Paper elevation={0}>
              <AppShortcutIcon />
              <Typography>More Power</Typography>
            </Paper>
          </Stack>
        </Box>
        <Box>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Accordion 1
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Nullam imperdiet, est sit amet elementum semper, justo
              ligula sagittis, turpis neque vestibulum tortor, in efficitur
              ligula urna in velit.
              <br />
              Lorem Ips et du lorem temp et dolor lore tellus et dolor lorem et
              dolor lorem temp et dolor lore tellus et dolor lorem temp et dolor
              sagittisse potenti. Done in felis just sed diam nonum vul tell
              consequ et dolor lorem temp et dolor lore tellus et dolor lorem
              temp et dolor
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Accordion 2
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              temp et dolor
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Accordion 3
            </AccordionSummary>
            <AccordionDetails>
                Ips et du lorem temp et dolor lore tellus et dolor lorem et
              dolor lorem temp et dolor lore tellus et dolor lorem temp et dolor
              sagittisse potenti. Done in felis just sed diam nonum vul tell
              consequ et dolor lorem temp et dolor lore tellus et dolor lorem
              temp et dolor
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Accordion 4
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur
              sagittisse potenti. Done in felis just sed diam nonum vul tell
              consequ et dolor lorem temp et dolor lore tellus et dolor lorem
              temp et dolor
            </AccordionDetails>
          </Accordion>
        </Box>
      </Stack>
    </Container>
  );
};

export default ProductInformation;
