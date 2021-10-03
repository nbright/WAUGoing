import React from 'react';
import { View, Text, Image, useWindowDimensions, Pressable } from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';

const Present = props => {
    const present = props.present;
    const width = useWindowDimensions().width;

    const navigation = useNavigation();

    const goTopresentPage = () => {
        navigation.navigate('present', { presentId: present.id });
    };

    return (
        <Pressable
            onPress={goTopresentPage}
            style={[styles.container]}>
            <View style={styles.innerContainer}>
                {/* Image  */}
                <Image style={styles.image} source={{ uri: present.image }} />

                <View style={styles.card}>
                    {/* Type & Description */}
                    <Text style={styles.description}>
                        {present.name}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
};

export default Present;
