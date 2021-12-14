import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

import Home from '../screens/Home';
import Contacto from '../screens/Contacto';
import ListaPaises from '../screens/ListaPaises';

import CustomSidebarMenu from '../CustomSidebarMenu';
import { set } from 'react-native-reanimated';

export default function DrawerHome({route, navigation}) {
  

  
  
  
  return (

    <Drawer.Navigator initialRouteName="Home"    
                      drawerContent={(props) => <CustomSidebarMenu {...props} />} >

      <Drawer.Screen  name="Home"   component={Home}
                      initialParams={{lista: route.params.datos}} />

      <Drawer.Screen  name="ListaPaises" component={ListaPaises} 
                      initialParams={{lista: route.params.datos}} />

      <Drawer.Screen  name="Contacto"   component={Contacto} />
      
      {/* <Drawer.Screen name="Listado Paises" component={ListadoPaises} options={{  headerShown: false }} /> */}
      
    </Drawer.Navigator>
  
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

