import React from 'react';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import FixedSidebarNav from '../components/navbar/FixedSidebarNav';
import Schedule from '../components/schedule/Schedule';

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
          <Schedule />
        </Route>
      </Switch>
    </div>
  );
}

export default Dashboard;
