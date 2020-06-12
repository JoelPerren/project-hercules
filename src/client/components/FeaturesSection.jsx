import React from "react";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";
import FeatureCard from "./FeatureCard";
import UpdateIcon from "@material-ui/icons/Update";
import BuildIcon from "@material-ui/icons/Build";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import backgroundImg from "../images/unsplash-dumbell_rack.jpg";

const useStyles = makeStyles((theme) => ({
  section: {
    background: theme.palette.secondary.main,
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "100%",
    boxShadow: `inset 0 0 0 1000px rgba(25,26,40,.9)`,
  },
  container: {
    maxWidth: "lg",
    paddingTop: 120,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
      maxWidth: "90%",
    },
  },
  features_grid_container: {
    paddingBottom: 100,
  },
  feature_card: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
}));

const featureCards = [
  {
    icon: <UpdateIcon />,
    title: "Track your exercises",
    content: [
      "Hercules helps you keep track of how your performance has improved over time by providing detailed statistics for all of your favourite exercises.",
      "Input or let us estimate your one rep max and Hercules provides rep and set suggestions to meet your training requirements and help you reach your goals. ",
    ],
  },
  {
    icon: <BuildIcon />,
    title: "Build ballanced workouts",
    content: [
      "Combine exercises into challenging workouts using Hercules’ helpful templates or build them yourself from scratch.",
      "Hercules provides helpful info on which muscle groups you are challenging and which need a bit more attention.",
      "At the end of a workout Hercules can help you identify exercises where you can increase the weight so that you are always pushing yourself further.",
    ],
  },
  {
    icon: <TrackChangesIcon />,
    title: "Program to reach your goals",
    content: [
      "Create structured cyclic training programs incorporating progressive overload techniques and planned rest to target specific goals and achieve your peak performance.",
      "Hercules allows you to define long term goals and then helps put together a customised training plan to reach them as quickly and safely as possible.",
    ],
  },
];

function Features() {
  const classes = useStyles();
  return (
    <Box className={classes.section}>
      <Container className={classes.container}>
        <Grid
          container
          spacing={4}
          justify="space-between"
          alignItems="flex-start"
          className={classes.features_grid_container}
        >
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              Level up your training with our tools
            </Typography>
          </Grid>
          {featureCards.map((card, index) => (
            <Grid
              item
              xs={12}
              md={4}
              className={classes.feature_card}
              key={index}
            >
              <FeatureCard
                key={index}
                icon={card.icon}
                heading={card.title}
                content={card.content}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Features;
