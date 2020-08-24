import React, { useContext } from 'react';
import { Avatar, makeStyles } from '@material-ui/core';
import { AuthContext } from '../../context/auth/AuthProvider';

const useStyles = makeStyles((theme) => ({
  icon_button: {
    backgroundColor: theme.palette.primary.main,
  },
}));

function UserIcon() {
  const classes = useStyles();
  const { userData } = useContext(AuthContext);

  const getUserInitials = () => {
    let initials = 'U';
    const usernameList = userData.name.split(' ');

    if (usernameList.length === 1) {
      initials = usernameList.shift().charAt(0);
    } else if (usernameList.length > 1) {
      initials = usernameList.shift().charAt(0) + usernameList.pop().charAt(0);
    }

    return initials;
  };

  return (
    <Avatar className={classes.icon_button}>{getUserInitials(userData)}</Avatar>
  );
}

export default UserIcon;
