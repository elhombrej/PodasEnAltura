import { Button, Grid, Paper, Typography, Box } from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  flexDirection: "column",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  color: theme.palette.common.white,
  margin: 20,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export function Section0a() {
  return (
    <Paper elevation={0}>
      <Zoom>
        <Grid item>
          <Box
            sx={{
              width: "100vw",
              height: "80vh",
            }}
          >
            <ImageButton
              focusRipple
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <ImageSrc
                style={{ backgroundImage: `url(${"/images/imgA.jpg"})` }}
              />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Box
                  sx={{
                    width: { xs: "60%", sm: "30%" },
                  }}
                >
                  <Zoom>
                    <img
                      src="../images/img0.jpg"
                      alt="mapacheLogo"
                      style={{ height: "100%", width: "100%" }}
                    />
                  </Zoom>
                </Box>

                <Typography
                  component="span"
                  color="inherit"
                  sx={{
                    typography: { xs: "h4", sm: "h2", md: "h1" },
                    position: "relative",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  EL MAPACHE
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
                <Slide top cascade>
                  <Typography
                    sx={{
                      typography: { xs: "h6", sm: "h5", md: "h4" },
                    }}
                    fontWeight="bold"
                  >
                    Poda de arboles en altura
                  </Typography>
                </Slide>
                <Typography
                  sx={{
                    typography: { xs: "body" },
                  }}
                  fontWeight="bold"
                >
                  En toda zona Norte Bs. As.
                </Typography>
              </Image>
            </ImageButton>
          </Box>
        </Grid>

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >

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
