import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

import Home from '../screens/Home';



export default function DrawerHome() {
  
  const [paises, setPaises] = React.useState([]);
  const [estado, setEstado] = React.useState(0);
  
  React.useEffect(() => {

    fetch('https://restcountries.com/v3.1/all')
    .then( (response) => { response.json, this.setEstado(response.status) })
    .then( (data) => this.setPaises(data));
    
  }, []);

  return (

    

      <Drawer.Navigator  initialRouteName="Home"
      >

        <Drawer.Screen  name="Home"   component={Home}
                        options={{  headerShown: false }}  
        />

        
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

