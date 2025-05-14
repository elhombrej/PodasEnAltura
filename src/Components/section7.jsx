import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

export function Section7() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Typography sx={{ typography: "body" }}>
          EL MAPACHE - Poda de Arboles en Altura
        </Typography>
      </Grid>
    </Grid>
  );
}
