import React, {Component} from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

export class MyNotifications extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications'
  };

  render() {
    let srcc = 'https://media3.giphy.com/media/wWue0rCDOphOE/giphy.gif';
    return (
        <View >
            <View style={{flex:3}}>
            <Image
              style={{width: 300, height: 200}}
              source={{uri: srcc}} />
            </View>
            <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}>
                <Text> my notification </Text>
            </TouchableOpacity>

        </View>
    );
  }
}