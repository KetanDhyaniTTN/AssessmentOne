import React from 'react';
import { Provider } from 'react-redux';
import Store from './Store';
import Tabnavigation from './Tabs/Tabnavigation';

const App = () => {
  return (
    <Provider store={Store}>
      <Tabnavigation />
    </Provider>
  );
};

export default App;