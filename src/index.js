import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ConnectedRouter } from 'connected-react-router';
import history from './redux/history';
import { SnackbarProvider } from 'notistack';
import App from './App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <SnackbarProvider maxSnack={5}>
          <App />
        </SnackbarProvider>
      </ConnectedRouter>
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
