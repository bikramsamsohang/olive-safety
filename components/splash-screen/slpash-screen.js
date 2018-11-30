import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SplashScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.leaveSplash = setTimeout(() => {
            this.props.navigation.navigate('Login');
        }, 1000);
    }

    render() {
        return(
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Splash Screen
                </Text>
                <Text style={styles.subtitle}>
                    Presented by Olive Safety.
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#240D5F',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },
    subtitle: {
        padding: 10,
        fontSize: 20,
        color: 'white'
    }
});

export default SplashScreen;