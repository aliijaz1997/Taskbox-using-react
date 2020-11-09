import React from 'react';
import './App.css';
import PureInboxScreen from './components/InboxScreen';
// import { Provider } from 'react-redux';
// import store from './ReduxStore/redux';

function App() {
  const error : boolean = false;
    return (
    <div>
      <PureInboxScreen {...error} />
      </div>
  );
}

export default App;
