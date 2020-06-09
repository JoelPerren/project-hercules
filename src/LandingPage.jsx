import React from "react";
import { Container, Grid, Typography, makeStyles } from "@material-ui/core";
import SignupForm from "./SignupForm";
import HeroText from "./HeroText";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "lg",
    paddingTop: 120,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
      maxWidth: "90%",
    },
  },
  hero_grid_container: {
    marginBottom: 300,
  },
  hero_form: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  features_grid_container: {},
}));

function LandingPage() {
  const classes = useStyles();
  return (
    <Container component="main" className={classes.container}>
      <Grid
        container
        spacing={4}
        justify="space-between"
        className={classes.hero_grid_container}
      >
        <Grid item sm={12} md={6}>
          <HeroText />
        </Grid>
        <Grid item sm={12} md={6} className={classes.hero_form}>
          <SignupForm />
        </Grid>
        {/* Bottom Half */}
      </Grid>
      <Grid
        container
        spacing={4}
        justify="space-between"
        className={classes.features_grid_container}
      >
        <Grid item sm={12}>
          <HeroText />
        </Grid>
        <Grid item sm={12} md={3} className={classes.hero_form}>
          <SignupForm />
        </Grid>
        <Grid item sm={12} md={3} className={classes.hero_form}>
          <SignupForm />
        </Grid>
        <Grid item sm={12} md={3} className={classes.hero_form}>
          <SignupForm />
        </Grid>
      </Grid>
    </Container>
  );
}

export default LandingPage;
