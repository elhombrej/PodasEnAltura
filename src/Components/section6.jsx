import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

export function Section6() {
  return (
    <Paper elevation={0}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Typography variant="h6" fontWeight="bold">
            EL MAPACHE - Poda de Arboles en Altura en Todo Zona Norte de Bs. As.
          </Typography>
          <br />
          <Typography
            sx={{
              typography: "body",
            }}
          >
            Teléfono: 1169066196 (Whatsapp)
          </Typography>
          <br />
          <Typography
            sx={{
              typography: "body",
            }}
          >
            Dirección: Av. Rivadavia 1709 - CABA
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <img
            src="../images/cards.png"
            alt="image"
            style={{ height: "50%", width: "50%" }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
