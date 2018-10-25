import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
        button: {
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
            marginTop:10
        },
        bigblue: {
            color: 'blue',
            fontWeight: 'bold',
            fontSize: 30,
        },
        red: {
            color: 'red',
        },
        smalldiv:{
            flex:1,
            backgroundColor: 'powderblue'
        },
        mediumdiv:{
            flex:8,
            backgroundColor: 'skyblue',
            alignItems: 'center'
        },
        bigdiv:{
            flex:1,
            backgroundColor: 'steelblue'
        },
        header:{
            flex:1,
            backgroundColor: 'powderblue',
            alignItems: 'center'
        },
        content:{
            flex:8,
            backgroundColor: 'skyblue',
            alignItems: 'center'
        },
        footer:{
            flex:1,
            backgroundColor: 'steelblue',
            alignItems: 'flex-end',
            paddingTop:30
        },
        headerText:{
            fontSize:40,
            fontWeight:'bold'
        },
        input:{
            borderStyle:'solid',
            borderColor:'#000',
            height: 40,
            borderRadius:10
        },
        container: {
            flex: 1,
            backgroundColor: '#fff',
            paddingTop: StatusBar.currentHeight,
        },
        navBar: {
            flexDirection: 'row',
            paddingTop: 25,
            marginBottom: 20,
            height: 64,
            backgroundColor: '#1EAAF1',
        },
        navBarHeader: {
            flex: 1,
            color: '#FFFFFF',
            fontWeight: 'bold',
            textAlign: 'center'
        },
        content: {
            flex: 1,
            paddingLeft: 15,
            paddingRight: 15
        },
        label: {
            color: '#333',
            fontSize: 16,
            marginTop: 15
        },
        textinput: {
            alignSelf: 'stretch',
            height: 40, 
            fontSize: 16,
            borderWidth: 2,
            borderColor: "black",
        },
        invalidInput:{
            alignSelf: 'stretch',
            height: 40, 
            fontSize: 16,
            borderWidth: 2,
            borderColor: "red",
        }
    });
