import React, { Component } from 'react';
import colors from '../../colors';
import {
    StyleSheet,
    BackHandler,
    Alert,
    Image,
    
} from 'react-native';
import {
    Container,
    Content,
    Button,
    Item,
    Label,
    Input,
    Form,
    Text,
    H1,
    Left,
    Icon
} from "native-base";

//Components
import SpalshScreen from '../splash-screen/slpash-screen';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: false,
            backPressed: false
        };
    }
    
    componentDidMount(){
    }

    gotoSignup = ()=> {
        this.props.navigation.navigate('Signup');
    }

    componentDidMount() {
        this.leaveSplash = setTimeout(() => {
            this.setState({showLogin: true})
        }, 1000);
        BackHandler.addEventListener('hardwareBackPress', this.backPress);
    }

    backPress = ()=> {
        if(!this.state.backPressed) {
            this.setState({
                backPressed: true
            });
            Alert.alert('Press back again to exit');
            return true;
        }
    };

    render() {
        return (      
            <Container style={styles.container}>   
                <LoginElements />
            </Container>
        )
    }
}

const LoginElements = () => {
    return(
        <React.Fragment>
            <Image                               
            source={require('../../assets/logo.png')}/>
                    <Form>
                        <H1 style={styles.headText}>Hello</H1>
                        <Item 
                        floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>

                        <Item 
                        floatingLabel>
                            <Label>Password</Label>                            
                            <Input 
                            secureTextEntry />
                        </Item>
                    </Form>
                    <Container 
                    style={styles.buttonLinkWrapper}>                        
                        <Button rounded light >
                            <Text uppercase={false}>Login</Text>
                        </Button>
                        
                        <Text
                        style={styles.passwordLink}>
                            Forgot password?
                        </Text>
                    </Container>   
                <Container
                style={styles.bottom}>
                    <Text
                    style={styles.text}>
                        Still Without account?
                    </Text>
                    <Text>
                        Create one
                    </Text>
                </Container>
        </React.Fragment>    
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: colors.backGround
    },
    headText: {
        color: colors.headText
    },
    loginWrapper: {
        backgroundColor: colors.backGround
    },
    buttonLinkWrapper: {
        flexDirection: 'row',
        backgroundColor: colors.backGround,
        marginTop: 50
    },
    passwordLink: {
        marginLeft: 100,
        color: colors.forgotPasswordLink
    },
    bottom: {
        flexDirection: 'row',
        backgroundColor: colors.transparent
    },
    text: {
        color: colors.textColor
    }
})

export default Login;