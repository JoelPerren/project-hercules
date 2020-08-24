import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, makeStyles, Drawer } from '@material-ui/core';
import Logo from '../common/Logo';
import SidebarNavContent from './SidebarNavContent';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  container: {
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function HamburgerMenu() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }

    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.root}>
      <IconButton edge="start" onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer}
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.container}>
          <Logo />
        </div>
        <SidebarNavContent />
      </Drawer>
    </div>
  );
}

export default HamburgerMenu;
