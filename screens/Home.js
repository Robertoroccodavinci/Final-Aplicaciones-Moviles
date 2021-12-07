import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {

  return (
   
    <View>

        <Text> 
            Bienvenido a la APP, Home
        </Text>
        
        <TouchableOpacity style={ styles.btns } 
                          onPress={() => navigation.navigate("Home")}>
              <Text style={ styles.btnsTxt } >Iniciar Sessión</Text>
        </TouchableOpacity>

    </View>
  
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