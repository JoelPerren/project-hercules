import React from 'react';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import FixedSidebarNav from '../components/navbar/FixedSidebarNav';
import CalendarContainer from '../components/calendar/CalendarContainer';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const largeViewport = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <div className={classes.root}>
      {largeViewport && <FixedSidebarNav />}
      <Switch>
        <Route exact path="/">
          <CalendarContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default Dashboard;
