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
          2023 - EL MAPACHE - Poda de Arboles en Altura
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography
          fontFamily="monospace"
          sx={{ fontSize: { xs: "9px", sm: "15px" }}}
        >
          Page developed by -
          <a href="https://portfolio-elhombrej.vercel.app" >
            Joaquinpadron@outlook.com
          </a>
          -
        </Typography>
      </Grid>
    </Grid>
  );
}
