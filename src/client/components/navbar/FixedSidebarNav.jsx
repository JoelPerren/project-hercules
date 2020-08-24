import React from 'react';
import { makeStyles, Drawer, Toolbar } from '@material-ui/core';
import SidebarNavContent from './SidebarNavContent';

const drawerWidth = 250;

const useStyles = makeStyles(() => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

function FixedSidebarNav() {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <SidebarNavContent />
    </Drawer>
  );
}

export default FixedSidebarNav;
