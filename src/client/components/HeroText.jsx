import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  hero_heading: {
    marginBottom: 40,
  },
}));

function HeroText() {
  const classes = useStyles();
  return (
    <div>
      <Typography
        variant="h2"
        color="primary"
        gutterBottom={true}
        className={classes.hero_heading}
      >
        Program your workouts to achieve peak performance
      </Typography>
      <Typography variant="body1" paragraph={true}>
        Hercules is a simple and beautiful workout planner offering you all of
        the tools you need to take your training to the next level and achieve
        your full potential.
      </Typography>
      <Typography>
        Working on mobile and desktops, Hercules is under active development and
        completely free so give it a try and let us know what you love and what
        you think could be improved.
      </Typography>
    </div>
  );
}

export default HeroText;
