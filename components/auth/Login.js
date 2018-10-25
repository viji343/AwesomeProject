import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, AsyncStorage} from 'react-native';
import { LoginStyles } from './LoginStyles';

export class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            isLoggedIn: false,
            authToken: '', // response from server
            id: '', // response from server
            name: '',
            validation:{
                error:false,
                message:''
                /*login:{
                    error: false,
                    message:'Username or Password is incorrect.',
                },
                username:{
                    error:false,
                    message:'Username is required.',
                },
                password:{
                    error:false,
                    message:'Password is required.',
                }*/
            }
        }
        this.checkValid = this.checkValid.bind(this);
    }
    checkValid(){
        if(this.state.username && this.state.password){
            this.doLogin(this.state.username, this.state.password);
        }else if(!this.state.username && !this.state.password){
            const validation = Object.assign({}, this.state.validation, { error: true,message:'Username and Password is required.' });
            this.setState({validation});

        }else if(!this.state.username){
            const validation = Object.assign({}, this.state.validation, { error: true, message:'Username is required.' });
            this.setState({validation});
        }
        else if(!this.state.password){
            const validation = Object.assign({}, this.state.validation, { error: true, message:'Password is required.' });
            this.setState({validation});
        }
    }
    async componentWillMount() {
        /* Check storage if user was previously logged-in to the device */
        await this.setState({
            isLoggedIn: false,
            authToken: '', // response from server
            id: '', // response from server
            name: ''
        });
    }
    async doLogin(un, ps){
        // Do server authentication check here
        // let userCreds await serverAuthCheck(un, ps);
        const credentials=[
            {
                username:'viji',
                password:'optisol',
                token:'tesssssssdsd3sfds32',
                id:1,
                name:'Vijayalakshmi'
            },
            {
                username:'raji',
                password:'optisol',
                token:'dfghRF34sdGDGdfrerd',
                id:2,
                name:'Raji'  
            },
            {
                username:'honey',
                password:'optisol',
                token:'dfsdwer45ddfgfgdfgd',
                id:3,
                name:'Honey'
            }
        ];
        let userCreds = {
            isLoggedIn: false,
            authToken: '', // response from server
            id: '', // response from server
            name: ''
        };

        credentials.map(
            function(details){
                if(details.username==un && details.password==ps ){
                    userCreds = {
                        isLoggedIn: true,
                        authToken: details.token, // response from server
                        id: details.id, // response from server
                        name: details.name
                    }
                }
            });
        if(userCreds.isLoggedIn){
            /* Save to storage */
            await AsyncStorage.setItem('user', JSON.stringify(userCreds));
            this.props.navigation.navigate('Dashboard');    
        }else{
            const validation = Object.assign({}, this.state.validation, { error: true,message:'Username or Password is incorrect.' });
            this.setState({validation});
        }
        
    }
    render(){
        let isLoggedIn      = this.state.isLoggedIn; //this.props.user.isLoggedIn;
        let loginError      = this.state.validation.error; //this.props.user.isLoggedIn;
        let loginErrorMsg   = this.state.validation.message;

        return(
            <View style={LoginStyles.container}>
                <View style={LoginStyles.navBar}>
                    <Text style={LoginStyles.navBarHeader}>Login</Text>
                </View>

                <View style={LoginStyles.content}>
                    <View>
                        <Text style={LoginStyles.label}>Username</Text>
                            <TextInput
                                style={ loginError ? LoginStyles.invalidInput : LoginStyles.textinput }
                                onChangeText={(text) => this.setState({username:text})}
                            />
                        
                        <Text style={LoginStyles.label}>Password</Text>
                        <TextInput
                            style={loginError ? LoginStyles.invalidInput : LoginStyles.textinput}
                            onChangeText={(text) => this.setState({password:text})}
                            secureTextEntry
                        />
                        
                        {loginError!='' && 
                            <Text style={LoginStyles.red}>{loginErrorMsg}</Text>
                        }

                        <TouchableOpacity onPress={() => this.checkValid()} style={LoginStyles.button} >
                            <Text> Login </Text>
                        </TouchableOpacity>


                    </View>
                </View>
            </View>

            /*<View style={{flex:1}} >
                <View style={LoginStyles.header} >
                    <Text style={LoginStyles.headerText}>Login</Text>
                </View>
                <View style={LoginStyles.content} >
                    
                        <TextInput style={LoginStyles.input} placeholder="Enter Username" onChangeText={(username) => this.setState({username}) } />
                        <TextInput style={LoginStyles.input} placeholder="Enter Password" onChangeText={(password) => this.setState({password}) } />
                    
                    <TouchableOpacity onPress={()=>this.onPressLearnMore()} style={LoginStyles.button} >
                        <Text> Login </Text>
                    </TouchableOpacity>
                </View>
                <View style={LoginStyles.footer} >
                    <Text>@2018</Text>
                </View>
            </View>*/
        )
    }
}