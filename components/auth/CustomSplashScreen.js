import React from 'react';
import {
  View, Image
} from 'react-native';
import { AuthLoadingScreen } from './AuthLoadingScreen';

export class CustomSplashScreen extends React.Component {
    
    componentWillMount(){

        setTimeout(() => {
            this.props.navigation.navigate( 'AuthLoading');
        }, 4000);
    }

    // Render any loading content that you like here
    render() {
        let pic = require('../../src/images/splash.gif');
        return (
            <View style={{flex:3,flexDirection:'row',justifyContent:'center',alignItems: 'center'}}>
                <Image source={pic} />
                
            </View>
        );
    }
}