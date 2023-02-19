import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";

export function Section5() {
  return (
    <Paper elevation={0}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sm={6} xs={12}>
          <img
            src="../images/img6.jpg"
            alt="image"
            style={{ height: "100%", width: "100%" }}
          />
        </Grid>

        <Grid item sm={6} xs={12}>
          <Typography
            sx={{
              typography: "h5",
            }}
            fontWeight="bold"
          >
            LLÁME O ENVÍE UN WHATSAPP
          </Typography>

          <Button
            size="large"
            variant="contained"
            startIcon={<CallIcon />}
            href="tel:1169066196"
          >
            Llamar
          </Button>

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
      </Grid>
    </Paper>
  );
}
