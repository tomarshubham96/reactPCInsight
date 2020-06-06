import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  appFooter: {
    backgroundColor: '#fff'
  },
  toolbar: {
    maxHeight: '63px',
    minHeight: '63px'
  }
}));

function AppFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.appFooter}>
      <Divider />
      <Toolbar className={classes.toolbar}>

        <Container>



          <Typography variant='body1' color='textSecondary' align='center'>
            Copyright &copy; {new Date().getFullYear()} Citigroup, Inc.
          </Typography>



          {/*
          <Typography variant="body1' color="textSecondary" align="center">
            Copyright &copy; {new Date().getFullYear()} Citigroup, Inc.
          </Typography>
          */}

          {/*
          return (
            <footer className={classes.bodyFooter}>
              <Divider />
              <Container maxWidth='sm' className={classes.container}>
                <Typography variant="body1" color="textSecondary" align="center">
                  Copyright &copy; {new Date().getFullYear()} Citigroup, Inc.
                </Typography>
              </Container>
            </footer>
          );
          */}



        </Container>
      </Toolbar>
    </footer>
  );
}

export default AppFooter;
