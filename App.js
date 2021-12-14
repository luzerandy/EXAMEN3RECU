import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FrasesProvider from './context/context';
import Top from './screens/Top';

export default function App() {
  return (
    <FrasesProvider>
    <NavigationContainer>
      <Top/>

    </NavigationContainer>
    </FrasesProvider>
    
  );
}

