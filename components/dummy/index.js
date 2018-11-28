import React, { Component } from 'react';
import { Text, View, BackHandler } from 'react-native';
/* import { NavigationActions } from 'react-navigation'

this.props.navigation.dispatch(NavigationActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({ routeName: 'ParentStackScreen' })]
})) */

export default class index extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    
    handleBackButton() {
        return true;
    }

    render() {
      return (
        <View>
          <Text>Dummy</Text>
        </View>
      )
    }
}
