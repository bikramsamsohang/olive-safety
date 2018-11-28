import React from 'react';
import { createStackNavigator } from 'react-navigation';

//components
import SplashScreen from './components/splash-screen';
import Dummy from './components/dummy';
import Login from './components/login/login';

const MainNavigator = createStackNavigator({
  Home: {
    screen : SplashScreen,
    navigationOptions: {
      title: 'splash screen',
      header: null,
    }
  },
  Dummy: {
    screen: Dummy,
    navigationOptions: {
      title: 'Dummy',
      headerLeft: null
    }
  },
  Login: {
    screen : Login,
    navigationOptions: {
      title: 'login screen',
      header: null,
    }
  }
},
{ 
  initialRouteName: 'Home',
  headerMode: 'screen'
}
);

export default class App extends React.Component {
  render() {
    return(
      <MainNavigator />
    )
  }
}