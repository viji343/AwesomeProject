import { StyleSheet, StatusBar } from 'react-native';

export const ListStyles = StyleSheet.create({
        buttonContainer: {
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-end'
        },
        button: {
            backgroundColor: '#39d8d8',
            padding: 15,
            marginTop:10,
            width:120,
            marginRight:13
        },
        buttonText:{
            fontSize:16,
            fontWeight:'bold'
        },
        addButton:{
            flexDirection:'row',
            justifyContent: 'space-between', 
            alignItems: 'center'
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
        },
        flexCenter:{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding:15,
            flex:3
        },
        item: {
            padding: 30,
            fontSize: 24,
            height: 200,
            backgroundColor:'#fff'
        },
    });