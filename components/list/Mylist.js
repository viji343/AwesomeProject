import React, {Component} from 'react';
import { Text, Image, View, TouchableOpacity, FlatList } from 'react-native';
import { Card, ListItem, SearchBar, Icon } from 'react-native-elements';
import { HeaderBar } from '../layout/HeaderBar';
import { ListStyles } from './ListStyles';
import { db } from '../../src/config/Firebase';

let itemsRef = db.ref('/items');

export class Mylist extends Component {
	constructor(props){
		super(props);
		this.state = {
	        items: []
	    }	
	    this.fetchResult = this.fetchResult.bind(this);
	}
    componentDidMount() {
        itemsRef.limitToFirst(2).on('value', (snapshot) => {
            let data = snapshot.val();
        	console.log(data);
            let items = Object.values(data);
            this.setState({items});
         });
    }
    fetchResult(){
    	itemsRef.limitToLast(3).on('value', (snapshot) => {
            let data = snapshot.val();
            let items = Object.values(data);
            var joined = this.state.items.concat(items);
            //const itemsAll = Object.assign({}, this.state.items, { items:items });
            this.setState({items:joined});
        });
    }
  	render() {
  	const users = [
			{
				avatar:require('../../src/images/avatar1.png'),
				name:'Sam Worthington'
			},
			{
				avatar:require('../../src/images/avatar2.jpg'),
				name:'Sigourney Weaver'
			},
			{
				avatar:require('../../src/images/avatar3.jpg'),
				name:'Stephen Lang'
			},
			{
				avatar:require('../../src/images/avatar4.jpg'),
				name:'Michelle Rodriguez'
			},
			{
				avatar:require('../../src/images/avatar5.jpg'),
				name:'Giovanni Ribisi'
			},
			{
				avatar:require('../../src/images/avatar6.jpg'),
				name:'Joel David Moore'
			},
			{
				avatar:require('../../src/images/avatar7.png'),
				name:'Zoe Saldana'
			}
		];
    return (
      	<View style={{ flex: 1 }}>
	      	<View style = {ListStyles.buttonContainer}>
		         <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddListItem')} style={ListStyles.button} >
	                <View style={ListStyles.addButton}>
	                	<Icon name='plus' type='font-awesome' color='white' />
	                	<Text style={ListStyles.buttonText} > Add Item </Text>
	              	</View>
            	</TouchableOpacity>
		     </View>

      		<FlatList
      		onEndReached={this.fetchResult}
            onEndReachedThreshold={0.7}
          	data={this.state.items}
          	renderItem={({item}) => 
          			<Text style={ListStyles.item}>{item.name}</Text>
          		}
        	/>

            {/*<Card title="Item List"  >
		  	{
			    this.state.items.map((item, i) => {
			      return (
			        <ListItem
			          key={i}
			          title={item.name}
			        />
			      );
			    })
		  	}
			</Card>*/
		 	/*<Card title="FRIENDS"  >
		  	{
			    users.map((u, i) => {
			      return (
			        <ListItem
			          key={i}
			          roundAvatar
			          title={u.name}
			          avatar={u.avatar}
			        />
			      );
			    })
		  	}
			</Card>*/}
      	</View>
    );
  }
}