import React, { useState } from "react";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  login_box: {
    maxWidth: "450px",
  },
  login_button: {
    marginTop: theme.spacing(1),
  },
}));

function LoginPage() {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email: values.email,
      password: values.password,
    };

    console.log("Login pressed!");
    // TODO(Joel): Handle workflow to log user in and set global context
  };

  return (
    <Container className={classes.container}>
      <form className={classes.login_box} onSubmit={handleSubmit}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom={true}>
              Login
            </Typography>
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
              onChange={handleValueChange}
              value={values.password}
            />
            <Button
              color="primary"
              fullWidth={true}
              size="large"
              variant="contained"
              type="submit"
              className={classes.login_button}
            >
              Login
            </Button>
            {/* <Typography variant="caption" color="textSecondary">
            Hercules is under active development and currently completely free!
            All we ask is that you give us any feedback you might have.
          </Typography> */}
          </CardContent>
        </Card>
      </form>
    </Container>
  );
}

export default LoginPage;
