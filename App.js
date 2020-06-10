import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import ContainerLayout from './components/layouts/ContainerLayout';
import Form from './components/home/Form';
import Header from './components/home/Header';

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
  return (
    <PaperProvider theme={theme} >
      <StatusBar backgroundColor="maroon" barStyle="dark-content" />
      <Header />
      <ContainerLayout>
        <View style={styles.content}>
          <Form />
        </View>
      </ContainerLayout>
    </PaperProvider >
  );
}

const styles = StyleSheet.create({
  content: {
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1,
    justifyContent: 'center'
  }
});
