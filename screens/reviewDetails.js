import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global.js';

export default function ReviewDetails({ route, navigation }) {
  const { title, body, rating } = route.params;
  //console.log(route.params);
  //console.log('key', key);
  // const pressHandler = () => {
  //   //navigation.pop();
  //   navigation.goBack();
  // };

  return (
    <View>
      {/* <Button title='back to home' onPress={pressHandler} /> /> */}
      <Text style={globalStyles.titleText}>{title}</Text>
      <Text style={globalStyles.titleText}>{body}</Text>
      <Text style={globalStyles.titleText}>{rating}</Text>
    </View>
  );
}
