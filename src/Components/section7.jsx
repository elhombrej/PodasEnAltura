import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

export function Section7() {
  return (
    <Paper elevation={0}>
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Typography sx={{ typography: "body" }}>
            © Copyright 2022 - EL MAPACHE - Poda de Arboles en Altura en Todo
            Zona Norte de Bs. As.
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
