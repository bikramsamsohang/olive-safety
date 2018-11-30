import React, { Component } from 'react';
import { Text, StyleSheet, View, Form, Image, TouchableOpacity, TouchableHighlight, Alert } from 'react-native';
import {TextInput, Button } from 'react-native-paper';

class Signup extends Component {
    gotoLogin = ()=> {
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                        onPress={this.gotoLogin} >
                        <Image
                            style={styles.backIcon}
                            source={require('../../assets/arrow.png')} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.signupText}>
                            Sign up
                        </Text>
                    </View>
                    <View>
                        <Text>Create an account to use Olive Safety</Text>
                    </View>
                    <View style={styles.termsWrapper}>
                        <Text>without Limits</Text>
                        <Text>. For Free.</Text>
                    </View>               
                
                    <Form>
                            <Input placeholder="Email address" />
                            <Input secureTextEntry={true} placeholder="Password" />
                            <Input secureTextEntry={true} placeholder="Repeat password" />
                        <Button
                        style={styles.signupButton}
                        mode='outlined' >
                            Sign up
                        </Button>
                    </Form>

                    <View style={styles.loginWrapper}>
                        <Text>
                            I already have an account.
                        </Text>
                        <Text
                            style={styles.loginLink}
                            onPress={this.gotoLogin}>
                            Login
                        </Text>
                    </View>
            </View>                    
        )
    }
}

const styles = StyleSheet.create({
    backIcon: {
        height: 50,
        width: 50
    },
    signupText: {
        fontSize: 25
    },
    signupButtonText: {
        color: 'white'
    },
    termsWrapper: {
        flex: 1,
        flexDirection: 'row'
    },
    loginWrapper: {
        flex: 1,
        flexDirection: 'row'
    },
    loginLink: {
        color: 'yellow'
    }
})

export default Signup;