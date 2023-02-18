import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

export function Section0() {
  return (
    <Paper elevation={0}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography
            sx={{
              typography: { sm: "h6", md: "h5" },
            }}
            fontWeight="bold"
          >
            Respuesta Rápida y en el Día
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            sx={{
              typography: { sm: "h6", md: "h5" },
            }}
            fontWeight="bold"
          >
            Precios Honestos por Adelantado
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            sx={{
              typography: { sm: "h6", md: "h5" },
            }}
            fontWeight="bold"
          >
            Trabajos Rápidos y Garantizados
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            sx={{
              typography: { sm: "h6", md: "h5" },
            }}
            fontWeight="bold"
          >
            Podadores Profesionales
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
