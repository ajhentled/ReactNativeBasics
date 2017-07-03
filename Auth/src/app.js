import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDiX8r_oeDKHgbWt1Y2v_7YPZUdxDtpJy4',
      authDomain: 'auth-11ed2.firebaseapp.com',
      databaseURL: 'https://auth-11ed2.firebaseio.com',
      projectId: 'auth-11ed2',
      storageBucket: 'auth-11ed2.appspot.com',
      messagingSenderId: '1021098591108'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  };

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{flexDirection: 'row'}}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
      	<Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    )
  }
}

export default App;