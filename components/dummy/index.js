import React, { Component } from 'react';
import { BackHandler, TouchableHighlight, View, Alert, StyleSheet } from 'react-native';
import {Container, Content, List, ListItem, Text} from 'native-base';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';


class Dummy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                'dummy item1',
                'dummy item2',
                'dummy item3',
                'dummy item4',
                'dummy item5',
                'dummy item6',
            ]
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.standalone}>
                <SwipeRow leftOpenValue={75} rightOpenValue={-75}>
                    <View style={styles.standaloneRowBack}>
                    <Text style={styles.backTextWhite}>Left</Text>
                    <Text style={styles.backTextWhite}>Right</Text>
                    </View>
                    <View style={styles.standaloneRowFront}>
                    <Text>I am a standalone SwipeRow</Text>
                    </View>
                </SwipeRow>
                </View>                
        </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  standalone: {
    marginTop: 30,
    marginBottom: 30,
  },
  standaloneRowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    justifyContent: 'center',
    height: 50,
  },
  standaloneRowBack: {
    alignItems: 'center',
    backgroundColor: '#8BC645',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
  controls: {
    alignItems: 'center',
    marginBottom: 30,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  switch: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10,
    width: 100,
  },
});
export default Dummy;