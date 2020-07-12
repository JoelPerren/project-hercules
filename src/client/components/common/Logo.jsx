import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { ReactComponent as LogoSvg } from "../../svg/dark-logo.svg";

const useStyles = makeStyles((theme) => ({
  logo: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

function Logo() {
  const classes = useStyles();

  return (
    <>
      <LogoSvg className={classes.logo} />
      <Typography variant="h1" className={classes.title}>
        Hercules
      </Typography>
    </>
  );
}

export default Logo;
