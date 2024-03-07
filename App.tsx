
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StackNavigation } from './src/navigations/Navigation';
import Header from './src/screens/header/Header';




export default function App() {
  return (

      <NavigationContainer>
        <Header/>
        <StackNavigation />
      </NavigationContainer>

  );
}
