import React, {Component} from 'react';
import { AsyncStorage, Text, View, TextInput, TouchableOpacity} from 'react-native';

export class Mylist extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>List items</Text>
      </View>
    );
  }
}