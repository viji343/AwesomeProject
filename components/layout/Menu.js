import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import { DrawerActions } from 'react-navigation';
import { Icon } from 'react-native-elements';

export class Menu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });   
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }

  render () {
    return (
      <View>
        <ScrollView>
          <View>
              <TouchableOpacity onPress={this.navigateToScreen('Dashboard')} >
                <View style="{{flexDirection: 'row',alignItems: 'center'}}">
                    <Icon name='home' type='font-awesome' color='black' style="{{textAlign:'left'}}" />
                    <Text style="{{textAlign:'center'}}">Dashboard</Text>
                </View>
                </TouchableOpacity>
            <View >
              <Text onPress={this.navigateToScreen('Profile')}>
               Profile
              </Text>
            </View>
            <View >
              <Text onPress={this.navigateToScreen('Mylist')}>
              Mylist
              </Text>
            </View>
            <View >
              <Text onPress={this.navigateToScreen('Settings')}>
              Settings
              </Text>
            </View>
            <View >
              <Text onPress={this.navigateToScreen('Logout')}>
              Logout
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

Menu.propTypes = {
  navigation: PropTypes.object
};

export default Menu;