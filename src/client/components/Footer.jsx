import React from "react";
import {
  AppBar,
  Typography,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  SvgIcon,
} from "@material-ui/core";
import { ReactComponent as LogoSvg } from "../svg/dark-logo.svg";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: theme.palette.background.paper,
  },
  logo: {
    fontSize: 44,
  },
  title: {
    flexGrow: 1,
  },
  login_button: {
    marginRight: theme.spacing(2),
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.appbar}>
        <IconButton edge="start">
          <SvgIcon viewBox="0 0 44 44" className={classes.logo}>
            <LogoSvg />
          </SvgIcon>
        </IconButton>
        <Typography variant="h1" className={classes.title}>
          Hercules
        </Typography>
        <Typography variant="caption" color="textSecondary">
          (c) Joel Perren · {new Date().getFullYear()}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
