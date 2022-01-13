import React, {Component} from 'react';
import { AsyncStorage, Text, View, Image, ToastAndroid } from 'react-native';
import { DashboardStyles } from './DashboardStyles';
import { Divider } from 'react-native-elements';

export class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:false,
            authToken: '', // response from server
            id: '', // response from server
            name: ''
        }
    }

    async componentWillMount() {
        ToastAndroid.showWithGravityAndOffset(
          'Welcome!',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50
        );
        
        /* Check storage if user was previously logged-in to the device */
        await AsyncStorage.getItem('user')
            .then(req => JSON.parse(req))
            .then((data) => {
                /* Set state of the user who was previously logged-in */
                if(data){
                    //this.props.log_in(data);
                    this.setState({
                        isLoggedIn:data.isLoggedIn,
                        authToken: data.authToken, // response from server
                        id: data.id, // response from server
                        name: data.name
                    })
                }
            }
        );
    }

    render(){
        let pic = require('../../src/images/dummylogo.png');
        return(
            <View style={DashboardStyles.container}>
                
                    <View style={{flex:3,flexDirection:'row',justifyContent:'center',alignItems: 'center'}}>
                    <Image source={pic} style={DashboardStyles.logo} />
                    </View>
                    <Divider style={{ backgroundColor: 'green' }} />
                    <View style={{flex:4,marginTop:20}}>
                        <Text style={DashboardStyles.welcomeText}> Welcome {this.state.name} !! </Text>
                        <Text style={DashboardStyles.dashboardContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                        <Text style={DashboardStyles.dashboardContent}>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    </View>
                
            </View>
            )
    }
}