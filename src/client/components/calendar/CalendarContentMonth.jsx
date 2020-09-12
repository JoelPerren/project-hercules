import React from 'react';
import momentPropTypes from 'react-moment-proptypes';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import CalendarContentMonthCell from './CalendarContentMonthCell';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  dayLabelItem: {
    flex: '1 1 0',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridContent: {
    flexDirection: 'column',
    flex: '1 1 0',
    borderLeft: `${theme.palette.background.paper} 1px solid`,
  },
  gridRow: {
    flex: '1 1 0',
    borderBottom: `${theme.palette.background.paper} 1px solid`,
  },
}));

function CalendarContentMonth({ currentDate, selectedDate }) {
  const classes = useStyles();

  const getDatesInMonth = () => {
    const weeks = [];
    const firstWeekInMonth = selectedDate.clone().startOf('month');
    const lastWeekInMonth = selectedDate.clone().endOf('month');
    const differenceInWeeks = lastWeekInMonth.diff(firstWeekInMonth, 'weeks');

    for (let i = 0; i <= differenceInWeeks; i += 1) {
      const firstDayInWeek = selectedDate.clone().startOf('month').startOf('week').add(i, 'weeks');
      const week = [];

      for (let j = 0; j < 7; j += 1) {
        week.push(firstDayInWeek.clone().add(j, 'days'));
      }

      weeks.push(week);
    }

    return weeks;
  };

  const buildCalendarGrid = getDatesInMonth().map((weekInMonth, firstIndex) => (
    // eslint-disable-next-line react/no-array-index-key
    <Grid container item spacing={0} key={firstIndex} className={classes.gridRow}>
      {
        weekInMonth.map((dayInWeek, secondIndex) => (
          <CalendarContentMonthCell
            key={secondIndex}
            currentDate={currentDate}
            dayInWeek={dayInWeek}
          />
        ))
      }
    </Grid>
  ));

  const buildDayOfWeekLabels = () => (
    <Grid container spacing={0}>
      {
        [...Array(7).keys()].map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Grid item xs className={classes.dayLabelItem} key={index}>
            { moment().weekday(item).format('ddd').toUpperCase() }
          </Grid>
        ))
      }
    </Grid>
  );

  return (
    <div className={classes.gridContainer} aria-label="month-calendar">
      { buildDayOfWeekLabels() }
      <Grid container spacing={0} className={classes.gridContent}>
        { buildCalendarGrid }
      </Grid>
    </div>
  );
}

CalendarContentMonth.propTypes = {
  currentDate: momentPropTypes.momentObj.isRequired,
  selectedDate: momentPropTypes.momentObj.isRequired,
};

export default CalendarContentMonth;
