import React, { useContext } from "react";
import { Avatar, makeStyles } from "@material-ui/core";
import { AuthContext } from "../../context/auth/AuthProvider";

const useStyles = makeStyles((theme) => ({
  icon_button: {
    backgroundColor: theme.palette.primary.main,
  },
}));

function UserIcon() {
  const classes = useStyles();
  const { userData } = useContext(AuthContext);

  const getUserInitials = (userData) => {
    let initials = "U";
    const usernameList = userData.name.split(" ");

    if (usernameList.length === 1) {
      initials = usernameList[0][0];
    } else {
      initials = usernameList[0][0];
      initials += usernameList[usernameList.length - 1][0];
    }

    return initials;
  };

  return (
    <Avatar className={classes.icon_button}>{getUserInitials(userData)}</Avatar>
  );
}

export default UserIcon;
