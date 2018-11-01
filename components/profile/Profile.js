import React, {Component} from 'react';
import { AsyncStorage, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import { ProfileStyles } from './ProfileStyles';
import { Icon } from 'react-native-elements';


export class Profile extends Component {
  render() {
    let profilepic = require('../../src/images/profile2.jpg');
    return (
      <View style={{ flex: 1,padding:10 }}>
        <View style={{flex:5, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={profilepic} style={ProfileStyles.profilepic} /> 
        </View>
        <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems: 'flex-end'}}>
                <TouchableOpacity style={ProfileStyles.editButton} >
                    <Icon name='pencil' type='font-awesome' color='white' />
                </TouchableOpacity>
            </View>
        <View style={ProfileStyles.content}>
            <Text style={ProfileStyles.label} >Mobile</Text>
            <Text>87954215</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={ProfileStyles.label}>Membership</Text>
                <Text style={ProfileStyles.rightText}>61 orders</Text>
            </View>
            <Text>Gold</Text>
            <Text style={ProfileStyles.label}>Address</Text>
            <Text>45,testing stero street,</Text>
            <Text>thef,</Text>
            <Text>Tamilnadu,</Text>
            <Text>pin-625020.</Text>
        </View>
      </View>
    );
  }
}
