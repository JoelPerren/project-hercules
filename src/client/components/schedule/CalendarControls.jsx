import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import "moment/locale/en-gb";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    marginBottom: theme.spacing(2),
  },
  heading: {
    flexGrow: 1,
  },
  controls: {
    flexBasis: "auto",
    flexGrow: 0,
    display: "flex",
    alignItems: "center",
  },
  label: {
    marginRight: theme.spacing(1),
  },
  typeButton: { minWidth: "70px" },
}));

function CalendarControls({ weeksFromToday, setWeeksFromToday, date }) {
  const classes = useStyles();
  const [view, setView] = useState("Week");

  const backAWeek = () => {
    setWeeksFromToday(weeksFromToday - 1);
  };

  const forwardAWeek = () => {
    setWeeksFromToday(weeksFromToday + 1);
  };

  const toggleView = () => {
    switch (view) {
      case "Week":
        setView("Month");
        break;
      case "Month":
        setView("Day");
        break;
      case "Day":
        setView("Week");
        break;
      default:
        break;
    }
  };

  const label = () => {
    let monthAtStartOfWeek = date.clone().startOf("w").format("MMM");
    let monthAtEndOfWeek = date.clone().endOf("w").format("MMM");
    let label;
    if (monthAtStartOfWeek === monthAtEndOfWeek) {
      label = `${date.format("MMMM")} ${date.format("YYYY")}`;
    } else {
      label = `${monthAtStartOfWeek} — ${monthAtEndOfWeek} ${date.format(
        "YYYY"
      )}`;
    }

    return label;
  };

  return (
    <Grid container spacing={3} className={classes.header}>
      <Grid item xs className={classes.heading}>
        <Typography variant="h4" color="primary">
          Workout Schedule
        </Typography>
      </Grid>
      <Grid item xs className={classes.controls}>
        <Typography
          color={"textSecondary"}
          display="inline"
          className={classes.label}
        >
          {label()}
        </Typography>
        <IconButton size="small" color="primary" onClick={backAWeek}>
          <ArrowBackIosOutlinedIcon />
        </IconButton>
        <Button
          color="primary"
          onClick={toggleView}
          className={classes.typeButton}
        >
          {view}
        </Button>
        <IconButton size="small" color="primary" onClick={forwardAWeek}>
          <ArrowForwardIosOutlinedIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default CalendarControls;
