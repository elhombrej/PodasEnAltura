import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import Zoom from "react-reveal/Zoom";

export function Section1() {
  return (
    <Grid
      container
      sx={{
        direction: { sm: "row", xs: "column" },
      }}
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Grid item md={4} sm={5} xs={12} sx={{ margin: { xs: "5%", sm: 0 } }}>
        <Typography
          sx={{
            typography: { xs: "h6", sm: "h5", md: "h4", lg: "h3" },
          }}
          fontWeight="bold"
        >
          ¿Esta necesitando quien realice poda de Arboles en zona norte de
          Buenos Aires?
        </Typography>
        <br />
        <Typography
          sx={{
            typography: "body",
          }}
        >
          En EL MAPACHE estamos listos para ayudarlo. Podadores profesionales,
          experimentados y altamente calificados para proveer servicios en
          hogares y comercios.
        </Typography>
      </Grid>

      <Grid
        item
        md={4}
        sm={5}
        xs={12}
        sx={{ display: { sm: "block", xs: "none" } }}
      >
        <Zoom>
          <img
            src="../images/mai-img-1.jpg"
            alt="image"
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "50px 50px 50px 5px",
              boxShadow: "10px 10px ",
            }}
          />
        </Zoom>
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
              src="../images/mai-img-1.jpg"
              alt="image"
              style={{
                height: "100vh",
                width: "90%",
                boxShadow: "10px 10px",
                margin:'5%',
                borderRadius: "50px 0px",

              }}
              sx={{
                left: "50%",
                marginLeft: "-200px",
                position: "absolute",
              }}
            />
          </Zoom>
        </Box>
      </Grid>
    </Grid>
  );
}
