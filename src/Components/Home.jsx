import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { Hom } from "./Hom";
import { Section1 } from "./section1";
import { Section2 } from "./section2";
import { Section0a } from "./section0a";
import { Section4 } from "./section4";
import { Section5 } from "./section5";
import { Section6 } from "./section6";
import { Section7 } from "./section7";
import Slide from "react-reveal/Slide";

export function Home({ mode, setMode }) {
  return (
    <Paper
      sx={{
        minHeight: "100vh",
        // minWidth: '100vw',
        overflow:'clip'
      }}
      xs={12}
    >
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <Section0a mode={mode} setMode={setMode} />
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
          <Section6 />
        </Grid>

        <Grid item>
          <Section7 />
        </Grid>
      </Grid>
    </Paper>
  );
}
