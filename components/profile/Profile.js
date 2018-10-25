import React, {Component} from 'react';
import { AsyncStorage, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import { ProfileStyles } from './ProfileStyles';


export class Profile extends Component {
  render() {
    let profilepic = require('../../src/images/profile2.jpg');
    return (
      <View style={{ flex: 1 }}>
        <View style={{flex:5, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={profilepic} style={ProfileStyles.profilepic} /> 
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity style={ProfileStyles.editButton} >
                    <Text> T </Text>
                </TouchableOpacity>
            </View>
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
