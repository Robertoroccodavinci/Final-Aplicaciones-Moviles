import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Home from '../screens/Home';
import Contacto from '../screens/Contacto';
import ListaPaises from '../screens/ListaPaises';

import { set } from 'react-native-reanimated'; 

const google_url = "https://www.googleapis.com/oauth2/v3/userinfo?access_token="  

export default function DrawerHome({route, navigation}) {
  
  const [userInfo, setUserInfo] = React.useState("");
  const [imgUser, setImgUser] = React.useState("");  
  
    function getUserInfo(token){
      fetch(token)
      .then(res => res.json())
      .then(res => {console.log(res);
        setUserInfo(res.name),
        setImgUser(res.picture),
        console.log(userInfo)
      })
    }

      React.useEffect(() => {
      let token = google_url + route.params.auth.accessToken;
      getUserInfo(token);
      },[])
    
    
  return (

    <Drawer.Navigator initialRouteName="Home"    
                       /* drawerContent={(props) => <Menu {...props} />}  > */
                       drawerContent={(props) => <Menu navigation = {navigation} name = {userInfo} img = {imgUser} props = {props} {...props} />}  
                       screenOptions={{
                        drawerStyle: {
                          backgroundColor: '#b3e5fb',
                          
                          
                        },
                        
                        drawerActiveBackgroundColor: '#fbc02d',
                        drawerActiveTintColor:'black'
                        }}
                       >
      <Drawer.Screen  name="Home"   component={Home}
                      initialParams={{lista: route.params.datos}} />

      <Drawer.Screen  name="ListaPaises" component={ListaPaises} 
                      initialParams={{lista: route.params.datos}} />

      <Drawer.Screen  name="Contacto"   component={Contacto} />
      
    </Drawer.Navigator>
    
  );
}

const Menu = ({navigation, name, img, props}) => {
  return(
      <DrawerContentScrollView>
        <View style = {styles.info}>
          <Image style = {styles.imgUser} source={{uri: img}} />
          <Text> {name}</Text>
        </View>
        <DrawerItemList style = {styles.items} {...props} />
        <DrawerItem label = "Logout" onPress = { () => {navigation.navigate("Login")}} />
        <Text style = {styles.about}> Proyecto Final App Moviles </Text>
      </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({

  imgUser: {
    height:50, 
    width:50, 
    borderRadius: 150/1,
    marginBottom: 10,
  },
  info: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  items:{
    color: 'black',
  },
  about:{
    bottom: 20,
    textAlign: 'center',
    color: 'grey',
    marginTop: 450,
  }
});

