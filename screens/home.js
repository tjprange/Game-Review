import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { globalStyles } from '../styles/global.js';

//                           \/ same as props.navigation with props as parameter
export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: 'lorem ipsum',
      key: '3',
    },
  ]);
  // const pressHandler = () => {
  //   //navigation.push('Details');
  //   navigation.navigate('Details');
  // };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <Button title='go to review dets' onPress={pressHandler} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
