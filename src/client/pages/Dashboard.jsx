import React from "react";
import Navbar from "../components/Navbar";
import { makeStyles, Toolbar } from "@material-ui/core";
import SidebarNav from "../components/SidebarNav";
import Schedule from "../components/Schedule";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <SidebarNav />
      <Schedule />
    </div>
  );
}

export default Dashboard;
