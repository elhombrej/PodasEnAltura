import { Grid, Typography } from "@mui/material";
import React from "react";

export function Section1() {
  return (
    <Grid
      container
      sx={{
        direction: { sm: "row", xs: "column" },
      }}
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Grid item md={4} sm={5} xs={12}>
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

      <Grid item md={4} sm={5} xs={12}>
        <img
          src="../images/img6.jpg"
          alt="image"
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "50px 50px 5px 50px",
          }}
        />
      </Grid>
    </Grid>
  );
}
