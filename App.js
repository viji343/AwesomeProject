/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// Checking Commit

import React, {Component} from 'react';
import { DrawerItems, SafeAreaView, AsyncStorage, AppRegistry, Text, View, Image, TextInput, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator,createDrawerNavigator,createMaterialTopTabNavigator } from 'react-navigation';
import { Icon, SearchBar } from 'react-native-elements';
import { YellowBox } from 'react-native';

import { styles } from './src/style/styles';
import { AuthLoadingScreen } from './components/auth/AuthLoadingScreen';
import { CustomSplashScreen } from './components/auth/CustomSplashScreen';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Dashboard } from './components/dashboard/Dashboard';
import { Profile } from './components/profile/Profile';
import { Settings } from './components/settings/Settings';
import { Mylist } from './components/list/Mylist';
import { AddListItem } from './components/list/AddListItem';
import { MyNotifications } from './components/notification/MyNotifications';
import { Menu } from './components/layout/Menu';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
console.ignoredYellowBox = ['Setting a timer'];

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



const styless = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const BottomTab = createBottomTabNavigator({ 
    Settings: Settings,
    Home: MyHomeScreen,
    Notifications: MyNotifications,
},{
    tabBarOptions: {
        activeTintColor: '#fff',
        activeBackgroundColor:'#71b2f5',
        inactiveTintColor: 'gray',
        inactiveBackgroundColor:'white',
        style: {
            backgroundColor: '#fff',
        },
        indicatorStyle: {
            backgroundColor: '#000',
        },
        labelStyle: {
            fontSize: 15,
            fontWeight:'bold',
            textAlign:'center'
        },
    }
});

const Tabs = createMaterialTopTabNavigator({
    Dashboard:Dashboard,
  Profile:Profile,
  Mylist:Mylist,
},{
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#fff',
        },
        indicatorStyle: {
            backgroundColor: '#000',
        },
    }
});



headerLeft=(navigation)=>()=>{
    return <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Icon name="menu" size={30} />
        </TouchableOpacity>;
}

const DashboardStack = createStackNavigator({ 
    Dashboard : {
        screen: Dashboard,
        navigationOptions: ({navigation}) => ({
          title: "Main",
          headerLeft:(headerLeft(navigation)
          )
        })
    }
});
const stylesHeader = StyleSheet.create({
  header: {
    paddingTop: 10,
    backgroundColor: '#e1e8ee',

  },
});

const MylistStack = createStackNavigator({ 
    Mylist : {
        screen: Mylist,
        navigationOptions: ({navigation}) => ({
          
            headerLeft:(headerLeft(navigation))
        }),
    },
    AddListItem : {
        screen: AddListItem,
        /*navigationOptions: ({navigation}) => ({
          
            headerLeft:(headerLeft(navigation))
        }),*/
    }
});


const AppStack = createDrawerNavigator({
    Dashboard:DashboardStack,
    Profile:Profile,
    Mylist:MylistStack,
    Settings:BottomTab,
    Logout:Logout
}/*,{
    initialRouteName: 'Dashboard',
    contentComponent: Menu,
    drawerWidth: 300
}*/);

const AuthStack = createStackNavigator({ 
    Login: Login,
    Register:Register
});



export default createSwitchNavigator(
    {
        CustomSplashScreen:CustomSplashScreen,
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack
    }, 
    {
        initialRouteName: 'CustomSplashScreen',
    }
);

/*
    const AppStack = createDrawerNavigator({
        Dashboard:Dashboard,
        Profile:Profile,
        Mylist:Mylist,
        Settings:BottomTab,
    },{
        initialRouteName: 'Dashboard',
        contentComponent: Menu,
        drawerWidth: 300
    });
*/
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
