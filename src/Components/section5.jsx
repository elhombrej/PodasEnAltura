import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import Zoom from "react-reveal/Zoom";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useTheme } from "@mui/material/styles";

export function Section5() {
  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        direction: { sm: "row", xs: "column" },
      }}
      justifyContent="space-evenly"
      alignItems="center"
      spacing={3}
    >
      <Grid item sm={6} xs={12} sx={{ display: { sm: "flex", xs: "none" } }}>
        <Zoom>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="../images/job-img-7.jpg"
              alt="image"
              style={{
                height: "100%",
                width: "60%",
                borderRadius: "50px 50px 5px 50px",
                boxShadow: "10px 10px",
              }}
            />
          </Box>
        </Zoom>
      </Grid>

      <Grid item sm={6} xs={12}>
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={5}
        >
          <Grid item>
            <Typography
              sx={{
                typography: { xs: "h6", sm: "h5", md: "h4", lg: "h3" },
              }}
              fontWeight="bold"
            >
              CONTACTENOS
            </Typography>
          </Grid>

          <Grid item>
            <Button
              size="large"
              variant="contained"
              startIcon={<CallIcon />}
              href="tel:1169066196"
            >
              Llamar
            </Button>
          </Grid>

          <Grid item>
            <Button
              size="large"
              variant="contained"
              sx={{
                backgroundColor: "#4caf50",
              }}
              startIcon={<WhatsAppIcon />}
              href="https://api.whatsapp.com/send?phone=+5491169066196&text=Hola%20Salvador,%20Me%20comunico%20porque%20visite%20la%20página%20web%20de%20El%20Mapache%20-%20Podas"
            >
              WhatsApp
            </Button>
          </Grid>

          <Grid item>
            <Button
              size="large"
              variant="contained"
              sx={{
                backgroundColor: "#9c27b0",
              }}
              startIcon={<InstagramIcon />}
              href="https://www.instagram.com/salvapodasenaltura/?hl=es"
            >
              Instagram
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        md={4}
        sm={5}
        xs={12}
        sx={{ display: { sm: "none", xs: "block" } }}
      >
        <Box
          style={{
            width: "100vw",
            margin: "auto",
            overflow: "hidden",
            position: "relative",
            height: "60vh",
          }}
        >
          <Zoom>
            <img
              src="../images/job-img-7.jpg"
              alt="image"
              sx={{
                left: "50%",
                marginLeft: "-200px",
                position: "absolute",
              }}
              style={{
                height: "100vh",
                width: "90%",
                boxShadow: "10px 10px",
                margin:'5%',
                borderRadius: "50px 00px 0px 0px",

              }}
            />
          </Zoom>
        </Box>
      </Grid>
    </Grid>
  );
}
