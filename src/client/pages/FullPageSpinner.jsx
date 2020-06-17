import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
}));
function FullPageSpinner() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h2" gutterBottom={true}>
        Hercules
      </Typography>
      <CircularProgress size={60} thickness={5} />
    </Container>
  );
}

export default FullPageSpinner;
