import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs'

const Tabs = createBottomTabNavigator();

import Home from './screens/Home';

export default function App() {

  return (

    <NavigationContainer>

      <Tabs.Navigator  initialRouteName="Pais"
      >
        <Tabs.Screen name="Pais" component={Pais} options={{  headerShown: false }} />

        {/* <Tabs.Screen name="Clima" component={Clima} options={{  headerShown: false }} /> */}
        
        
      </Tabs.Navigator>

    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

