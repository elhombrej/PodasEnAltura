import { Grid, Paper, Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
import Zoom from "react-reveal/Zoom";


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

export function Hom() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  // const Container = styled.div`
  //   border: 1px solid red;
  //   position: relative;
  //   overflow: hidden;
  //   width: 300px;
  //   height: 150px;
  // `;
  // const CarouselUI = ({ children }) => <Container>{children}</Container>;
  // const Carousel = makeCarousel(CarouselUI);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Grid item xs={12} md={10}>
        <Typography variant="h5" fontWeight="bold">
          ¿Porque elegir EL MAPACHE?
        </Typography>
      </Grid>

      <Grid item xs={12} md={10}>
        <Box
          maxHeight="20px%"
          minHeight="20px"
          sx={{
            minWidth: "100vw",
            flexGrow: 1,
          }}
        >
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {phrases.map((step, index) => (
              <Box
                key={phrases.label}
                elevation={0}
                sx={{
                  display: "flex",
                  maxHeight: "70px",
                  minHeight: "70px",
                }}
              >
                {Math.abs(activeStep - index) <= 2 ? (
                  <Typography variant="h5">
                    {phrases[activeStep].label}
                  </Typography>
                ) : null}
              </Box>
            ))}
          </AutoPlaySwipeableViews>
        </Box>
      </Grid>
    </Grid>
  );
}
