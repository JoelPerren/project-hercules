import React from "react";
import { makeStyles, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Schedule() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Toolbar />
      <div>TestyTestTest</div>
    </main>
  );
}

export default Schedule;
