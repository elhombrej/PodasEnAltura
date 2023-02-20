import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

export function Section6() {
  return (
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={12} sm={6} md={4}>
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

        <Grid item xs={12} sm={6} md={4}>
          <img
            src="../images/cards.png"
            alt="image"
            style={{ height: "100%", width: "100%" }}
          />
        </Grid>
      </Grid>
  );
}
