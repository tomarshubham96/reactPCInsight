import React from 'react';
import { BrowserRouter as Router,Switch, Route, withRouter} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Body from '../process-workflows/plpaa/workflows/Body';
import PLPAAReview from '../process-workflows/plpaa/plpaa-review/PLPAAReview';

const useStyles = makeStyles(theme => ({
  appBody: {
    display: 'flex',
    height: 'calc(100vh - 128px)',
    marginTop: '64px',
    overflow: 'hidden'
  }
}));

function AppBody() {
  const classes = useStyles();

  return (
    <main className={classes.appBody}>
      <Switch>
        <Route exact  path='/'><h1>First Page</h1></Route>
        <Route  path='/process-workflows/plpaa/plpaa-review' component={withRouter(PLPAAReview)}></Route>        
        <Route  path='/process-workflows/plpaa/workflows' component={withRouter(Body)}></Route>        
      </Switch>
    </main> 
  );
}

export default AppBody;
