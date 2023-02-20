import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";

export function Section0a() {
  return (
    <Paper elevation={0}>
      <Zoom>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12}>
            <Slide top cascade>
              <Typography
                sx={{
                  typography: { xs: "h4", sm: "h2", md: "h1" },
                }}
                fontWeight="bold"
              >
                EL MAPACHE
              </Typography>
            </Slide>
          </Grid>

          <Grid item xs={12}>
            <Slide top cascade>
              <Typography
                sx={{
                  typography: { xs: "h5", sm: "h4", md: "h3" },
                }}
                fontWeight="bold"
              >
                Poda de arboles en altura
              </Typography>
            </Slide>
          </Grid>

          <Grid item>
            <Typography
              sx={{
                typography: { xs: "h6", sm: "h5", md: "h4" },
              }}
              fontWeight="bold"
            >
              En toda zona Norte Bs. As.
            </Typography>
          </Grid>

          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={12} sm={4}>
                <ul>
                  <li>
                    <Typography variant="h6">
                      Servicio de Podas en Altura
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="h6">
                      Extracción y Tala de Arboles
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="h6">Personal Asegurado</Typography>
                  </li>
                </ul>
              </Grid>

              <Grid item xs={12} sm={4}>
                <ul>
                  <li>
                    <Typography variant="h6">Poda en General</Typography>
                  </li>
                  <li>
                    <Typography variant="h6">
                      Presupuesto a Domicilio SIN CARGO
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="h6">Trabajos de riesgo</Typography>
                  </li>
                </ul>
              </Grid>

              <Grid item xs={12} sm={4}>
                <ul>
                  <li>
                    <Typography variant="h6">Hogar y Comercial</Typography>
                  </li>
                  <li>
                    <Typography variant="h6">Precios Accesibles</Typography>
                  </li>
                  <li>
                    <Typography variant="h6">
                      Trabajos Rápidos y Prolijos
                    </Typography>
                  </li>
                </ul>
              </Grid>
            </Grid>
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
        </Grid>
      </Zoom>
    </Paper>
  );
}
