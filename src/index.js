import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import {createStore} from 'redux'

const stateChanger = function(state = {n: 0}, action){
  if(action.type === 'add'){
    let newState = {n: state.n + action.payload}
    return newState
  }else{
    return state
  }
}

const store = createStore(stateChanger)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
