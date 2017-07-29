import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyAtwhxvMaEc5l5Qua0CDjE4HOrQdEJjYVI',
      authDomain: 'manager-6f6e7.firebaseapp.com',
      databaseURL: 'https://manager-6f6e7.firebaseio.com',
      projectId: 'manager-6f6e7',
      storageBucket: 'manager-6f6e7.appspot.com',
      messagingSenderId: '52719442604'
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;
