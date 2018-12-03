import { createStackNavigator } from 'react-navigation';

//components
import Login from './components/login/login';
import ForgotPassword from './components/forgot-password/forgot-password';

const MainNavigator = createStackNavigator({
    Login: {
      screen : Login,
      navigationOptions: {
        title: 'login screen',
        header: null
      }
    },
    ForgotPassword: {
      screen : ForgotPassword,
      navigationOptions: {
        title: 'Forgot Password screen',
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