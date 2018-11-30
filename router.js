import { createStackNavigator } from 'react-navigation';

//components
import SplashScreen from './components/splash-screen/slpash-screen';
import Dummy from './components/dummy';
import Login from './components/login/login';
import Signup from './components/sign-up/signup';
import Loader from './components/loader/loader';
import ForgotPassword from './components/forgot-password/forgot-password';
import SendLink from './components/send-link/send-link';

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
        // title: 'Dummy',
        headerLeft: null
      }
    },
    Login: {
      screen : Login,
      navigationOptions: {
        title: 'login screen',
        header: null
      }
    },
    Signup : {
      screen : Signup,
      navigationOptions: {
        title: 'signup screen',
        header: null
      }
    },
    Loader: {
      screen : Loader,
      navigationOptions: {
        title: 'Loader screen',
        header: null
      }
    },
    Forgotpassword: {
        screen: ForgotPassword,
        navigationOptions: {
            title: 'Forgot Password screen',
            header: null
          }
    },
    SendLink: {
        screen: SendLink,
        navigationOptions: {
            title: 'Send Link screen',
            header: null
          }
    }
  },
  { 
    initialRouteName: 'Home',
    headerMode: 'screen'
  }
  );

export default MainNavigator;