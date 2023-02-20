import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Zoom from "react-reveal/Zoom";

export function Section4() {
  return (
    <Grid
      container
      sx={{
        direction: { sm: "row", xs: "column" },
      }}
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Grid item md={4} sm={5} xs={12} margin="5%">
        <Typography
          sx={{
            typography: { xs: "h6", sm: "h5", md: "h4", lg: "h3" },
          }}
          fontWeight="bold"
        >
          Estamos al alcance de todo Zona Norte
        </Typography>
        <br />

        <Typography
          sx={{
            typography: "body",
          }}
        >
          Cubrimos todo Vicente Lopez, Olivos, Martinez, Acassuso, San Isidro,
          Béccar, Boulogne, Munro, Villa Adelina y Alrededores.
        </Typography>
        <br />

        <Typography
          sx={{
            typography: "body",
          }}
        >
          No dude en consultarnos ante cualquier duda.
        </Typography>
        <br />

        <Typography
          sx={{
            typography: "body",
          }}
        >
          En EL MAPACHE estamos a la espera para ayudarlo con su necesidad.
        </Typography>
      </Grid>

      <Grid
        item
        md={4}
        sm={5}
        xs={12}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <Zoom>
          <img
            src="../images/zona-norte-gba.png"
            alt="image"
            style={{
              height: "100%",
              width: "90%",
              margin: "5%",
              boxShadow:'10px 10px'

            }}
          />
        </Zoom>
      </Grid>
      <Grid
        item
        md={4}
        sm={5}
        xs={12}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Zoom>
          <img
            src="../images/zona-norte-gba.png"
            alt="image"
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "50px 50px 50px 5px",
              boxShadow:'10px 10px'
            }}
          />
        </Zoom>
      </Grid>
    </Grid>
  );
}
