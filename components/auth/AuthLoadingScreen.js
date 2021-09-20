import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View, Image
} from 'react-native';
import { styles } from '../../src/style/styles';
import SplashScreen from 'react-native-splash-screen';

export class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props); 
    this._bootstrapAsync();
  }

  componentDidMount() {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }
  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    
    //const user = await AsyncStorage.getItem('user');
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    const user = await AsyncStorage.getItem('user')
            .then(req => JSON.parse(req))
            .then((data) => {
                /* Set state of the user who was previously logged-in */
                if(data){
                    //this.props.log_in(data);
                    //user = data;
                    return data;
                }
            }
      );
    this.props.navigation.navigate( (user && user.authToken) ? 'App' : 'Auth');
        
  };

  // Render any loading content that you like here
  render() {

    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}