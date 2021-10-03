import React, {useState} from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import styles from './styles.js';
import Entypo from "react-native-vector-icons/Entypo";

import {useNavigation} from '@react-navigation/native';
import SuggestionRow from "./SuggestionRow";
import searchResults from '../../../assets/data/search';
//import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const DestinationSearchScreen = (props) => {
  // const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <GooglePlacesAutocomplete
        placeholder='Where are you going?'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests', { viewport: details.geometry.viewport });
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: 'AIzaSyCyKXqiHJJPYdXylt4zxFmdW65-Jc1_sdE',
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={(item) => <SuggestionRow item={item} />}
      /> */}
    </View>
  );
};

export default DestinationSearchScreen;
