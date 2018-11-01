import React, {Component} from 'react';
import { Text, Image, View, Alert, TouchableOpacity, TextInput } from 'react-native';
import { Card, ListItem, SearchBar, Icon } from 'react-native-elements';
import { ListStyles } from './ListStyles';
import { addItem } from '../../src/services/ItemServices';

export class AddListItem extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			item:''
		}
		this.submitItem = this.submitItem.bind(this);
	}
	submitItem(){
		addItem(this.state.item);
		Alert.alert('Item saved successfully');
		this.props.navigation.navigate('Mylist');
	}

  	render() {
    	return (
	      	<View style={ListStyles.flexCenter}>
	      		<TextInput
	                style= {ListStyles.textinput}
	                onChangeText={(text) => this.setState({item:text})}
	            />
	      		<TouchableOpacity onPress={()=>this.submitItem()} style={ListStyles.button} >
	               <View style={ListStyles.addButton}>
	                	<Icon name='plus' type='font-awesome' color='white' />
	                	<Text style={ListStyles.buttonText} > Add Item </Text>
	              	</View>
	            </TouchableOpacity>
			 	
	      	</View>
    	);
  	}
}