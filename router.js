import { createStackNavigator } from 'react-navigation';

//components
import Login from './components/login/login';

const MainNavigator = createStackNavigator({
    Login: {
      screen : Login,
      navigationOptions: {
        title: 'login screen',
        header: null
      }
    }
  },
  { 
    initialRouteName: 'Login',
    headerMode: 'screen'
  }
  );

export default MainNavigator;