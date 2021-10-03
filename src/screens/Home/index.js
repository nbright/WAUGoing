import React, { useState } from 'react';
import {View, ImageBackground, Text, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';

const HomeScreen = () =>{
    const [isReceived, setIsReceived] = useState(false);
    const navigation = useNavigation();


    const newPresent = {
        name: "kimbab",
        image: good.value,
        tomorrow: tomorrow.value,
        description: note.value,
        username: navigation.getParam('username')
      };
      id
      name
      image
      groupName
      presentCode
      description
      createdAt
      updatedAt



    async function addPresent () {
        await API.graphql(graphqlOperation(mutations.createPresent, {input: newPresent}))
           .then(() => {
            Alert.alert('Note saved')
            setBad('')
            setNote('');
            setGood('');
            setTomorrow('');
          })
          .catch(err => {
            if (! err.message) {
              console.log('Error while saving the note. ', err)
              alert('Error while saving the note.')
            } else {
              console.log('Error while saving the note. ', err.message)
              alert('Error while saving the note.')
            }
          })
  
    };

    const onReceive = () => {
        
        addPresent();

        setIsReceived(true);
      }
    return (
        <ImageBackground  source={require('../../../assets/images/wallpaper.jpg')} 
            style = {styles.image}>

        {!isReceived ? (
            <View>
                {/* title */}
                <Text style={styles.title}>오늘의 선물</Text>
                {/* button */}
                <Pressable 
                    style={styles.button} 
                    onPress = {onReceive} >
                    <Text style={styles.buttonText}>받는다</Text>
                </Pressable>       
            </View>
            ) : (
                <View>
                    {/* title */}
                    <Text style={styles.title}>받았다.</Text>
                </View>
            )}                
            
        </ImageBackground>
    );
};

export default HomeScreen;