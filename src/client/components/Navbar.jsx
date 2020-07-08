// TODO(Joel):
// This component needs a tidy up.
// Things like the user icon and menu should be moved to bespoke components.
// Also make so the menu appears below the user icon, rather than on top!
// But it works for now, so on we go!

import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  AppBar,
  Typography,
  Button,
  makeStyles,
  Toolbar,
  Container,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { ReactComponent as LogoSvg } from "../svg/dark-logo.svg";
import { AuthContext } from "../context/AuthProvider";
import { logout } from "../utils/auth-client";
import { maxWidth } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: theme.palette.background.paper,
    position: "fixed",
    zIndex: theme.zIndex.drawer + 1,
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  login_button: {
    marginRight: theme.spacing(2),
  },
  icon_button: {
    backgroundColor: theme.palette.primary.main,
  },
}));

function Navbar() {
  const { userData, setUserData } = useContext(AuthContext);
  const classes = useStyles();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutUser = () => {
    setUserData(logout());
    history.push("/");
  };

  let maxWidth = userData.isAuthenticated ? false : "lg";

  return (
    <>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar disableGutters={true}>
          <Container className={classes.container} maxWidth={maxWidth}>
            <LogoSvg className={classes.logo} />
            <Typography variant="h1" className={classes.title}>
              Hercules
            </Typography>
            {userData.isAuthenticated ? (
              <>
                <IconButton edge="end" size="small" onClick={handleClick}>
                  <Avatar className={classes.icon_button}>U</Avatar>
                </IconButton>
                <Menu
                  id="user-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={logoutUser}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.login_button}
                  component={Link}
                  to="/login"
                >
                  Log In
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/register"
                >
                  Sign Up
                </Button>
              </>
            )}
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
