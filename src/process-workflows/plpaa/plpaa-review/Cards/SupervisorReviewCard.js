import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import IconButton from '@material-ui/core/IconButton';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

import { connect } from 'react-redux';
import { supervisorReviewCardToggle } from '../../../../redux/actionCreators';

const useStyles = makeStyles(theme => ({
  finalizedReviewCard: {
    height: '100%'
  },
  finalizedReviewCardHeader: {
    color: '#fff',
    // background: 'linear-gradient(#00bdf2, #004785)'
    background: 'linear-gradient(#93d2e4, #4392d6)'
  }
}));

function SupervisorReviewCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.finalizedReviewCard}>
      <CardHeader className={classes.finalizedReviewCardHeader} title='Supervisor Review' action={
        <IconButton edge='start' color='inherit' onClick={props.supervisorReviewCardToggle}>
          {!props.supervisorReviewCard ? <FullscreenIcon /> : <FullscreenExitIcon />}
        </IconButton>
      } />
      SupervisorReviewCard
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    supervisorReviewCard: state.supervisorReviewCard
  };
}

export default connect(
  mapStateToProps,
  { supervisorReviewCardToggle }
)(SupervisorReviewCard);
