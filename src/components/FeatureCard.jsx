import React from "react";
import {
  Card,
  CardContent,
  makeStyles,
  CardHeader,
  Avatar,
  Typography,
} from "@material-ui/core";
// import UpdateIcon from "@material-ui/icons/Update";

const useStyles = makeStyles((theme) => ({
  feature_card: {
    width: "100%",
  },
  avatar_icon: {
    color: theme.palette.getContrastText(theme.palette.secondary.main),
    background: theme.palette.secondary.main,
  },
}));

function FeatureCard({ icon, heading, content }) {
  const classes = useStyles();
  return (
    <Card className={classes.feature_card}>
      <CardHeader
        avatar={<Avatar className={classes.avatar_icon}>{icon}</Avatar>}
        disableTypography={true}
        title={<Typography variant="h6">{heading}</Typography>}
      ></CardHeader>
      <CardContent>
        {content.map((para, index) => (
          <Typography paragraph={true} key={index}>
            {para}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}

export default FeatureCard;
