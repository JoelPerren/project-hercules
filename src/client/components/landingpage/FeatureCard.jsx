import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  makeStyles,
  CardHeader,
  Avatar,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  feature_card: {
    width: '100%',
  },
  avatar_icon: {
    color: theme.palette.getContrastText(theme.palette.secondary.main),
    background: theme.palette.secondary.main,
  },
}));

function FeatureCard({
  id,
  icon,
  heading,
  content,
}) {
  const classes = useStyles();
  return (
    <Card className={classes.feature_card}>
      <CardHeader
        avatar={<Avatar className={classes.avatar_icon}>{icon}</Avatar>}
        disableTypography
        title={<Typography variant="h6">{heading}</Typography>}
      />
      <CardContent>
        {content.map((para) => (
          <Typography paragraph key={id}>
            {para}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}

FeatureCard.propTypes = {
  id: PropTypes.number.isRequired,
  icon: PropTypes.element.isRequired,
  heading: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeatureCard;
