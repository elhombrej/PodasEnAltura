import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

export function Section4() {
  return (
    <Paper elevation={0}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sm={6} xs={12}>
          <Typography
            sx={{
              typography: "h6",
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
            Hasta que no resolvamos su problema, no descansaremos!
          </Typography>
          <br />

          <Typography
            sx={{
              typography: "body",
            }}
          >
            En EL MAPACHE estamos a la espera para ayudarlo con su necesidad.
            Hasta que no resolvamos su problema, no descansaremos!
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

        <Grid item sm={6} xs={12}>
          <Typography variant="h5" fontWeight="bold">
            Podadores Profesionales
          </Typography>

          <img src="../images/img5.jpg" alt="image" />
        </Grid>
      </Grid>
    </Paper>
  );
}
