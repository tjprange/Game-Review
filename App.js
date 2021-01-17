import React, { useState } from 'react';
//import Home from './screens/home.js';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { HomeStack } from './routes/homeStack.js';

const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  // once async completes then render
  if (fontsLoaded) {
    return <HomeStack />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
