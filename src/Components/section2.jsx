import { Grid, Box , Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "img1",
    imgPath: "../images/img1.jpg",
  },
  {
    label: "img2",
    imgPath: "../images/img2.jpg",
  },
  {
    label: "img3",
    imgPath: "../images/img3.jpg",
  },
  {
    label: "img4",
    imgPath: "../images/img4.jpg",
  },
  {
    label: "img5",
    imgPath: "../images/img5.jpg",
  },
];

export function Section2() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Paper elevation={0}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >

        <Grid item sm={6} xs={12}>
          <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            {/* <Paper
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
              <Typography>{images[activeStep].label}</Typography>
            </Paper> */}
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
                        height: 350,
                        display: "block",
                        maxWidth: 250,
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
          </Box>
        </Grid>

        <Grid item sm={6} xs={12}>
          <Typography
            sx={{
              typography: "h5",
            }}
            fontWeight="bold"
          >
            EL MAPACHE ofrece variados servicios:
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
              <Typography variant="h6">
                Extracciones y Tala de Arboles
              </Typography>
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

      </Grid>
    </Paper>
  );
}
