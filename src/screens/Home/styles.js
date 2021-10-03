import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    image : {
        width : '100%',      // whole of the screen
        height : 500,
        resizeMode : 'cover' // cover the whole View which is displayed
    },
    title : {
        fontSize : 50,
        fontWeight : 'bold',
        color : 'white',
        width : '40%',
        marginLeft : 25,
    },
    button :{
        backgroundColor : '#fff',
        marginLeft : 25,
        marginTop : 25,
        width : 200,
        height : 40,
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center',
    },
    buttonText :{
        fontSize : 16,
        fontWeight : 'bold',
    },
});

export default Styles;