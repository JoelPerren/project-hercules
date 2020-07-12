import React, { useState, useMemo } from "react";
import { makeStyles } from "@material-ui/core";
import moment from "moment";
import "moment/locale/en-gb";
import CalendarControls from "./CalendarControls";
import CalendarItems from "./CalendarItems";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Calendar() {
  const classes = useStyles();
  const [weeksFromToday, setWeeksFromToday] = useState(0);
  const date = useMemo(() => moment().add(weeksFromToday, "w"), [
    weeksFromToday,
  ]);

  return (
    <div className={classes.root}>
      <CalendarControls
        weeksFromToday={weeksFromToday}
        setWeeksFromToday={setWeeksFromToday}
        date={date}
      />
      <CalendarItems date={date} />
    </div>
  );
}

export default Calendar;
