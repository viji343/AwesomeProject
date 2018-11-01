import React, {Component} from 'react';
import { AsyncStorage, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { HeaderBar } from '../layout/HeaderBar';
import { ButtonGroup,PricingCard } from 'react-native-elements';

export class Settings extends Component {
	constructor(props){
		super(props);
		this.state = {
		    index: 0
		}
	}
	updateIndex = (index) => {
    	this.setState({index})
  	}
  	render() {
    	return (
    		
    		<View style={{ flex: 1}}>
      			<HeaderBar />
        		<Text>Settings</Text>
        		<ScrollView>
      			<View >
			      <ButtonGroup
			        selectedBackgroundColor="pink"
			        onPress={this.updateIndex}
			        selectedIndex={this.state.index}
			        buttons={['Hello', 'Goodbye']}
			        containerStyle={{height: 30}} />
			    </View>
			    <PricingCard
				  color='#4f9deb'
				  title='Free'
				  price='$0'
				  info={['1 User', 'Basic Support', 'All Core Features']}
				  button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
				/>
				<PricingCard
				  color='#4f9deb'
				  title='Basic'
				  price='$10'
				  info={['5 User', 'All Support', 'All Core Features']}
				  button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
				/>
				</ScrollView>
      		</View>
      		
    	);
  	}
}