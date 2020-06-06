import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { plpaaReviewDrawerToggle } from '../../../redux/actionCreators';

const useStyles = makeStyles(theme => ({
  plpaaReviewHeader: {
    top: '64px',
    zIndex: '1000'
  },
  appBar: {

  },
  appBarShift: {
    width: 'calc(100% - 320px)',
    // marginLeft: drawerWidth,
  }
}));

function PLPAAReviewHeader(props) {
  const classes = useStyles();

  return (
    <AppBar
      color='inherit'
      className={clsx(classes.plpaaReviewHeader, classes.appBar, props.plpaaReviewDrawer && classes.appBarShift)}
    >
      <Toolbar>
        <IconButton edge='start' color='inherit' onClick={props.plpaaReviewDrawerToggle}>
          {props.plpaaReviewDrawer ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
        <Typography>
          P&L/PAA Review
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

function mapStateToProps(state) {
  return {
    plpaaReviewDrawer: state.plpaaReviewDrawer
  };
}

export default connect(
  mapStateToProps,
  { plpaaReviewDrawerToggle }
)(PLPAAReviewHeader);
