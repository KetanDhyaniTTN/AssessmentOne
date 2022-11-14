import React from 'react';
import {Provider} from 'react-redux';
import  Store  from './Store';
import Counter from './Counter';
const App = () => {
  return (
    <Provider store={Store}>
      <Counter/>
    </Provider>
  );
};

export default App;