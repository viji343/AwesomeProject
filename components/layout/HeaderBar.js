import React, {Component} from 'react';
import { Text, Image, View} from 'react-native';
import { Header, SearchBar } from 'react-native-elements';

export class HeaderBar extends Component {
	constructor(props){
        super(props);
        this.searchOnChange = this.searchOnChange.bind(this);
		this.searchOnClear = this.searchOnClear.bind(this);
    }
    searchOnChange(){

	}
	searchOnClear(){

	}
	render(){
		return(

			<Header leftComponent={{ icon: 'menu', color: '#fff' }}
			  centerComponent={<SearchBar
			  onChangeText={this.searchOnChange()}
			  onClear={this.searchOnClear()}
			  placeholder='Type Here...' />}
			  rightComponent={{ icon: 'home', color: '#fff' }}
			/>
		);
	}
}
