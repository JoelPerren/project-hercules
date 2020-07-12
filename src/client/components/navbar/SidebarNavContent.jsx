import React from "react";
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import TodayIcon from "@material-ui/icons/Today";
import ListAltIcon from "@material-ui/icons/ListAlt";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import UserPanel from "./UserPanel";

const useStyles = makeStyles((theme) => ({
  drawerContainer: {
    overflow: "auto",
    justifyContent: "center",
  },
}));

function SidebarNavContent() {
  const classes = useStyles();

  return (
    <div className={classes.drawerContainer}>
      <UserPanel />
      <List component="nav">
        <ListItem
          button
          component={NavLink}
          to="/"
          exact
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
  );
}

export default SidebarNavContent;
