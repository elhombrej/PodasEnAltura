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
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";

export function Home() {
  return (
    <Paper elevation={0}>
      <Zoom>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          spacing={6}
        >
          <Grid item xs={12}>
            <Section3 />
          </Grid>

          <Grid item>
            <Slide top cascade>
              <Typography
                sx={{
                  typography: { xs: "h5", sm: "h3", md: "h2", lg: "h2" },
                }}
                fontWeight="bold"
              >
                PODA DE ARBOLES EN ALTURA
              </Typography>
            </Slide>
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
            <Zoom>
              <img src="../images/img0.jpg" alt="image" />
            </Zoom>
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
              Hogar y Comercial - Precios Accesibles - Trabajos Rápidos y
              Prolijos
            </Typography>
          </Grid>

          <Grid item>
            <Bounce>
              <Button
                size="large"
                variant="contained"
                color="success"
                startIcon={<WhatsAppIcon />}
                href="https://api.whatsapp.com/send?phone=+5491169066196&text=Hola%20Salvador,%20Me%20comunico%20porque%20visite%20la%20página%20web%20de%20El%20Mapache%20-%20Podas"
              >
                Enviar WhatsApp
              </Button>
            </Bounce>
          </Grid>

          <Grid item>
            <Section0 />
          </Grid>

          <Grid item>
            <Slide left>
              <Section1 />
            </Slide>
          </Grid>

          <Grid item>
            <Slide right>
              <Section2 />
            </Slide>
          </Grid>

          <Grid item>
            <Slide left>
              <Section4 />
            </Slide>
          </Grid>

          <Grid item>
            <Slide right>
              <Section5 />
            </Slide>
          </Grid>

          <Grid item>
            <Slide bottom>
              <Section6 />
            </Slide>
          </Grid>

          <Grid item>
            <Slide bottom>
              <Section7 />
            </Slide>
          </Grid>
        </Grid>
      </Zoom>
    </Paper>
  );
}
