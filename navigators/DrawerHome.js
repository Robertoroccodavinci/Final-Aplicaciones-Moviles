import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

import Home from '../screens/Home';
import Contacto from '../screens/Contacto';

import CustomSidebarMenu from '../CustomSidebarMenu';

export default function DrawerHome() {
  
  const [paises, setPaises] = React.useState([]);
  const [estado, setEstado] = React.useState(0);
  
  React.useEffect(() => {

    fetch('https://restcountries.com/v3.1/all')
    .then( (response) => { response.json, this.setEstado(response.status) })
    .then( (data) => this.setPaises(data));
/*     let results = data.results;
    let paises = [];
    paises = results.map((element) => {
      return fetch(element.url)
        .then((response) => response.json())
    })
      return Promise.all(paises);

    .then((data) => setData(data))
    .catch(function (error){
        console.log(error);
    }); */
    
  }, []);
  
  return (

    

      <Drawer.Navigator  initialRouteName="Home"
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
      >

        <Drawer.Screen  name="Home"   component={Home}
                        /* options={{  headerShown: false }}   */
        />
        <Drawer.Screen  name="Contacto"   component={Contacto}
                        /* options={{  headerShown: false }}   */
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

