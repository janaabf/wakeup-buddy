import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Alarm from './components/screens/Alarm';
import AlarmRings from './components/screens/AlarmRings';
import Welcome from './components/screens/Welcome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Alarm" component={Alarm} />
          <Stack.Screen name="AlarmRings" component={AlarmRings} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
