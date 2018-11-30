import React, { Component } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

const values = {
    size: "large",
    color: '#f1c40f'
};

class Loader extends Component {
    render() {
        return (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator 
                    style={styles.loader}
                    size= {values.size}
                    color={values.color}>
                </ActivityIndicator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#240D5F',
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
      }
});

export default Loader;