import React from 'react';
import Divider from '@material-ui/core/Divider';

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';

import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import PCGReviewTile from './PCGReviewTile';
import SupervisorReviewTile from './SupervisorReviewTile';
import FinalizedReviewTile from './FinalizedReviewTile';
import PnlPaaReviewTile from './PnlPaaReviewTile';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    width: '100%'
  },
  container: {
    flexGrow: 1,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(0),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    height: 200,
  },
  expansionpanelHeader: {
    width: '100vw',
    overflow: 'auto',    
  },
  expansionpanelBody: {
    overflow: 'hidden', 
    height:'100vh'   
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    zIndex: 1,
    color:'#fff',
    backgroundImage: 'linear-gradient(to bottom, #93d2e4, #4392d6)'
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    width: '100vw',
    overflow: 'auto',
    padding: '16px'
  }, 
}));

export default function BodyContent() {
  const classes = useStyles();

  return (
    <main>
      <Divider />
      <Container maxWidth="xl" className={classes.container}>
        
        <Grid container spacing={3}>

          
              <GridList className={classes.gridList} spacing={25} cellHeight={'auto'} >
                <Grid item xs={12} md={4} lg={4}>
                  <PCGReviewTile className={classes.paper} />
                </Grid>

                <Grid item xs={12} md={4} lg={4}>
                  <SupervisorReviewTile className={classes.paper} />
                </Grid>

                <Grid item xs={12} md={4} lg={4}>
                  <FinalizedReviewTile className={classes.paper} />
                </Grid>             
              </GridList>

          <ExpansionPanel className={classes.expansionpanelHeader} defaultExpanded='true'>
            <ExpansionPanelSummary
              className={classes.heading}
              expandIcon={<ExpandMoreIcon style={{ color: '#FFF' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography >PNL & PAA </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.expansionpanelBody}>
                <PnlPaaReviewTile />
            </ExpansionPanelDetails>
          </ExpansionPanel>

        </Grid>
      </Container>
    </main>
  );
}
