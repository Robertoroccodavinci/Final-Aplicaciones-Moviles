import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs'

const Tabs = createBottomTabNavigator();

import Pais from '../screens/Pais';
import Clima from '../screens/Clima';
import Clima2 from '../screens/Clima2';

export default function TabPais({route, navigation}) {

  return (

      <Tabs.Navigator  initialRouteName="Pais"
      >
        <Tabs.Screen name="Pais" component={Pais} options={{  headerShown: false }} initialParams={{ pais: route.params.pais}} />

        <Tabs.Screen name="Clima" component={Clima} options={{  headerShown: false }} initialParams={{ pais: route.params.pais}} />
        
        <Tabs.Screen name="Clima2" component={Clima2} options={{  headerShown: false }} initialParams={{ pais: route.params.pais}} />
        
      </Tabs.Navigator>

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

