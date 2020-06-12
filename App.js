import React, { useEffect } from 'react'
import { StatusBar, YellowBox } from 'react-native'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
import HomeRoute from './routes/HomeRoute'
import * as firebase from 'firebase'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'crimson',
    accent: 'maroon',
  },
};

export default function App() {

  useEffect(() => {
    YellowBox.ignoreWarnings(['Setting a timer']);
    const firebaseConfig = {
      apiKey: "AIzaSyAoSC7Am0AA7_vX4asj0psO2lx4xmCJhzc",
      authDomain: "pozharka-3206f.firebaseapp.com",
      databaseURL: "https://pozharka-3206f.firebaseio.com",
      projectId: "pozharka-3206f",
      storageBucket: "pozharka-3206f.appspot.com",
      messagingSenderId: "643565733510",
      appId: "1:643565733510:web:4e4fdf367eb454f07cb307"
    };
    firebase.initializeApp(firebaseConfig)
  }, [])


  return (
    <PaperProvider theme={theme} >
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <HomeRoute />
    </PaperProvider >
  );
}

