import React, { useState, useContext } from "react";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { AuthContext } from "../../context/auth/AuthProvider";
import { logout } from "../../utils/auth-client";
import UserIcon from "../common/UserIcon";

function UserIconMenu() {
  const { setUserData } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutUser = () => {
    setUserData(logout());
  };

  return (
    <>
      <IconButton edge="end" size="small" onClick={handleClick}>
        <UserIcon />
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
  );
}

export default UserIconMenu;
