import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

export function Section1() {
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
              typography: "h5",
            }}
            fontWeight="bold"
          >
            Poda de Arboles en Altura en Todo Zona Norte de Bs. As.
          </Typography>
          <br />
          <Typography
            sx={{
              typography: "body",
            }}
          >
            ¿Esta buscando quien realice Poda de Arboles en Altura en Todo Zona
            Norte de Bs. As.? En EL MAPACHE - PODA DE ARBOLES estamos listos
            para ayudarlo. Podadores profesionales, experimentados y altamente
            calificados para proveer servicios en hogares y comercios en Todo
            Zona Norte de Bs. As.
          </Typography>
        </Grid>

        <Grid item sm={6} xs={12}>
          <img src="../public/images/img6.jpg" alt="image" />
        </Grid>
      </Grid>
    </Paper>
  );
}
