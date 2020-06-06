import React from 'react';

import {withRouter} from 'react-router';

import { makeStyles } from '@material-ui/core/styles';

// import AppBar from '@material-ui/core/AppBar';
// import Drawer from '@material-ui/core/Drawer';

// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';


import BodyHeader from './BodyHeader';
// import BodySidebar from './BodySidebar';
import BodyContent from './BodyContent';
// import BodyFooter from './BodyFooter';

const useStyles = makeStyles(theme => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Body() {
  const classes = useStyles();

  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <main className={classes.main}>
      <div className={classes.appBarSpacer} />
      {/* <div className={classes.appBarSpacer} /> */}
      <BodyHeader />
      {/* <BodySidebar /> */}
      <BodyContent />
      {/* <BodyFooter /> */}
    </main>
  );
}
