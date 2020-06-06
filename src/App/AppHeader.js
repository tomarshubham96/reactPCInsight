import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import FilterListIcon from '@material-ui/icons/FilterList';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { connect } from 'react-redux';
import { appDrawerToggle } from '../redux/actionCreators';

const useStyles = makeStyles(theme => ({
  appHeader: {
    background: '#4dd0e1'
  },
  appName: {
    flexGrow: 1
  }
}));

function AppHeader(props) {
  const classes = useStyles();

  return (
    <AppBar className={classes.appHeader}>
      <Toolbar>
        <IconButton edge='start' color='inherit' onClick={props.appDrawerToggle}>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' className={classes.appName}>
          Product Control Insight
        </Typography>
        <IconButton color='inherit'>
          <FilterListIcon />
        </IconButton>
        <IconButton color='inherit'>
          <NotificationsIcon />
        </IconButton>
        <IconButton color='inherit'>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default connect(
  null,
  { appDrawerToggle }
)(AppHeader);
