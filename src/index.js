import './Vendor';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {BrowserRouter} from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

/*eslint-disable */
let config = {
	apiKey: "AIzaSyB6Jcb0xN-a4bNqWogsn9--0X2LlObWNws",
	authDomain: "reactapp-507d9.firebaseapp.com",
	databaseURL: "https://reactapp-507d9.firebaseio.com",
	projectId: "reactapp-507d9",
	storageBucket: "reactapp-507d9.appspot.com",
	messagingSenderId: "495328783043"
};
firebase.initializeApp(config);
/*eslint-enable */

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();

