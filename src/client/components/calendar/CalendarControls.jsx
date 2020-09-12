import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Grid,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';
import 'moment/locale/en-gb';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import momentPropTypes from 'react-moment-proptypes';

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: theme.spacing(2),
  },
  heading: {
    flexGrow: 1,
  },
  controls: {
    flexBasis: 'auto',
    flexGrow: 0,
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    marginRight: theme.spacing(1),
  },
  typeButton: {
    minWidth: '70px',
  },
}));

function CalendarControls({
  selectedDate,
  setSelectedDate,
  viewMode,
  setViewMode,
}) {
  const classes = useStyles();

  const goBackInTime = () => {
    setSelectedDate(selectedDate.clone().subtract(1, `${viewMode}s`));
  };

  const goForwardInTime = () => {
    setSelectedDate(selectedDate.clone().add(1, `${viewMode}s`));
  };

  const toggleView = () => {
    switch (viewMode) {
      case 'month':
        setViewMode('week');
        break;
      case 'week':
        setViewMode('day');
        break;
      default:
        setViewMode('month');
        break;
    }
  };

  const getDateLabel = () => {
    let label;
    if (viewMode === 'week') {
      const monthAtStartOfWeek = selectedDate.clone().startOf('w').format('MMM');
      const monthAtEndOfWeek = selectedDate.clone().endOf('w').format('MMM');
      if (monthAtStartOfWeek === monthAtEndOfWeek) {
        label = `${selectedDate.format('MMMM')} ${selectedDate.format('YYYY')}`;
      } else {
        label = `${monthAtStartOfWeek} — ${monthAtEndOfWeek} ${selectedDate.format('YYYY')}`;
      }
    } else {
      label = `${selectedDate.format('MMMM')} ${selectedDate.format('YYYY')}`;
    }

    return label;
  };

  return (
    <Grid container spacing={3} className={classes.header}>
      <Grid item xs className={classes.heading}>
        <Typography variant="h4" color="primary">
          Workout Schedule
        </Typography>
      </Grid>
      <Grid item xs className={classes.controls}>
        <Typography
          color="textSecondary"
          display="inline"
          className={classes.label}
        >
          {getDateLabel()}
        </Typography>
        <IconButton size="small" color="primary" onClick={goBackInTime} aria-label="back">
          <ArrowBackIosOutlinedIcon />
        </IconButton>
        <Button
          color="primary"
          onClick={toggleView}
          className={classes.typeButton}
          aria-label="changeView"
        >
          {viewMode}
        </Button>
        <IconButton size="small" color="primary" onClick={goForwardInTime} aria-label="forward">
          <ArrowForwardIosOutlinedIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

CalendarControls.propTypes = {
  selectedDate: momentPropTypes.momentObj.isRequired,
  setSelectedDate: PropTypes.func.isRequired,
  viewMode: PropTypes.string.isRequired,
  setViewMode: PropTypes.func.isRequired,
};

export default CalendarControls;
