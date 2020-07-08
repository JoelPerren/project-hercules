import React from "react";
import {
  makeStyles,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import TodayIcon from "@material-ui/icons/Today";
import ListAltIcon from "@material-ui/icons/ListAlt";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import Sidebar from "./SidebarNav";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
}));

function SidebarNav() {
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
      <div className={classes.drawerContainer}>
        <img src="https://via.placeholder.com/150" alt="placeholder" />
        <List component="nav">
          <ListItem
            button
            component={NavLink}
            to="/"
            activeClassName="Mui-selected"
          >
            <ListItemIcon>
              <TodayIcon />
            </ListItemIcon>
            <ListItemText primary="Schedule" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/workouts"
            activeClassName="Mui-selected"
          >
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Workouts" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/exercises"
            activeClassName="Mui-selected"
          >
            <ListItemIcon>
              <FitnessCenterIcon />
            </ListItemIcon>
            <ListItemText primary="Exercises" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}

export default SidebarNav;
