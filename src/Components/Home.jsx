import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Section0 } from "./section0";
import { Section1 } from "./section1";
import { Section2 } from "./section2";
import { Section3 } from "./section3";
import { Section4 } from "./section4";
import { Section5 } from "./section5";
import { Section6 } from "./section6";
import { Section7 } from "./section7";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export function Home() {
  return (
    <Paper elevation={0}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={6}
      >
        <Grid item>
          <Typography
            sx={{
              typography: { xs: "h5", sm: "h3", md: "h2", lg: "h2" },
            }}
            fontWeight="bold"
          >
            PODA DE ARBOLES EN ALTURA
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            sx={{
              typography: { xs: "h5", sm: "h3", md: "h2", lg: "h2" },
            }}
            fontWeight="bold"
          >
            En toda zona Norte Bs. As.
          </Typography>
        </Grid>

        <Grid item>
          <img src="../images/img0.jpg" alt="image" />
        </Grid>

        <Grid item>
          <Typography fontSize="h1">
            Servicio de Podas en Altura - Extracción y Tala de Arboles -
            Personal Asegurado
          </Typography>
        </Grid>

        <Grid item>
          <Typography fontSize="h1">
            Poda en General - Presupuesto a Domicilio SIN CARGO
          </Typography>
        </Grid>

        <Grid item>
          <Typography fontSize="h1">
            Hogar y Comercial - Precios Accesibles - Trabajos Rápidos y Prolijos
          </Typography>
        </Grid>

        <Grid item>
          <Button
            size="large"
            variant="contained"
            color="success"
            startIcon={<WhatsAppIcon />}
            href="https://api.whatsapp.com/send?phone=+5491169066196&text=Hola%20Salvador,%20Me%20comunico%20porque%20visite%20la%20página%20web%20de%20El%20Mapache%20-%20Podas"
          >
            Enviar WhatsApp
          </Button>
        </Grid>

        <Grid item>
          <Section0 />
        </Grid>

        <Grid item>
          <Section1 />
        </Grid>

        <Grid item>
          <Section2 />
        </Grid>

        <Grid item>
          <Section3 />
        </Grid>

        <Grid item>
          <Section4 />
        </Grid>

        <Grid item>
          <Section5 />
        </Grid>

        <Grid item>
          <Section6 />
        </Grid>

        <Grid item>
          <Section7 />
        </Grid>
      </Grid>
    </Paper>
  );
}
