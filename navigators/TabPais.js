import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs'

const Tabs = createBottomTabNavigator();

import Pais from '../screens/Pais';
import Clima from '../screens/Clima';

export default function TabPais({route, navigation}) {

  return (

      <Tabs.Navigator initialRouteName="Pais"
                      screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                          let iconName;

                          if (route.name === 'Pais') {
                            return  <Image resizeMode={'contain'} style = {{ width:35, height:23}} 
                                           source={{uri: route.params.pais.flags.png}}/>  
                          } else if (route.name === 'Clima') {
                            return <Image style={{ width:25, height:25}}
                                          source={{uri: 'https://www.metaweather.com/static/img/weather/png/64/lc.png'}} />
                          }

                          // You can return any component that you like here!
                          return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarStyle:{ backgroundColor: "#03a9f4", borderTopWidth:1, borderTopColor:'black'},
                        tabBarActiveTintColor: 'black',
                        tabBarInactiveTintColor: '#CCCCCC',
                        headerShown:false,
                        tabBarLabelStyle:{ fontWeight:'bold', fontSize:15 }
                        
                      })} >
        <Tabs.Screen name="Pais" component={Pais} options={{  headerShown: false }} initialParams={{ pais: route.params.pais}} />

        <Tabs.Screen name="Clima" component={Clima} options={{  headerShown: false }} initialParams={{ pais: route.params.pais}} />
        
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

