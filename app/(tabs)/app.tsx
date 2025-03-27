import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Atividade1 from './Atividade1';
import Logar from './Logar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logar">
        <Stack.Screen name="Logar" component={Logar} />
        <Stack.Screen name="Atividade1" component={Atividade1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
