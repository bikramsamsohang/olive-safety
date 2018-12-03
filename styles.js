'use strict';
import { StyleSheet } from 'react-native';
import Colors from './colors';

module.exports = StyleSheet.create({
	wrapper: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.primary,
        padding: 20
    },
    logoWrapper: {
        flex: 0.5,
        alignItems: 'center',
        backgroundColor: Colors.transparent,
    },
    logo: {
        height: 50,
        width: 110,
        marginTop: 60,
    },
    loginWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    title: {
        color: '#f4d742'
    },
    loginButton: {
        fontSize: 20,
        color: Colors.primary,
        backgroundColor: Colors.white
    },
    forgotPassword: {
        color: 'white'
    },
	formControl: {
	    paddingBottom: 7,
	    marginLeft: 0
	},
	formText: {
	    color: Colors.white,
	},
});