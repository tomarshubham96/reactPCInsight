import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import IconButton from '@material-ui/core/IconButton';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


import MaximizeIcon from '@material-ui/icons/Maximize';
import MinimizeIcon from '@material-ui/icons/Minimize';

import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

import CardActions from '@material-ui/core/CardActions';
        /* <CardActions> */
        /* </CardActions> */

import { connect } from 'react-redux';
import { plpaaReviewApprovalCardToggle } from '../../../../redux/actionCreators';

const useStyles = makeStyles(theme => ({
  plpaaReviewApprovalCard: {
    height: '100%'
  },
  plpaaReviewApprovalCardHeader: {
    color: '#fff',
    // background: 'linear-gradient(#00bdf2, #004785)'
    background: 'linear-gradient(#93d2e4, #4392d6)'
  }
}));

function PLPAAReviewApprovalCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.plpaaReviewApprovalCard}>
      <CardHeader className={classes.plpaaReviewApprovalCardHeader} title='P&L/PAA Review/Approval' action={
        <IconButton edge='start' color='inherit' onClick={props.plpaaReviewApprovalCardToggle}>
          {!props.plpaaReviewApprovalCard ? <FullscreenIcon /> : <FullscreenExitIcon />}
        </IconButton>
      } />
      PLPAAReviewApprovalCard
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    plpaaReviewApprovalCard: state.plpaaReviewApprovalCard
  };
}

export default connect(
  mapStateToProps,
  { plpaaReviewApprovalCardToggle }
)(PLPAAReviewApprovalCard);
