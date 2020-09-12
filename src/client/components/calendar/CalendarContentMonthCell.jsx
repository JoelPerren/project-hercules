import React from 'react';
import momentPropTypes from 'react-moment-proptypes';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cell: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    padding: theme.spacing(1),
    borderRight: `${theme.palette.background.paper} 1px solid`,
  },
  cellActive: {
    color: theme.palette.text.primary,
  },
  dateCircle: {
    background: theme.palette.background.paper,
    height: '30px',
    width: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    borderRadius: '50%',
    marginBottom: theme.spacing(1),
  },
  dateCircleActive: {
    background: theme.palette.secondary.main,
  },
  workoutItem: {
    background: theme.palette.background.paper,
    width: '100%',
    borderRadius: '10px',
    padding: '5px 10px 5px 10px',
    marginBottom: theme.spacing(1),
  },
  workoutItemActive: {
    background: theme.palette.secondary.main
  },
}));

function CalendarContentMonthCell({ currentDate, dayInWeek }) {
  const classes = useStyles();
  const active = dayInWeek.isSame(currentDate, 'd');

  return (
    <Grid
      item
      xs
      className={
        active
          ? `${classes.cell} ${classes.cellActive}`
          : `${classes.cell}`
        }
    >
      <div className={
        active
          ? `${classes.dateCircle} ${classes.dateCircleActive}`
          : `${classes.dateCircle}`
        }
      >
        { dayInWeek.format('D') }
      </div>
      <div
        className={
          active
            ? `${classes.workoutItem} ${classes.workoutItemActive}`
            : `${classes.workoutItem}`
        }
      >
        Placeholder
      </div>
    </Grid>
  );
}

CalendarContentMonthCell.propTypes = {
  currentDate: momentPropTypes.momentObj.isRequired,
  dayInWeek: momentPropTypes.momentObj.isRequired,
};

export default CalendarContentMonthCell;