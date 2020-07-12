import React from "react";
import {
  AppBar,
  makeStyles,
  useMediaQuery,
  useTheme,
  Toolbar,
  Container,
} from "@material-ui/core";
import Logo from "../common/Logo";
import UserIconMenu from "./UserIconMenu";
import HamburgerMenu from "./HamburgerMenu";

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
}));

function AuthenticatedNavbar() {
  const classes = useStyles();
  const theme = useTheme();
  const largeViewport = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar disableGutters={true}>
          <Container className={classes.container} maxWidth={false}>
            {largeViewport ? <Logo /> : <HamburgerMenu />}
            <UserIconMenu />
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default AuthenticatedNavbar;
