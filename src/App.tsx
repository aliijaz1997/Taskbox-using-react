import React from 'react';
import './App.css';
import PureInboxScreen from './components/InboxScreen';
import { Provider } from 'react-redux';
import store from './ReduxStore/redux';

function App() {
  const error : boolean = false;
    return (
    <Provider store={store} >
      <PureInboxScreen {...error} />
    </Provider>
  );
}

export default App;
