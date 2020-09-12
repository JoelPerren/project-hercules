import React from 'react';
import { Container } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import momentPropTypes from 'react-moment-proptypes';

const useStyles = makeStyles((theme) => ({
  calendar: {
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.text.secondary,
  },
  today: {
    color: theme.palette.text.primary,
  },
  weekday: {
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
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
  workoutItem: {
    background: theme.palette.background.paper,
    width: '100%',
    borderRadius: '10px',
    padding: '10px',
    marginBottom: theme.spacing(2),
  },
  workoutItemToday: {
    background: theme.palette.secondary.main
  },
}));

function CalendarContentDay({ currentDate, selectedDate }) {
  const active = currentDate.isSame(selectedDate, 'd');
  const classes = useStyles();

  return (
    <Container
      disableGutters
      maxWidth={false}
      className={
        active
          ? `${classes.calendar} ${classes.today}`
          : `${classes.calendar}`
      }
      aria-label="day-calendar"
    >
      <div className={classes.weekday}>
        {selectedDate.format('ddd').toUpperCase()}
      </div>
      <div
        className={
          active
            ? `${classes.dateCircle} ${classes.dateCircleToday}`
            : `${classes.dateCircle}`
        }
      >
        {selectedDate.format('D')}
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
    </Container>
  );
}

CalendarContentDay.propTypes = {
  currentDate: momentPropTypes.momentObj.isRequired,
  selectedDate: momentPropTypes.momentObj.isRequired,
};

export default CalendarContentDay;
