import React, { useContext } from 'react';
import { makeStyles, Typography, Paper } from '@material-ui/core';
import UserIcon from '../common/UserIcon';
import { AuthContext } from '../../context/auth/AuthProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '150px',
    margin: 'auto',
    background: theme.palette.background.default,
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    textAlign: 'center',
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
  },
  username: {
    marginTop: theme.spacing(2),
  },
}));

function UserPanel() {
  const classes = useStyles();
  const { userData } = useContext(AuthContext);

  return (
    <Paper elevation={3} className={classes.root}>
      <div className={classes.icon}>
        <UserIcon />
      </div>
      <Typography noWrap className={classes.username} color="textSecondary">
        {userData.name}
      </Typography>
    </Paper>
  );
}

export default UserPanel;
