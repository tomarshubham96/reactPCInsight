import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

import Checkbox from '@material-ui/core/Checkbox';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import PLPAAReviewTable from './PLPAAReviewTable';

import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  plpaaReviewDrawer: {
    // width: '240px'
    // width: '280px'
    width: '320px'
  },
  plpaaReviewDrawerClose: {
    width: '0px'
  },
  plpaaReviewDrawerPaper: {
    width: '100%',
    zIndex: '1000',
    position: 'relative',
    whiteSpace: 'nowrap'
  },
  plpaaReviewDrawerTable: {
    // maxWidth: '240px'
  },
  plpaaReviewDrawerTableCell: {
    paddingRight: '12px',
    paddingLeft: '6px'
  }
}));

function createData(profileName, p, a, f) {
  return { profileName, p, a, f };
}

const rows = [
  createData('Test Profile 0', '#2ECC71', '#D5D8DC', '#E74C3C'),
  createData('Test Profile 1', '#F7DC6F', '#2ECC71', '#D5D8DC'),
  createData('Test Profile 2', '#F7DC6F', '#E74C3C', '#2ECC71'),
  createData('Test Profile 3', '#E74C3C', '#2ECC71', '#F7DC6F'),
  createData('Test Profile 4', '#D5D8DC', '#F7DC6F', '#2ECC71'),
  createData('Test Profile 5', '#F7DC6F', '#2ECC71', '#D5D8DC'),
  createData('Test Profile 6', '#D5D8DC', '#F7DC6F', '#2ECC71'),
  createData('Test Profile 7', '#2ECC71', '#D5D8DC', '#E74C3C'),
  createData('Test Profile 8', '#2ECC71', '#F7DC6F', '#E74C3C'),
  createData('Test Profile 9', '#2ECC71', '#E74C3C', '#D5D8DC'),
  createData('Test Profile 10', '#D5D8DC', '#F7DC6F', '#E74C3C'),
  createData('Test Profile 11', '#F7DC6F', '#E74C3C', '#2ECC71'),
  createData('Test Profile 12', '#E74C3C', '#2ECC71', '#F7DC6F'),
  createData('Test Profile 13', '#F7DC6F', '#D5D8DC', '#E74C3C'),
  createData('Test Profile 14', '#E74C3C', '#2ECC71', '#D5D8DC'),
  createData('Test Profile 15', '#2ECC71', '#D5D8DC', '#E74C3C'),
  createData('Test Profile 16', '#D5D8DC', '#F7DC6F', '#2ECC71'),
  createData('Test Profile 17', '#F7DC6F', '#2ECC71', '#E74C3C'),
  createData('Test Profile 18', '#2ECC71', '#F7DC6F', '#D5D8DC'),
  createData('Test Profile 19', '#2ECC71', '#E74C3C', '#D5D8DC'),
  createData('Test Profile 20', '#E74C3C', '#2ECC71', '#F7DC6F')
];

function PLPAAReviewDrawer(props) {
  const classes = useStyles();

  return (
    <Drawer
      className={clsx(props.plpaaReviewDrawer ? classes.plpaaReviewDrawer : classes.plpaaReviewDrawerClose)}
      variant='persistent'
      anchor='left'
      open={props.plpaaReviewDrawer}
      classes={{ paper: classes.plpaaReviewDrawerPaper }}
      transitionDuration={0}
    >
      <Toolbar />
      <Divider />

      <PLPAAReviewTable />
      
    </Drawer>
  );
}

function mapStateToProps(state) {
  return {
    plpaaReviewDrawer: state.plpaaReviewDrawer
  };
}

export default connect(mapStateToProps)(PLPAAReviewDrawer);
