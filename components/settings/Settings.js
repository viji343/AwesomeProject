import React, {Component} from 'react';
import { AsyncStorage, Text, View, TextInput, TouchableOpacity} from 'react-native';

export class Settings extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings</Text>
      </View>
    );
  }
}