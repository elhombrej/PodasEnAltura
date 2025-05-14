import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Zoom from "react-reveal/Zoom";

export function Section6() {
  return (
    <Zoom bottom>
      <Paper variant="outlined">
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" fontWeight="bold">
              EL MAPACHE
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              Poda de Arboles en Altura
            </Typography>
            <br />
            <Typography
              sx={{
                typography: "body",
              }}
            >
              Teléfono: 1154917621 (Whatsapp)
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

          <Grid item xs={12} sm={6}>
            <img
              src="../images/cards.png"
              alt="image"
              style={{ height: "100%", width: "100%" }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Zoom>
  );
}
