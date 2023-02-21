import { Grid, Box, Button, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Zoom from "react-reveal/Zoom";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "img1",
    imgPath: "../images/job-img-1.jpg",
  },
  {
    label: "img2",
    imgPath: "../images/job-img-2.jpg",
  },
  {
    label: "img3",
    imgPath: "../images/job-img-3.jpg",
  },
  {
    label: "img4",
    imgPath: "../images/job-img-4.jpg",
  },
  {
    label: "img5",
    imgPath: "../images/job-img-5.jpg",
  },
  {
    label: "img8",
    imgPath: "../images/job-img-8.jpg",
  },
];

export function Section2() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Grid
        item
        md={4}
        sm={5}
        xs={12}
        sx={{ display: { sm: "block", xs: "none" } }}
      >
        <Zoom>
          <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 400,
                        display: "block",
                        overflow: "hidden",
                        width: "100%",
                      }}
                      style={{ borderRadius: "50px 50px 5px 50px" }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
          </Box>
        </Zoom>
      </Grid>

      <Grid item md={4} sm={5} xs={12} margin="5%">
        <Typography
          sx={{
            typography: { xs: "h6", sm: "h5", md: "h4", lg: "h3" },
          }}
          fontWeight="bold"
        >
          Ofrecemos distintos servicios
        </Typography>
        <br />
        <ul>
          <li>
            <Typography variant="h6">Mantenimiento de Parques</Typography>
          </li>

          <li>
            <Typography variant="h6">Poda de Arboles Altos</Typography>
          </li>

          <li>
            <Typography variant="h6">Podas de Todo Tipo</Typography>
          </li>

          <li>
            <Typography variant="h6">Extracciones y Tala de Arboles</Typography>
          </li>

          <li>
            <Typography variant="h6">Poda de Palmeras</Typography>
          </li>

          <li>
            <Typography variant="h6">Hogar e Industria</Typography>
          </li>

          <li>
            <Typography variant="h6">Trabajos Grandes y Pequeños</Typography>
          </li>
        </ul>
      </Grid>

      <Grid
        item
        md={4}
        sm={5}
        xs={12}
        sx={{ display: { sm: "none", xs: "block" } }}
      >
        <Zoom>
          <Box
            style={{
              width: "100vw",
              margin: "auto",
              overflow: "hidden",
              position: "relative",
              height: "80vh",
            }}
          >
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <img
                      sx={{
                        left: "50%",
                        marginLeft: "-200px",
                        position: "absolute",
                      }}
                      style={{
                        height: "100vh",
                        width: "90%",
                        margin: "5%",
                        borderRadius: "50px 0px",

                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
          </Box>
        </Zoom>
      </Grid>
    </Grid>
  );
}
