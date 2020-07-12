import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth/AuthProvider";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Container,
} from "@material-ui/core";
import api from "../utils/api-client";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

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
  const { setUserData } = useContext(AuthContext);
  const history = useHistory();

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

    const response = await api("/users/login", "POST", body);

    if (response.status !== 200) {
      return;
    }

    const jsonResponse = await response.json();
    setUserData({
      isAuthenticated: true,
      email: jsonResponse.email,
      name: jsonResponse.name,
      accessToken: jsonResponse.accessToken,
      refreshToken: Cookies.get("refreshToken"),
    });

    history.goBack();
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
