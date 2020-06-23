import React from "react";
import { makeStyles, Container } from "@material-ui/core";
import SignupForm from "../components/SignupForm";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function RegisterPage() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <SignupForm />
    </Container>
  );
}

export default RegisterPage;
