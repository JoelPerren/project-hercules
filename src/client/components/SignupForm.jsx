import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  Box,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  hero_box: {
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  form_signup_btn: {
    marginTop: 10,
    marginBottom: 20,
  },
}));

function SignupForm() {
  const classes = useStyles();
  return (
    <Box className={classes.hero_box}>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom={true}>
            Sign Up
          </Typography>
          <TextField
            id="user-name"
            label="User Name"
            fullWidth={true}
            size="small"
            variant="outlined"
            margin="dense"
          />
          <TextField
            id="email"
            label="Email"
            fullWidth={true}
            size="small"
            variant="outlined"
            margin="dense"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            fullWidth={true}
            size="small"
            variant="outlined"
            margin="dense"
            helperText="Your password must be at least 8 characters long"
          />
          <Button
            color="primary"
            fullWidth={true}
            size="large"
            variant="contained"
            className={classes.form_signup_btn}
          >
            Sign Up
          </Button>
          <Typography variant="caption" color="textSecondary">
            Hercules is under active development and currently completely free!
            All we ask is that you give us any feedback you might have.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default SignupForm;
