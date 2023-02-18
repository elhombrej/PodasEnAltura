import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

export function Section3() {
  return (
    <Paper elevation={0}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item
        xs={12}>
          <Typography variant="h5" fontWeight="bold">
            ¿Porque elegir EL MAPACHE? Es simple.
          </Typography>
        </Grid>

        <Grid item
        xs={12}
        sm={3}>
          <Typography
            sx={{
              typography: { sm: "h6", md: "h5" },
            }}
          >
            Precios Fijos
          </Typography>
        </Grid>

        <Grid item
        xs={12}
        sm={3}>
          <Typography
            sx={{
              typography: { sm: "h6", md: "h5" },
            }}
          >
            Somos Profesionales
          </Typography>
        </Grid>

        <Grid item
        xs={12}
        sm={3}>
          <Typography
            sx={{
              typography: { sm: "h6", md: "h5" },
            }}
          >
            Respetamos su Lugar
          </Typography>
        </Grid>

        <Grid item
        xs={12}
        sm={3}>
          <Typography
            sx={{
              typography: { sm: "h6", md: "h5" },
            }}
          >
            Servicio Rápido
          </Typography>
        </Grid>

        <Grid item
        xs={12}
        sm={3}>
          <Typography
            sx={{
              typography: { sm: "h6", md: "h5" },
            }}
          >
            Honestidad y Seriedad
          </Typography>
        </Grid>

        <Grid item
        xs={12}
        sm={3}>
          <Typography
            sx={{
              typography: { sm: "h6", md: "h5" },
            }}
          >
            Trabajos Garantizados
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
