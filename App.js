import React from 'react';
import SplashScreen from 'react-native-splash-screen';
//routes
import MainNavigator from './router';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    SplashScreen.hide(true);
  }

  render() {
    return(
      <MainNavigator />
    )
  }
}