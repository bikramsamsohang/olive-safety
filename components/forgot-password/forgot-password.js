import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

class ForgotPassword extends Component {
    render() {
        return (
        <View style={styles.wrapper}>
            <View style={styles.topSection}>
                <View style={styles.logo}>
                    <Image
                    style={{width: 100, height: 100}}
                    source={require('../../assets/arrow.png')} />
                </View>                
                <Button                            
                    style={styles.backIcon}
                    icon={require('../../assets/arrow.png')} />
                <Text>Forgot Password</Text>
                <View style={styles.sendLink}>
                    <Text>We'll send you a </Text>
                    <TouchableOpacity>
                        <Text>Link</Text>
                    </TouchableOpacity>  
                    <Text>to reset it.</Text>
                </View>
                <TextInput 
                    label="Email address"
                    ></TextInput> 
                <Button 
                style={styles.button}
                mode= 'outlined'>
                    Reset
                </Button>   
            </View>
            <View style={styles.bottomSection}>
                <Text>Know Your Password.</Text>
                <TouchableOpacity>
                    <Text>Get started</Text>
                </TouchableOpacity>                
            </View>        
        </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        flex: 1,
        backgroundColor: '#240D5F',
        flexDirection: 'column'
    },
    topSection: {
        flex: 1
    },  
    bottomSection: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    sendLink: {
        flexDirection: 'row'
    },
    backIcon: {
        height: 50,
        width: 50
    },
    logo: {
        justifyContent: 'center',
    },
    button: {
        width: 100,
        borderRadius: 10
    }
});

export default ForgotPassword;