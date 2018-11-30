import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

class SendLink extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                {/* <View style={}>
                    <Image
                    source={} />
                </View> */}
                
                <View style={styles.topSection}>
                    <Button                            
                    style={styles.backIcon}
                    icon={require('../../assets/arrow.png')} />
                    <Text>
                        Check your Mail
                    </Text>
                    <View>
                        <Text>
                            We've sent you a link to reset your password. Click the 
                        </Text>
                        <Text>
                            link in the email
                        </Text>
                        <Text>
                            and enter a new password.
                        </Text>
                    </View>                    
                    <Button
                    mode= 'outlined'>
                        Check Email
                    </Button>
                </View>
                
                <View style={styles.bottomSection}>
                    <Text>
                        Know your Password.
                    </Text>
                    <Text>
                        Get started.
                    </Text>
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
    }
});

export default SendLink;
