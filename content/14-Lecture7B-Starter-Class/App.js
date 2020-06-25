import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StackNav } from './App/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
