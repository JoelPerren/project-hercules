import React from "react";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";
import SignupForm from "./SignupForm";
import HeroText from "./HeroText";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%231e2328' fill-opacity='0.11' fill-rule='evenodd'/%3E%3C/svg%3E")`,
  },
  container: {
    maxWidth: "lg",
    paddingTop: 120,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
      maxWidth: "90%",
    },
  },
  hero_grid_container: {
    paddingBottom: 300,
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

function Hero() {
  const classes = useStyles();
  return (
    <Box className={classes.section}>
      <Container className={classes.container}>
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
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;
