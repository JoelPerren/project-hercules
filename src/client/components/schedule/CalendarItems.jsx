import React from 'react';
import PropType from 'prop-types';
import { makeStyles, Grid } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/en-gb';

const useStyles = makeStyles((theme) => ({
  calendar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  },
  itemContainer: {
    flexWrap: 'nowrap',
  },
  dateCircle: {
    background: theme.palette.background.paper,
    height: '45px',
    width: '45px',
    textAlign: 'center',
    lineHeight: '45px',
    borderRadius: '50%',
    marginBottom: theme.spacing(4),
  },
  dateCircleToday: {
    background: theme.palette.secondary.main,
  },
  today: {
    color: theme.palette.text.primary,
  },
  weekday: {
    marginBottom: theme.spacing(1),
  },
  workoutItem: {
    background: theme.palette.background.paper,
    width: '100%',
    borderRadius: '10px',
    padding: '10px',
    marginBottom: theme.spacing(2),
  },
  workoutItemToday: { background: theme.palette.secondary.main },
}));

function CalendarItems({ date }) {
  const classes = useStyles();

  const getWeekDates = () => {
    const weekStart = date.clone().startOf('isoWeek');

    const weekDates = [];

    for (let i = 0; i < 7; i += 1) {
      weekDates.push(moment(weekStart).add(i, 'd'));
    }
    return weekDates;
  };

  const calendarItems = getWeekDates().map((momentDate) => {
    const active = moment().isSame(momentDate, 'd');
    const weekday = momentDate.format('ddd').toUpperCase();
    const dayOfMonth = momentDate.format('D');

    return (
      <Grid
        key={weekday}
        item
        xs
        className={
          active
            ? `${classes.calendar} ${classes.today}`
            : `${classes.calendar}`
        }
      >
        <div className={classes.weekday}>{weekday}</div>
        <div
          className={
            active
              ? `${classes.dateCircle} ${classes.dateCircleToday}`
              : `${classes.dateCircle}`
          }
        >
          {dayOfMonth}
        </div>
        <div
          className={
            active
              ? `${classes.workoutItem} ${classes.workoutItemToday}`
              : `${classes.workoutItem}`
          }
        >
          Placeholder
        </div>
        <div
          className={
            active
              ? `${classes.workoutItem} ${classes.workoutItemToday}`
              : `${classes.workoutItem}`
          }
        >
          Placeholder
        </div>
      </Grid>
    );
  });

  return (
    <Grid container spacing={3} className={classes.itemContainer}>
      {calendarItems}
    </Grid>
  );
}

CalendarItems.propTypes = {
  date: PropType.instanceOf(Date).isRequired,
};

export default CalendarItems;
