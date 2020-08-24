import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Container,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import Logo from '../common/Logo';

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: theme.palette.background.paper,
    zIndex: theme.zIndex.drawer + 1,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  login_button: {
    marginRight: theme.spacing(2),
  },
  icon_button: {
    backgroundColor: theme.palette.primary.main,
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const xsViewport = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar disableGutters>
          <Container className={classes.container}>
            <Logo />
            <Button
              variant="outlined"
              color="primary"
              className={classes.login_button}
              component={Link}
              to="/login"
              size={xsViewport ? 'small' : 'medium'}
            >
              Log In
            </Button>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/register"
              size={xsViewport ? 'small' : 'medium'}
            >
              Sign Up
            </Button>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
