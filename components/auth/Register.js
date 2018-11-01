import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, AsyncStorage} from 'react-native';
import { auth } from '../../src/config/Firebase';
import { LoginStyles } from './LoginStyles';

export class Register extends Component{
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
        this.checkMatchPassword = this.checkMatchPassword.bind(this);
    }
    checkValid(){
        if(this.state.email && this.state.password && this.state.confpassword){

            const reg = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/;
            if (reg.test(this.state.email) !== true){
                const validation = Object.assign({}, this.state.validation, { error: true,message:'Invalid Email format.' });
                this.setState({validation});
            }else if(this.checkMatchPassword()){
                this.doSignup(this.state.email, this.state.password);
            }

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
        else if(!this.state.confpassword){
            const validation = Object.assign({}, this.state.validation, { error: true, message:'Confirm Password is required.' });
            this.setState({validation});
        }
    }
    
    checkMatchPassword(){
        if(this.state.confpassword && this.state.password && this.state.confpassword !== this.state.password){
            const validation = Object.assign({}, this.state.validation, { error: true,message:'Confirm Password should be same as password.' });
            this.setState({validation});
            return false;
        }else{
            return true;
        }
    }   
    async doSignup(un, ps){
        let userCreds = {
            isLoggedIn: false,
            authToken: '', // response from server
            id: '', // response from server
            name: ''
        };
        
        auth.createUserWithEmailAndPassword(un, ps)
            .then(() => { 
                const validation = Object.assign({}, this.state.validation, { error: false,message:'' });
                this.setState({validation});
                this.props.navigation.navigate('Login');
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
                    <Text style={LoginStyles.navBarHeader}>Register</Text>
                </View>

                <View style={LoginStyles.content}>
                    <View>
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

                        <Text style={LoginStyles.label}>Confirm Password</Text>
                        <TextInput
                            style={loginError ? LoginStyles.invalidInput : LoginStyles.textinput}
                            onChangeText={(inputtext) => this.setState({confpassword:inputtext})}
                            secureTextEntry
                        />
                        
                        {loginError!='' && 
                            <Text style={LoginStyles.red}>{loginErrorMsg}</Text>
                        }

                        <TouchableOpacity onPress={() => this.checkValid()} style={LoginStyles.button} >
                            <Text> Signup </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}