import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';



import PCGReviewCard from './Cards/PCGReviewCard';
import SupervisorReviewCard from './Cards/SupervisorReviewCard';
import FinalizedReviewCard from './Cards/FinalizedReviewCard';
import PNLPAAReviewApprovalCard from './Cards/PNLPAAReviewApprovalCard';

import { connect } from 'react-redux';


// const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  plpaaReviewBody: {
    display: 'flex',
    // width: '100%',
    marginTop: '64px',
    // padding: '32px',
    padding: '24px',
    overflow: 'auto'
  },

  hide: {
    display: 'none'
  }

}));

function PLPAAReviewBody(props) {
  const classes = useStyles();

  return (
    <Container className={classes.plpaaReviewBody} maxWidth='xl'>
      <Grid container spacing={3}>
        <Grid item xs={12} md={!props.pcgReviewCard ? 4 : 12} className={clsx(
          (
            props.supervisorReviewCard ||
            props.finalizedReviewCard ||
            props.plpaaReviewApprovalCard
          ) && classes.hide
        )}>
          <PCGReviewCard />
        </Grid>
        <Grid item xs={12} md={!props.supervisorReviewCard ? 4 : 12} className={clsx(
          (
            props.pcgReviewCard ||
            props.finalizedReviewCard ||
            props.plpaaReviewApprovalCard
          ) && classes.hide
        )}>
          <SupervisorReviewCard />
        </Grid>
        <Grid item xs={12} md={!props.finalizedReviewCard ? 4 : 12} className={clsx(
          (
            props.pcgReviewCard ||
            props.supervisorReviewCard ||
            props.plpaaReviewApprovalCard
          ) && classes.hide
        )}>
          <FinalizedReviewCard />
        </Grid>
        <Grid item xs={12} className={clsx(
          (
            props.pcgReviewCard ||
            props.supervisorReviewCard ||
            props.finalizedReviewCard
          ) && classes.hide
        )}>
          <PNLPAAReviewApprovalCard />
        </Grid>
      </Grid>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    // plpaaReviewDrawer: state.plpaaReviewDrawer,
    pcgReviewCard: state.pcgReviewCard,
    supervisorReviewCard: state.supervisorReviewCard,
    finalizedReviewCard: state.finalizedReviewCard,
    plpaaReviewApprovalCard: state.plpaaReviewApprovalCard
  };
}

export default connect(mapStateToProps)(PLPAAReviewBody);
