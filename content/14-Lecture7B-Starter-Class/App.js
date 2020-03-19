import React from 'react';
import { createAppContainer } from 'react-navigation';

import { StackNav } from './App/Navigation';

const AppContainer = createAppContainer(StackNav);

export default function App() {
  return (
    <AppContainer />
  );
}
