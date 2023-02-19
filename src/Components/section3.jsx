import { Grid, Paper, Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const phrases = [
  {
    label: "Precios Fijos",
  },
  {
    label: "Podadores Profesionales",
  },
  {
    label: "Respetamos su Lugar",
  },
  {
    label: "Servicio Rápido",
  },
  {
    label: "Honestidad y Seriedad",
  },
  {
    label: "Trabajos Garantizados",
  },
  {
    label: "Respuesta Rápida y en el Día",
  },
  {
    label: "Precios Honestos por Adelantado",
  },
  {
    label: "Trabajos Rápidos y Garantizados",
  },
];

export function Section3() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Paper elevation={0}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="h5" fontWeight="bold">
            ¿Porque elegir EL MAPACHE? Es simple.
          </Typography>
        </Grid>

        <Grid item sm={6} xs={12}>
          <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {phrases.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Paper
                      square
                      elevation={0}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        height: 50,
                        pl: 2,
                        bgcolor: "background.default",
                      }}
                    >
                      <Typography variant="h5">
                        {phrases[activeStep].label}
                      </Typography>
                    </Paper>
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
