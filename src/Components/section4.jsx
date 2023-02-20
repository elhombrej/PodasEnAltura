import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

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
        <Grid item md={4} sm={5} xs={12}>
          <Typography
            sx={{
              typography: "h5",
            }}
            fontWeight="bold"
          >
            Cubrimos todo Vicente Lopez, Olivos, Martinez, Acassuso, San Isidro,
            Béccar, Boulogne, Munro, Villa Adelina y Alrededores
          </Typography>
          <br />

          <Typography
            sx={{
              typography: "body",
            }}
          >
            Si esta necesitando realizar algún poda en general llámenos al
            1169066196.
          </Typography>
          <br />

          <Typography
            sx={{
              typography: "body",
            }}
          >
            En EL MAPACHE estamos a la espera para ayudarlo con su necesidad.
          </Typography>
          <br />

          <Typography
            sx={{
              typography: "body",
            }}
          >
            Hasta que no resolvamos su problema, no descansaremos!
          </Typography>
        </Grid>

        <Grid item md={4} sm={5} xs={12}>
          <img
            src="../images/img5.jpg"
            alt="image"
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "50px 50px 5px 50px",
            }}
          />
        </Grid>
      </Grid>
  );
}
