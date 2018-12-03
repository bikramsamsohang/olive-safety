import React, { Component } from 'react';
import { 
    Container
} from 'native-base';
import { StyleSheet } from 'react-native';
import colors from '../../colors';

class SplashScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container
            style={styles.wrapper}>

            </Container>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.backGround
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