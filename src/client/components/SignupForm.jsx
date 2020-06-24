import React, { useState, useContext } from "react";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { registerUser, loginUser } from "../utils/auth-client";
import { AuthContext } from "../context/AuthProvider";

const useStyles = makeStyles((theme) => ({
  hero_box: {
    maxWidth: "450px",
  },
  form_signup_btn: {
    marginTop: 10,
    marginBottom: 20,
  },
}));

function SignupForm() {
  const classes = useStyles();
  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const { setAuthenticatedUser } = useContext(AuthContext);

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name: values.userName,
      email: values.email,
      password: values.password,
    };

    const registerErrors = await registerUser(body);
    if (registerErrors) {
      console.log(registerErrors);
    }

    const loginErrors = await loginUser(body.email, body.password);
    if (loginErrors) {
      console.log(loginErrors);
    }

    console.log("Setting context...");
    setAuthenticatedUser(true);
  };

  return (
    <form className={classes.hero_box} onSubmit={handleSubmit}>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom={true}>
            Sign Up
          </Typography>
          <TextField
            id="user-name"
            name="userName"
            label="Full Name"
            fullWidth={true}
            size="small"
            variant="outlined"
            margin="dense"
            onChange={handleValueChange}
            value={values.userName}
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            fullWidth={true}
            size="small"
            variant="outlined"
            margin="dense"
            onChange={handleValueChange}
            value={values.email}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth={true}
            size="small"
            variant="outlined"
            margin="dense"
            helperText="Your password must be at least 8 characters long"
            onChange={handleValueChange}
            value={values.password}
          />
          <Button
            color="primary"
            fullWidth={true}
            size="large"
            variant="contained"
            type="submit"
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
    </form>
  );
}

export default SignupForm;
