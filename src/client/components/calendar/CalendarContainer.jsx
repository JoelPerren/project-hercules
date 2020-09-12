import React, { useState } from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';
import CalendarControls from './CalendarControls';
import CalendarContentMonth from './CalendarContentMonth';
import CalendarContentWeek from './CalendarContentWeek';
import CalendarContentDay from './CalendarContentDay';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
}));

function CalendarContainer() {
  const currentDate = moment();
  const [viewMode, setViewMode] = useState('week');
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Toolbar />
      <CalendarControls
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      { viewMode === 'month' && <CalendarContentMonth currentDate={currentDate} selectedDate={selectedDate} /> }
      { viewMode === 'week' && <CalendarContentWeek currentDate={currentDate} selectedDate={selectedDate} /> }
      { viewMode === 'day' && <CalendarContentDay currentDate={currentDate} selectedDate={selectedDate} /> }
    </main>
  );
}

export default CalendarContainer;
