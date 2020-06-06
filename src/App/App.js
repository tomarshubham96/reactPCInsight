import React from 'react';

import AppHeader from './AppHeader';
import AppDrawer from './AppDrawer';
import AppBody from './AppBody';
import AppFooter from './AppFooter';

function App() {
  return (
    <React.Fragment>
      <AppHeader />
      <AppDrawer />
      <AppBody />
      <AppFooter />
    </React.Fragment>
  );
}

export default App;
