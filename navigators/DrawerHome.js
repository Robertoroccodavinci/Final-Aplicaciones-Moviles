import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

import Home from './screens/Home';

export default function App() {

  return (

    <NavigationContainer>

      <Drawer.Navigator  initialRouteName="Home"
      >

        <Drawer.Screen  name="Home"  component={Home} 
                        options={{  headerShown: false  }} 
        />

        
       {/* <Drawer.Screen name="Listado Paises" component={ListadoPaises} options={{  headerShown: false }} /> */}
        
        
      </Drawer.Navigator>

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

