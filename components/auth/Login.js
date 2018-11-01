import React, {Component} from 'react';
import { Text, View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import { auth } from '../../src/config/Firebase';
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
                    message:'email or Password is incorrect.',
                },
                email:{
                    error:false,
                    message:'email is required.',
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
        if(this.state.email && this.state.password){
            this.doLogin(this.state.email, this.state.password);
        }else if(!this.state.email && !this.state.password){
            const validation = Object.assign({}, this.state.validation, { error: true,message:'Email and Password is required.' });
            this.setState({validation});

        }else if(!this.state.email){
            const validation = Object.assign({}, this.state.validation, { error: true, message:'Email is required.' });
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
        let userCreds = {
            isLoggedIn: false,
            authToken: '', // response from server
            id: '', // response from server
            name: ''
        };
        // Do server authentication check here
        // let userCreds await serverAuthCheck(un, ps);
        /*  
            const credentials=[
                {
                    email:'viji',
                    password:'optisol',
                    token:'tesssssssdsd3sfds32',
                    id:1,
                    name:'Vijayalakshmi'
                },
                {
                    email:'raji',
                    password:'optisol',
                    token:'dfghRF34sdGDGdfrerd',
                    id:2,
                    name:'Raji'  
                },
                {
                    email:'honey',
                    password:'optisol',
                    token:'dfsdwer45ddfgfgdfgd',
                    id:3,
                    name:'Honey'
                }
            ];
            credentials.map(
                function(details){
                    if(details.email==un && details.password==ps ){
                        userCreds = {
                            isLoggedIn: true,
                            authToken: details.token, // response from server
                            id: details.id, // response from server
                            name: details.name
                        }
                    }
                });
            if(userCreds.isLoggedIn){
                // Save to storage 
                await AsyncStorage.setItem('user', JSON.stringify(userCreds));
                this.props.navigation.navigate('Dashboard');    
            }else{
                const validation = Object.assign({}, this.state.validation, { error: true,message:'email or Password is incorrect.' });
                this.setState({validation});
            }
        */
        await auth.signInWithEmailAndPassword(un, ps)
            .then((res) => { 
                /*var user = auth.currentUser;
                console.log('ssss',user);*/
                const validation = Object.assign({}, this.state.validation, { error: false,message:'' });
                this.setState({validation});
                let userCreds = {
                    isLoggedIn: true,
                    authToken: 'tessdsdssas', // response from server
                    id: '12', // response from server
                    name: un
                };
                AsyncStorage.setItem('user', JSON.stringify(userCreds));
                this.props.navigation.navigate('Dashboard'); 
            })
            .catch((err) => {
                const validation = Object.assign({}, this.state.validation, { error: true,message:err.message });
                this.setState({validation});
            });
        
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
                    <View style="{{flex:1}}">
                        <Text style={LoginStyles.label}>Email</Text>
                            <TextInput
                                style={ loginError ? LoginStyles.invalidInput : LoginStyles.textinput }
                                onChangeText={(text) => this.setState({email:text})}
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
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <TouchableOpacity onPress={() => this.checkValid()} style={LoginStyles.button} >
                            <Text> Login </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')} style={LoginStyles.button} >
                            <Text> Signup </Text>
                        </TouchableOpacity>
                        </View>
                </View>
            </View>

            /*<View style={{flex:1}} >
                <View style={LoginStyles.header} >
                    <Text style={LoginStyles.headerText}>Login</Text>
                </View>
                <View style={LoginStyles.content} >
                    
                        <TextInput style={LoginStyles.input} placeholder="Enter email" onChangeText={(email) => this.setState({email}) } />
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