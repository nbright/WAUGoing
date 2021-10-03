import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import PresentCarouselItem from '../../components/PresentCarouselItem';
import { API, graphqlOperation } from 'aws-amplify';
import { listPresents } from '../../graphql/queries';
import styles from '../../screens/PresentRepository/styles';

const PresentRepositoryScreen = props => {
  const [presents, setpresents] = useState({ initialState: [] });

  useEffect(() => {
    const fetchpresents = async () => {
      try {
        const presentResult = await API.graphql(graphqlOperation(listPresents));
        setpresents(presentResult.data.listPresents.items);
      } catch (e) {
        console.log(e);
      }
    };

    fetchpresents();
  });

  return (
    <View>
      <FlatList
        style ={styles.flatlist}
        numColumns={4}
        data={presents}
        renderItem={({ item }) => <PresentCarouselItem present={item} />}
      />
    </View>
  );
};

export default PresentRepositoryScreen;
