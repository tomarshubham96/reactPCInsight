import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  bodyFooter: {
    marginTop: 'auto',
    // backgroundColor: theme.palette.grey[200]
    backgroundColor: '#FFF'
  },
  container: {
    padding: theme.spacing(2, 1),
  }
}));

export default function BodyFooter() {
  const classes = useStyles();

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
}
