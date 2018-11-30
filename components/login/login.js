import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    gotoSignup = ()=> {
        this.props.navigation.navigate('Signup');
    }

    render() {
        return (
            <View style={styles.wrapper}>

                <View style={styles.logoWrapper}>
                    <Image
                    style={styles.logo}
                    source={require('../../assets/olive.png')} ></Image>
                </View>

                <View>
                    <Text 
                    style={styles.helloText}>
                        Hello
                    </Text>
                    <TextInput              
                    style={styles.inputBox}               
                    label="Email address"
                    placeholderTextColor="white"
                    underlineColor='#abada4'
                    ></TextInput>
                    <TextInput             
                    style={styles.inputBox}
                    secureTextEntry={true}
                    label="Password"
                    underlineColor='#abada4'
                    ></TextInput>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#240D5F',
        padding: 20
    },
    logoWrapper: {
        flex: 0.5,
        alignItems: 'center',        
    },
    logo: {
        height: 50,
        width: 100
    },
    loginWrapper: {
        flexDirection: 'row',
        flexWrap:'wrap'
    },
    helloText: {
        color: '#f4d742',
        fontSize: 25
    },
    inputBox: {
        color: '#abada4',
        backgroundColor: 'transparent',
        marginTop: 10,
    },
    login: {
        fontSize: 20,
        color: 'blue'
    },
    forgotPassword: {
        color: 'white'
    },
    accountText: {
        color: 'grey'
    },
    accountLink: {
        color: 'yellow'
    }
})

export default Login;