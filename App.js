/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { DrawerItems, SafeAreaView, AsyncStorage, AppRegistry, Text, View, Image, TextInput, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator,createDrawerNavigator} from 'react-navigation';
import { styles } from './src/style/styles';
import { Login } from './components/auth/Login';
import { Dashboard } from './components/dashboard/Dashboard';
import { AuthLoadingScreen } from './components/auth/AuthLoadingScreen';
import { Profile } from './components/profile/Profile';
import { Settings } from './components/settings/Settings';
import { Mylist } from './components/list/Mylist';

class Logout extends Component {
    constructor(props){
        super(props);
    }
    async componentWillMount() {
        await AsyncStorage.removeItem('user');
        this.props.navigation.navigate('Login');
    }
    render(){
        return(
            <Text></Text>
            );
    }
}

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home'
  };

  render() {
    return (
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Notifications')}
      ><Text> my home notifications </Text>
      </TouchableOpacity>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications'
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.goBack()}
      ><Text> my notification </Text>
      </TouchableOpacity>
    );
  }
}

const styless = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const BottomTab = createBottomTabNavigator({ 
    Settings: Settings,
    Home: MyHomeScreen,
    Notifications: MyNotificationsScreen,
});

const AppStack = createDrawerNavigator({
    Dashboard: Dashboard,
    Profile : Profile,
    'My List' : Mylist,
    Settings : BottomTab,
    Logout :Logout
    
});



const AuthStack = createStackNavigator({ 
    Login: Login
});

export default createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack, 
    }, 
    {
        initialRouteName: 'AuthLoading',
    }
);


{/*
    export default class App extends Component {
      constructor(props){
        super(props);
        this.state = {
          isBlinking : true,
          inputtext:'',
          buttonText:''
        }
        
        // Toggle the state every second
        setInterval(() => {
          this.setState(prevState => {
            return {
              isBlinking : !prevState.isBlinking
            };
          })
        },1000);

        this.handleTextInput = this.handleTextInput.bind(this);
        this.onPressLearnMore = this.onPressLearnMore.bind(this);
      }
      handleTextInput(text){
            this.setState({inputtext:text});
      }
      onPressLearnMore(){
            this.setState({buttonText:'button pressed'});

      }
      render() {
        let displayText = this.state.isBlinking ? 'I love to blink':'***';

        return (

            <View style={{flex:1,flexDirection: 'column',
            justifyContent: 'space-between'}} >
                
                <View style={styles.smalldiv} >
                    <Text style={styles.bigblue}>Header</Text>
                </View>

                <View style={styles.mediumdiv}>
                    <LotsOfGreetings text={displayText} onChangeText={(inputtext) => this.handleTextInput(inputtext) } />
                    <Pizza pizzatext={this.state.inputtext} > </Pizza>
                    <TouchableOpacity onPress={()=>this.onPressLearnMore()} style={styles.button} >
                        <Text> Touch Here </Text>
                    </TouchableOpacity>
                    <Text>{this.state.buttonText}</Text>
                </View>

                <View style={styles.bigdiv} >
                    <Text style={styles.bigblue}>Footer</Text>
                </View>

            </View>
        );
      }
    }

    class LotsOfGreetings extends Component {
      render() {
        return (
        <View>
            <Greeting name='Viji' />
            <Greeting name='Jaina' />
            <Greeting name='Valeera' />
            <Bananas/>
            <Blink blinktext={this.props.text} />
            <Blink blinktext={this.props.text} style={styles.bigblue}/>
            <Blink blinktext={this.props.text} style={styles.red}/>
            <TextInput style={{height: 40}}
              placeholder="Type here to translate!"
              onChangeText={this.props.onChangeText} />
            
        </View>
        );
      }
    }

    class Bananas extends Component {
      render() {
        let pic = {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};        

          return (
          <View >
            <Image source={pic} style={{width: 193, height: 110}}/>
            <Text>Hello Viji!</Text>
          </View>
        );
      }
    }

    class Greeting extends Component {
      render() {
        return (
          <View style={{alignItems: 'center'}}>
            <Text>{this.props.name}</Text>
          </View>
        );
      }
    }

    class Blink extends Component{
      render(){
        return(
          <Text style={this.props.style}>{this.props.blinktext}</Text>
          
        )
      }
    }

    class Pizza extends Component{
        render(){
            return(
                <Text style={{padding: 10, fontSize: 42}}>
                    { (this.props.pizzatext).split(' ').map((word)=>word && word+'🍕').join('**') }
                </Text>
            )
        }
    }


    AppRegistry.registerComponent('AwesomeProject', () => App); 
*/}
