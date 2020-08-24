import React from 'react';
import {
  AppBar,
  Container,
  Typography,
  makeStyles,
  Toolbar,
} from '@material-ui/core';
import Logo from '../common/Logo';

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: theme.palette.background.paper,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
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
        <Container className={classes.container}>
          <Logo />
          <Typography variant="caption" color="textSecondary">
            (c) Joel Perren ·
            {' '}
            {new Date().getFullYear()}
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
